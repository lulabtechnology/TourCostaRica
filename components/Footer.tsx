import Link from "next/link";
import { Locale, WHATSAPP_NUMBER, whatsappLink } from "@/lib/content";

type FooterProps = {
  locale: Locale;
  tagline: string;
  rights: string;
};

export function Footer({ locale, tagline, rights }: FooterProps) {
  return (
    <footer className="footer" id="contact">
      <div className="page-shell footer-grid">
        <div>
          <Link className="footer-brand" href={`/${locale}`}>Costa Rica Adventures</Link>
          <p>{tagline}</p>
        </div>
        <div className="footer-contact">
          <span>WhatsApp</span>
          <a href={whatsappLink(locale)} target="_blank" rel="noreferrer">+{WHATSAPP_NUMBER.slice(0, 3)} {WHATSAPP_NUMBER.slice(3, 7)}-{WHATSAPP_NUMBER.slice(7)}</a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <small>© {new Date().getFullYear()} Costa Rica Adventures. {rights}</small>
        <small className="footer-credit">
          {locale === "es" ? "Desarrollado por " : "Developed by "}
          <a href="https://lulabtech.com" target="_blank" rel="noopener">
            Lulab Technology
          </a>
        </small>
      </div>
    </footer>
  );
}
