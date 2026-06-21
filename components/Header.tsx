import Link from "next/link";
import { Locale, whatsappLink } from "@/lib/content";

type HeaderProps = {
  locale: Locale;
  labels: {
    home: string;
    tours: string;
    concierge: string;
    contact: string;
    whatsapp: string;
  };
  currentSlug?: string;
};

export function Header({ locale, labels, currentSlug }: HeaderProps) {
  const languageHref = currentSlug ? `/en/destinations/${currentSlug}` : "/en";

  return (
    <header className="site-header">
      <Link className="brand" href={`/${locale}`} aria-label="Costa Rica Adventures">
        <span className="brand-mark">CR</span>
        <span className="brand-text">Costa Rica<br />Adventures</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link href={`/${locale}`}>{labels.home}</Link>
        <Link href={`/${locale}#destinations`}>{labels.tours}</Link>
        <Link href={`/${locale}#concierge`}>{labels.concierge}</Link>
        <a href={whatsappLink(locale)} target="_blank" rel="noreferrer">{labels.contact}</a>
      </nav>

      <div className="header-actions">
        <Link className="language-switch" href={languageHref} aria-label="English version">
          EN
        </Link>
        <a className="header-whatsapp" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
          {labels.whatsapp}
        </a>
      </div>
    </header>
  );
}
