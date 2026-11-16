import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/brand";
import { getDictionary, locales } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    { url: absoluteUrl(`/${locale}`), priority: 1, alternates: { languages: { en: absoluteUrl("/en"), es: absoluteUrl("/es") } } },
    ...getDictionary(locale).destinations.map((destination) => ({
      url: absoluteUrl(`/${locale}/destinations/${destination.slug}`),
      alternates: { languages: { en: absoluteUrl(`/en/destinations/${destination.slug}`), es: absoluteUrl(`/es/destinations/${destination.slug}`) } },
      priority: 0.8,
      images: [absoluteUrl(destination.image)]
    }))
  ]);
}
