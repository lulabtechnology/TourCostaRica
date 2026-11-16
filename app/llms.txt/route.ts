import { BRAND_NAME, absoluteUrl } from "@/lib/brand";
import { CONTACT_EMAIL, PHONE_CONTACTS, getDictionary } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const dictionary = getDictionary("en");
  const lines = [
    `# ${BRAND_NAME}`,
    "",
    `> ${dictionary.seo.description}`,
    "",
    `- Website: ${absoluteUrl("/en")}`,
    `- Email: ${CONTACT_EMAIL}`,
    ...PHONE_CONTACTS.map((phone) => `- ${phone.country}: ${phone.label}`),
    "- Languages: English (/en) and Spanish (/es). Each page links to its translated counterpart.",
    "",
    "## Destinations",
    "",
    ...dictionary.destinations.map((destination) => `- [${destination.title}](${absoluteUrl(`/en/destinations/${destination.slug}`)}): ${destination.summary}`),
    "",
    "## Concierge services",
    "",
    ...dictionary.concierge.services.map((service) => `- [${service.title}](${absoluteUrl("/en#concierge")}): ${service.description}`),
    "",
    "## Español",
    "",
    `- [Inicio](${absoluteUrl("/es")})`,
    ...getDictionary("es").destinations.map((destination) => `- [${destination.title}](${absoluteUrl(`/es/destinations/${destination.slug}`)}): ${destination.summary}`),
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
