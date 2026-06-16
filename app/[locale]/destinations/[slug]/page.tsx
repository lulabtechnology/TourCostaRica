import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDestination, getDictionary, Locale, locales, whatsappLink } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).destinations.map((destination) => ({
      locale,
      slug: destination.slug
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const destination = getDestination(locale, slug);
  const dictionary = getDictionary(locale);

  if (!destination) return dictionary.seo;

  return {
    title: `${destination.title} | ${dictionary.seo.title}`,
    description: destination.summary
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : "en") as Locale;
  const dictionary = getDictionary(locale);
  const destination = getDestination(locale, slug);

  if (!destination) notFound();

  return (
    <main>
      <Header locale={locale} labels={dictionary.nav} currentSlug={slug} />

      <section className="destination-hero">
        <Image
          src={destination.image}
          alt={`${destination.title} Costa Rica`}
          fill
          priority
          sizes="100vw"
          className="destination-hero-image"
        />
        <div className="destination-hero-shade" />
        <div className="page-shell destination-hero-content">
          <Link href={`/${locale}#destinations`} className="back-link">← {dictionary.destinationPage.back}</Link>
          <p className="eyebrow light">{destination.eyebrow}</p>
          <h1>{destination.title}</h1>
          <p>{destination.summary}</p>
          <a className="btn btn-primary" href={whatsappLink(locale, destination.title)} target="_blank" rel="noreferrer">
            {dictionary.destinationPage.whatsapp}
          </a>
        </div>
      </section>

      <section className="destination-content page-shell destination-content-single">
        <div className="destination-detail-grid">
          <article className="wide-detail-card">
            <h2>{dictionary.destinationPage.overview}</h2>
            <p>{destination.summary}</p>
          </article>

          {destination.sections.map((section) => (
            <article key={section.title} className={section.items.length > 4 ? "wide-detail-card" : undefined}>
              <h2>{section.title}</h2>
              <ul className="clean-list destination-info-list">
                {section.items.map((item) => (
                  <li key={`${section.title}-${item.name}`}>
                    <strong>{item.name}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta page-shell">
        <p className="eyebrow light">{dictionary.destinationPage.planning}</p>
        {destination.planningBlocks.map((block) => (
          <div className="planning-block" key={block.title}>
            <h2>{block.title}</h2>
            <ul className="planner-questions compact">
              {block.questions.map((question) => (
                <li key={`${block.title}-${question}`}>{question}</li>
              ))}
            </ul>
          </div>
        ))}
        <a className="btn btn-primary" href={whatsappLink(locale, destination.title)} target="_blank" rel="noreferrer">
          {dictionary.destinationPage.whatsapp}
        </a>
      </section>

      <Footer locale={locale} tagline={dictionary.footer.tagline} rights={dictionary.footer.rights} />
    </main>
  );
}
