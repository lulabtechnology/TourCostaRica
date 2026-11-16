import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { HeroVideo } from "@/components/HeroVideo";
import { Locale, whatsappLink } from "@/lib/content";

type HeroProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
};

export function Hero({ locale, eyebrow, title, subtitle, primary, secondary }: HeroProps) {
  // The approved video can be added later without changing any page copy/layout.
  const videoSrc = existsSync(join(process.cwd(), "public/videos/costa-rica-hero.mp4"))
    ? "/videos/costa-rica-hero.mp4"
    : undefined;

  return (
    <section className="hero" aria-label={locale === "es" ? "Portada de Costa Rica" : "Costa Rica hero image"}>
      <picture className="hero-picture">
        <source media="(max-width: 760px)" srcSet="/images/hero-video-poster-mobile.webp" />
        <Image
          src="/images/hero-video-poster-desktop.webp"
          alt={locale === "es" ? "Selva tropical, costa y naturaleza de Costa Rica" : "Costa Rica rainforest, coastline and nature"}
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </picture>
      {videoSrc && <HeroVideo src={videoSrc} locale={locale} />}
      <div className="hero-overlay" />
      <div className="hero-content page-shell">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#destinations">{primary}</a>
          <a className="btn btn-ghost" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
            {secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
