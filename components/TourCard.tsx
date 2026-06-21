import Image from "next/image";
import Link from "next/link";
import { Destination, Locale, whatsappLink } from "@/lib/content";

type TourCardProps = {
  locale: Locale;
  destination: Destination;
  cta: string;
  details: string;
};

export function TourCard({ locale, destination, cta, details }: TourCardProps) {
  return (
    <article className="tour-card">
      <Image
        src={destination.image}
        alt={`${destination.title} Costa Rica`}
        fill
        sizes="(max-width: 760px) 92vw, (max-width: 1200px) 45vw, 25vw"
        className="tour-card-image"
      />
      <div className="tour-card-shade" />
      <div className="tour-card-content">
        <p className="tour-eyebrow">{destination.region}</p>
        <h3>{destination.title}</h3>
        <p>{destination.summary}</p>
        <div className="tour-tags" aria-label="Destination highlights">
          {destination.bestFor.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="tour-card-actions">
          <Link className="card-link" href={`/${locale}/destinations/${destination.slug}`}>
            {details}
          </Link>
          <a className="card-whatsapp" href={whatsappLink(locale, destination.title)} target="_blank" rel="noreferrer">
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}
