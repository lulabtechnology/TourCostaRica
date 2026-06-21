import Image from "next/image";
import { Dictionary, Locale, whatsappLink } from "@/lib/content";

type ConciergeSectionProps = {
  locale: Locale;
  content: Dictionary["concierge"];
};

export function ConciergeSection({ locale, content }: ConciergeSectionProps) {
  return (
    <section className="concierge-section" id="concierge">
      <div className="page-shell concierge-intro">
        <div>
          <p className="eyebrow">{content.title}</p>
          <h2>{content.subtitle}</h2>
        </div>
        <div className="concierge-intro-copy">
          <p>{content.intro}</p>
          <p className="concierge-statement">{content.statement}</p>
        </div>
      </div>

      <div className="page-shell concierge-services">
        <div className="section-heading align-left">
          <p className="eyebrow">{content.title}</p>
          <h2>{content.signatureTitle}</h2>
        </div>

        {content.services.map((service, index) => (
          <article className={`concierge-service ${index % 2 ? "is-reversed" : ""}`} key={service.title}>
            <div className="concierge-service-media">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="concierge-service-image"
              />
            </div>
            <div className="concierge-service-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="concierge-list">
                {service.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <div className="concierge-advantage">
          <div>
            <p className="eyebrow light">{content.title}</p>
            <h2>{content.advantageTitle}</h2>
          </div>
          <div>
            <p>{content.advantageBody}</p>
            <a className="btn btn-primary" href={whatsappLink(locale, "Concierge Services")} target="_blank" rel="noreferrer">
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
