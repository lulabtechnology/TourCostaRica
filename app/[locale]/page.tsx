import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TourCard } from "@/components/TourCard";
import { getDictionary, Locale, locales, whatsappLink } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : "en") as Locale;
  const dictionary = getDictionary(locale);

  return (
    <main>
      <Header locale={locale} labels={dictionary.nav} />
      <Hero
        locale={locale}
        eyebrow={dictionary.hero.eyebrow}
        title={dictionary.hero.title}
        subtitle={dictionary.hero.subtitle}
        primary={dictionary.hero.primary}
        secondary={dictionary.hero.secondary}
      />

      <section className="intro-section page-shell">
        <div className="intro-copy">
          <p className="eyebrow">{dictionary.intro.eyebrow}</p>
          <h2>{dictionary.intro.title}</h2>
          <p>{dictionary.intro.body}</p>
        </div>
      </section>

      <section className="tours-section page-shell" id="destinations">
        <div className="section-heading">
          <p className="eyebrow">{dictionary.tours.eyebrow}</p>
          <h2>{dictionary.tours.title}</h2>
          <p>{dictionary.tours.body}</p>
        </div>
        <div className="tour-grid">
          {dictionary.destinations.map((destination) => (
            <TourCard
              key={destination.slug}
              locale={locale}
              destination={destination}
              cta={dictionary.tours.cta}
              details={dictionary.tours.details}
            />
          ))}
        </div>
      </section>

      <ParallaxSection
        locale={locale}
        eyebrow={dictionary.parallax.eyebrow}
        title={dictionary.parallax.title}
        body={dictionary.parallax.body}
        cta={dictionary.parallax.cta}
      />

      <section className="planner-section page-shell" id="planner">
        <div className="planner-panel">
          <div>
            <p className="eyebrow light">{dictionary.planner.eyebrow}</p>
            <h2>{dictionary.planner.title}</h2>
            <p>{dictionary.planner.body}</p>
          </div>
          <ul className="planner-questions">
            {dictionary.planner.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
            {dictionary.planner.cta}
          </a>
        </div>
      </section>

      <Footer locale={locale} tagline={dictionary.footer.tagline} rights={dictionary.footer.rights} />
    </main>
  );
}
