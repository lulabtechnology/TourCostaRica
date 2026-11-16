import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import ts from 'typescript';
import sharp from 'sharp';

const cache = new Map();
function load(file) {
  const target = path.resolve(file);
  if (cache.has(target)) return cache.get(target);
  const exports = {};
  cache.set(target, exports);
  const source = fs.readFileSync(target, 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, URL, require: id => {
    if (!id.startsWith('@/')) throw new Error(`Unexpected runtime dependency: ${id}`);
    return load(`${id.slice(2)}.ts`);
  } }, { filename: target });
  return exports;
}
const content = load('lib/content.ts');
const seo = load('lib/seo.ts');
const brand = load('lib/brand.ts');
const cleanMedia = value => Array.isArray(value) ? value.map(cleanMedia)
  : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'image').map(([key, child]) => [key, cleanMedia(child)])) : value;

test('approved content remains byte-for-byte identical apart from media and SEO title', () => {
  const dictionary = cleanMedia(content.getDictionary('en'));
  delete dictionary.seo.title;
  // Captured from the approved content at f96812e before the brand/media update.
  const digest = crypto.createHash('sha256').update(JSON.stringify(dictionary)).digest('hex');
  assert.equal(digest, 'e5b8b8fdcef422378549ec19e6764d873f5cac109dfd7474afa2b5c506a9d18c');
});

test('all pages share the correct brand, canonical domain and existing social image', async () => {
  for (const locale of ['en', 'es']) for (const destination of [undefined, ...content.getDictionary(locale).destinations]) {
    const metadata = seo.pageMetadata(destination, locale);
    assert.ok(metadata.title.absolute.includes(brand.BRAND_NAME));
    assert.ok(!metadata.title.absolute.includes('Adventures'));
    const expected = `${brand.SITE_URL}/${locale}${destination ? `/destinations/${destination.slug}` : ''}`;
    assert.equal(metadata.alternates.canonical, expected);
    assert.equal(metadata.alternates.languages[locale], expected);
    assert.equal(metadata.alternates.languages['x-default'], `${brand.SITE_URL}/en${destination ? `/destinations/${destination.slug}` : ''}`);
    assert.equal(metadata.openGraph.locale, locale === 'es' ? 'es_CR' : 'en_US');
    assert.equal(metadata.openGraph.url, expected);
    assert.equal(metadata.openGraph.siteName, brand.BRAND_NAME);
    assert.equal(metadata.twitter.card, 'summary_large_image');
    for (const image of metadata.openGraph.images) {
      assert.equal(new URL(image.url).origin, brand.ASSET_ORIGIN);
      const file = path.join('public', new URL(image.url).pathname);
      const dimensions = await sharp(file).metadata();
      assert.equal(dimensions.width, 1200);
      assert.equal(dimensions.height, 630);
      assert.equal(dimensions.format, 'jpeg');
      assert.ok(fs.statSync(file).size < 300_000, `social card too large: ${file}`);
    }
  }
});

test('structured data uses existing contact details, services and destination facts', () => {
  for (const locale of ['en', 'es']) for (const destination of [undefined, ...content.getDictionary(locale).destinations]) {
    const data = seo.pageStructuredData(destination, locale);
    assert.equal(data['@context'], 'https://schema.org');
    const organization = data['@graph'].find(item => item['@type'] === 'Organization');
    assert.equal(organization.name, brand.BRAND_NAME);
    assert.equal(organization.email, content.CONTACT_EMAIL);
    assert.equal(organization.contactPoint.length, content.PHONE_CONTACTS.length);
    assert.equal(organization.address, undefined);
    assert.equal(organization.aggregateRating, undefined);
    assert.equal(data['@graph'].find(item => ['WebPage', 'CollectionPage'].includes(item['@type'])).inLanguage, locale);
    if (destination) {
      const entity = data['@graph'].find(item => item['@type'] === 'TouristDestination');
      assert.equal(entity.description, destination.summary);
      assert.equal(entity.name, destination.title);
      assert.equal(data['@graph'].find(item => item['@type'] === 'BreadcrumbList').itemListElement.length, 2);
    } else {
      assert.equal(data['@graph'].find(item => item['@type'] === 'ItemList').itemListElement.length, 8);
      assert.equal(data['@graph'].filter(item => item['@type'] === 'Service').length, 3);
    }
  }
});

test('Spanish translates every content field and retains all destination sections and questions', () => {
  const english = content.getDictionary('en');
  const spanish = content.getDictionary('es');
  const properNames = new Set(['WhatsApp', 'Costa Rica', 'Arenal', 'Guanacaste', 'Manuel Antonio', 'Uvita', 'Puerto Jiménez', 'Tortuguero', 'Nosara', 'Las Catalinas', 'Playa Flamingo', 'Playa Conchal', 'Tamarindo', 'Santa Teresa', 'Punta Catedral', 'Playa Hermosa', 'Playa San Josecito', 'Puerto Viejo de Talamanca', 'Playa Cocles', 'Playa Punta Uva', 'Playa Chiquita', 'Playa Negra']);
  function compare(en, es, location = 'dictionary') {
    if (Array.isArray(en)) {
      assert.equal(es.length, en.length, `${location}: missing translated items`);
      en.forEach((item, index) => compare(item, es[index], `${location}.${index}`));
    } else if (en && typeof en === 'object') {
      assert.equal(Object.keys(es).length, Object.keys(en).length, `${location}: mismatched fields`);
      for (const key of Object.keys(en)) {
        assert.ok(Object.hasOwn(es, key), `${location}.${key}: missing field`);
        if (!['locale', 'slug', 'image', 'kind'].includes(key)) compare(en[key], es[key], `${location}.${key}`);
        else if (key !== 'locale') assert.equal(es[key], en[key], `${location}.${key}: changed media or routing`);
      }
    } else if (typeof en === 'string') {
      assert.ok(typeof es === 'string' && es.trim().length, `${location}: empty translation`);
      if (!properNames.has(en)) assert.notEqual(es, en, `${location}: untranslated English text`);
    }
  }
  compare(english, spanish);
  assert.equal(spanish.destinations.length, 8);
});

test('WhatsApp messages match the chosen language and keep the original English wording', () => {
  const message = (locale, subject) => new URL(content.whatsappLink(locale, subject)).searchParams.get('text');
  assert.equal(message('en'), 'Hello! I need help planning my Costa Rica experience.');
  assert.equal(message('en', 'Arenal'), 'Hello! I want more information about Arenal.');
  assert.equal(message('es'), '¡Hola! Necesito ayuda para planificar mi viaje a Costa Rica.');
  assert.equal(message('es', 'Bahía Drake'), '¡Hola! Quisiera más información sobre Bahía Drake.');
});

test('sitemap indexes all 18 translated pages with reciprocal language alternatives', () => {
  const entries = load('app/sitemap.ts').default();
  assert.equal(entries.length, 18);
  assert.equal(new Set(entries.map(entry => entry.url)).size, 18);
  for (const entry of entries) {
    assert.ok(entry.alternates.languages.en.includes('/en'));
    assert.ok(entry.alternates.languages.es.includes('/es'));
  }
});

test('all destination and responsive hero assets exist and the brand emblem has transparency', async () => {
  for (const destination of content.getDictionary('en').destinations) {
    assert.ok(fs.existsSync(path.join('public', destination.image)));
    assert.ok(fs.existsSync(`public/images/destination-${destination.slug}-wide.webp`));
  }
  for (const format of ['desktop', 'mobile']) assert.ok(fs.existsSync(`public/images/hero-editorial-${format}.webp`));
  const emblem = await sharp(path.join('public', brand.BRAND_MARK)).metadata();
  assert.equal(emblem.hasAlpha, true);
  assert.equal(emblem.width, 512);
});
