"use client";

import { useEffect, useRef } from "react";
import { Locale, whatsappLink } from "@/lib/content";

type ParallaxSectionProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

export function ParallaxSection({ locale, eyebrow, title, body, cta }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      const section = sectionRef.current;
      const background = backgroundRef.current;

      if (!section || !background) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const isMobile = window.matchMedia("(max-width: 760px)").matches;
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const progress = Math.max(0, Math.min(1, rawProgress));

      // Desktop and mobile both use real transform movement.
      // Mobile receives a stronger range because background-attachment: fixed
      // is unreliable on iOS/Android and subtle movement gets lost on small screens.
      const distance = isMobile ? Math.min(820, viewportHeight * 0.88) : Math.min(380, viewportHeight * 0.38);
      const translateY = (progress - 0.5) * distance;

      background.style.setProperty("--parallax-y", `${translateY}px`);
      background.style.setProperty("--parallax-scale", isMobile ? "1.2" : "1.12");
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("orientationchange", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("orientationchange", requestUpdate);
    };
  }, []);

  return (
    <section className="parallax-section" ref={sectionRef}>
      <div className="parallax-background" ref={backgroundRef} aria-hidden="true" />
      <div className="parallax-shade" />
      <div className="page-shell parallax-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <a className="btn btn-primary" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
          {cta}
        </a>
      </div>
    </section>
  );
}
