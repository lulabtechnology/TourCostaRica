import Link from "next/link";
import { BRAND_NAME } from "@/lib/brand";
import { Locale, PHONE_CONTACTS, whatsappLink } from "@/lib/content";

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
          <Link className="footer-brand" href={`/${locale}`}>{BRAND_NAME}</Link>
          <p>{tagline}</p>
        </div>
        <div className="footer-contact">
          <span>WhatsApp</span>
          <div className="footer-phone-list">
            {PHONE_CONTACTS.map((phone) => (
              <a key={`${phone.country}-${phone.label}`} href={whatsappLink(locale, undefined, phone.whatsappNumber)} target="_blank" rel="noreferrer">
                {phone.country}: {phone.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <small>© {new Date().getFullYear()} {BRAND_NAME}. {rights}</small>
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
