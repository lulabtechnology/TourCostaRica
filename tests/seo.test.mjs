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
  for (const destination of [undefined, ...content.getDictionary('en').destinations]) {
    const metadata = seo.pageMetadata(destination);
    assert.ok(metadata.title.absolute.includes(brand.BRAND_NAME));
    assert.ok(!metadata.title.absolute.includes('Adventures'));
    const expected = `${brand.SITE_URL}/en${destination ? `/destinations/${destination.slug}` : ''}`;
    assert.equal(metadata.alternates.canonical, expected);
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
  for (const destination of [undefined, ...content.getDictionary('en').destinations]) {
    const data = seo.pageStructuredData(destination);
    assert.equal(data['@context'], 'https://schema.org');
    const organization = data['@graph'].find(item => item['@type'] === 'Organization');
    assert.equal(organization.name, brand.BRAND_NAME);
    assert.equal(organization.email, content.CONTACT_EMAIL);
    assert.equal(organization.contactPoint.length, content.PHONE_CONTACTS.length);
    assert.equal(organization.address, undefined);
    assert.equal(organization.aggregateRating, undefined);
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
