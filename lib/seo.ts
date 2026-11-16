import type { Metadata } from "next";
import { BRAND_MARK, BRAND_NAME, SHARE_IMAGE, SITE_URL, absoluteUrl } from "@/lib/brand";
import { CONTACT_EMAIL, PHONE_CONTACTS, type Destination, getDictionary } from "@/lib/content";

// Both URL prefixes currently contain the same English copy. Index the English
// canonical only; add Spanish hreflang once an actual translation is approved.
export function pageMetadata(destination?: Destination): Metadata {
  const dictionary = getDictionary("en");
  const path = destination ? `/en/destinations/${destination.slug}` : "/en";
  const title = destination
    ? `${destination.title}, Costa Rica | ${BRAND_NAME}`
    : dictionary.seo.title;
  const description = destination?.summary ?? dictionary.seo.description;
  const image = destination
    ? `/images/social/${destination.slug}.jpg`
    : SHARE_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: BRAND_NAME,
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, type: "image/jpeg", alt: destination ? `${destination.title}, Costa Rica — ${BRAND_NAME}` : BRAND_NAME }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)]
    }
  };
}

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const country = { "@type": "Country", name: "Costa Rica" };

export function pageStructuredData(destination?: Destination) {
  const dictionary = getDictionary("en");
  const url = absoluteUrl(destination ? `/en/destinations/${destination.slug}` : "/en");
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: BRAND_NAME,
      url: absoluteUrl("/en"),
      description: dictionary.seo.description,
      logo: { "@type": "ImageObject", url: absoluteUrl(BRAND_MARK), width: 512, height: 512 },
      image: absoluteUrl(SHARE_IMAGE),
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
      inLanguage: "en",
      publisher: { "@id": organizationId }
    },
    {
      "@type": destination ? "WebPage" : "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: destination ? `${destination.title} | ${BRAND_NAME}` : dictionary.seo.title,
      description: destination?.summary ?? dictionary.seo.description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
      about: destination ? { "@id": `${url}#destination` } : country,
      mainEntity: { "@id": destination ? `${url}#destination` : `${url}#destinations` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(destination?.image ?? "/images/hero-editorial-desktop.webp")
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
        image: absoluteUrl(destination.image),
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
          { "@type": "ListItem", position: 1, name: BRAND_NAME, item: absoluteUrl("/en") },
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
          item: { "@type": "TouristDestination", name: item.title, url: absoluteUrl(`/en/destinations/${item.slug}`), description: item.summary, image: absoluteUrl(item.image) }
        }))
      },
      ...dictionary.concierge.services.map((service, index) => ({
        "@type": "Service",
        "@id": `${url}#concierge-service-${index + 1}`,
        name: service.title.replace(/^\d+\.\s*/, ""),
        description: service.description,
        url: `${url}#concierge`,
        image: absoluteUrl(service.image),
        areaServed: country,
        provider: { "@id": organizationId }
      }))
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
