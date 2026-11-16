import type { Metadata } from "next";
import { BRAND_MARK, BRAND_NAME, SHARE_IMAGE, SITE_URL, absoluteUrl, assetUrl } from "@/lib/brand";
import { CONTACT_EMAIL, PHONE_CONTACTS, type Destination, type Locale, getDictionary } from "@/lib/content";

export function pageMetadata(destination?: Destination, locale: Locale = "en"): Metadata {
  const dictionary = getDictionary(locale);
  const suffix = destination ? `/destinations/${destination.slug}` : "";
  const path = `/${locale}${suffix}`;
  const title = destination
    ? `${destination.title}, Costa Rica | ${BRAND_NAME}`
    : dictionary.seo.title;
  const description = destination?.summary ?? dictionary.seo.description;
  const image = destination
    ? `/images/social/${locale === "es" ? "es/" : ""}${destination.slug}.jpg`
    : locale === "es" ? "/brand/costa-rica-travel-and-living-share-es.jpg" : SHARE_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: { en: absoluteUrl(`/en${suffix}`), es: absoluteUrl(`/es${suffix}`), "x-default": absoluteUrl(`/en${suffix}`) }
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CR" : "en_US",
      alternateLocale: [locale === "es" ? "en_US" : "es_CR"],
      siteName: BRAND_NAME,
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: assetUrl(image), width: 1200, height: 630, type: "image/jpeg", alt: destination ? `${destination.title}, Costa Rica — ${BRAND_NAME}` : BRAND_NAME }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [assetUrl(image)]
    }
  };
}

export function siteMetadata(locale: Locale = "en"): Metadata {
  return {
    ...pageMetadata(undefined, locale),
    metadataBase: new URL(SITE_URL),
    applicationName: BRAND_NAME,
    category: "travel",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/brand/icon-192.png", type: "image/png", sizes: "192x192" }],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
    },
    manifest: "/manifest.webmanifest"
  };
}

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const country = { "@type": "Country", name: "Costa Rica" };

export function pageStructuredData(destination?: Destination, locale: Locale = "en") {
  const dictionary = getDictionary(locale);
  const homeUrl = absoluteUrl(`/${locale}`);
  const url = destination ? absoluteUrl(`/${locale}/destinations/${destination.slug}`) : homeUrl;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: BRAND_NAME,
      url: absoluteUrl("/en"),
      description: dictionary.seo.description,
      logo: { "@type": "ImageObject", url: assetUrl(BRAND_MARK), width: 512, height: 512 },
      image: assetUrl(SHARE_IMAGE),
      email: CONTACT_EMAIL,
      areaServed: country,
      contactPoint: PHONE_CONTACTS.map((phone) => ({
        "@type": "ContactPoint",
        telephone: `+${phone.whatsappNumber}`,
        contactType: "customer service",
        url: `https://wa.me/${phone.whatsappNumber}`
      }))
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: BRAND_NAME,
      url: absoluteUrl("/en"),
      inLanguage: ["en", "es"],
      publisher: { "@id": organizationId }
    },
    {
      "@type": destination ? "WebPage" : "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: destination ? `${destination.title} | ${BRAND_NAME}` : dictionary.seo.title,
      description: destination?.summary ?? dictionary.seo.description,
      inLanguage: locale,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
      about: destination ? { "@id": `${url}#destination` } : country,
      mainEntity: { "@id": destination ? `${url}#destination` : `${url}#destinations` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: assetUrl(destination?.image ?? "/images/hero-editorial-desktop.webp")
      }
    }
  ];

  if (destination) {
    graph.push(
      {
        "@type": "TouristDestination",
        "@id": `${url}#destination`,
        name: destination.title,
        description: destination.summary,
        url,
        image: assetUrl(destination.image),
        containedInPlace: country,
        includesAttraction: destination.sections
          .filter((section) => section.kind === "attractions" || section.kind === "beaches")
          .flatMap((section) => section.items.map((item) => ({
            "@type": "TouristAttraction", name: item.name, description: item.description
          })))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: BRAND_NAME, item: homeUrl },
          { "@type": "ListItem", position: 2, name: destination.title, item: url }
        ]
      }
    );
  } else {
    graph.push(
      {
        "@type": "ItemList",
        "@id": `${url}#destinations`,
        name: dictionary.tours.title,
        itemListElement: dictionary.destinations.map((item, index) => ({
          "@type": "ListItem", position: index + 1,
          item: { "@type": "TouristDestination", name: item.title, url: absoluteUrl(`/${locale}/destinations/${item.slug}`), description: item.summary, image: assetUrl(item.image) }
        }))
      },
      ...dictionary.concierge.services.map((service, index) => ({
        "@type": "Service",
        "@id": `${url}#concierge-service-${index + 1}`,
        name: service.title.replace(/^\d+\.\s*/, ""),
        description: service.description,
        url: `${url}#concierge`,
        image: assetUrl(service.image),
        areaServed: country,
        provider: { "@id": organizationId }
      }))
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
