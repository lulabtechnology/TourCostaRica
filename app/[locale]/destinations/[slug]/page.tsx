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
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : "es") as Locale;
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
          <Link href={`/${locale}#tours`} className="back-link">← {dictionary.destinationPage.back}</Link>
          <p className="eyebrow light">{destination.eyebrow}</p>
          <h1>{destination.title}</h1>
          <p>{destination.summary}</p>
          <a className="btn btn-primary" href={whatsappLink(locale, destination.title)} target="_blank" rel="noreferrer">
            {dictionary.destinationPage.whatsapp}
          </a>
        </div>
      </section>

      <section className="destination-content page-shell">
        <aside className="destination-facts">
          <div>
            <span>{dictionary.destinationPage.duration}</span>
            <strong>{destination.duration}</strong>
          </div>
          <div>
            <span>{dictionary.destinationPage.mood}</span>
            <strong>{destination.mood}</strong>
          </div>
        </aside>

        <div className="destination-detail-grid">
          <article>
            <h2>{dictionary.destinationPage.highlights}</h2>
            <ul className="clean-list">
              {destination.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>{dictionary.destinationPage.activities}</h2>
            <ul className="clean-list">
              {destination.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </article>
          <article className="wide-detail-card">
            <h2>{dictionary.destinationPage.bestFor}</h2>
            <div className="destination-tags">
              {destination.bestFor.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="final-cta page-shell">
        <h2>{locale === "es" ? "¿Quieres armar esta experiencia?" : "Want to build this experience?"}</h2>
        <p>
          {locale === "es"
            ? "Escríbenos por WhatsApp y te ayudamos a adaptar este destino a tus fechas, presupuesto y estilo de viaje."
            : "Message us on WhatsApp and we will adapt this destination to your dates, budget and travel style."}
        </p>
        <a className="btn btn-primary" href={whatsappLink(locale, destination.title)} target="_blank" rel="noreferrer">
          {dictionary.destinationPage.whatsapp}
        </a>
      </section>

      <Footer locale={locale} tagline={dictionary.footer.tagline} rights={dictionary.footer.rights} />
    </main>
  );
}
