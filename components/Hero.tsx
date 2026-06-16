import Image from "next/image";
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
  return (
    <section className="hero" aria-label="Costa Rica hero image">
      <picture className="hero-picture">
        <source media="(max-width: 760px)" srcSet="/images/hero-mobile.webp" />
        <Image
          src="/images/hero-desktop.webp"
          alt="Arenal volcano, rainforest and water in Costa Rica"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </picture>
      <div className="hero-overlay" />
      <div className="hero-content page-shell">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#tours">{primary}</a>
          <a className="btn btn-ghost" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
            {secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
