import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/brand";
import { getDictionary } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/en"), priority: 1 },
    ...getDictionary("en").destinations.map((destination) => ({
      url: absoluteUrl(`/en/destinations/${destination.slug}`),
      priority: 0.8,
      images: [absoluteUrl(destination.image)]
    }))
  ];
}
