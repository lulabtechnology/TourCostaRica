import { CSSProperties } from "react";
import { Locale, whatsappLink } from "@/lib/content";

type ParallaxSectionProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

export function ParallaxSection({ locale, eyebrow, title, body, cta }: ParallaxSectionProps) {
  const style = {
    "--parallax-desktop": "url('/images/parallax-desktop.webp')",
    "--parallax-mobile": "url('/images/parallax-mobile.webp')"
  } as CSSProperties;

  return (
    <section className="parallax-section" style={style}>
      <div className="page-shell parallax-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <a className="btn btn-primary" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
          {cta}
        </a>
      </div>
    </section>
  );
}
