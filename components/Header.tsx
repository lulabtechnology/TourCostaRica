import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { BRAND_NAME } from "@/lib/brand";
import { CONTACT_LINK, Locale, whatsappLink } from "@/lib/content";

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
      <Link className="brand" href={`/${locale}`} aria-label={BRAND_NAME}>
        <BrandLogo />
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link href={`/${locale}`}>{labels.home}</Link>
        <Link href={`/${locale}#destinations`}>{labels.tours}</Link>
        <Link href={`/${locale}#concierge`}>{labels.concierge}</Link>
        <a href={CONTACT_LINK}>{labels.contact}</a>
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
