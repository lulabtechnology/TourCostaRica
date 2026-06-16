"use client";

import Image from "next/image";
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
  const pictureRef = useRef<HTMLPictureElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      const section = sectionRef.current;
      const picture = pictureRef.current;

      if (!section || !picture) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const isMobile = window.matchMedia("(max-width: 760px)").matches;
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const progress = Math.max(0, Math.min(1, rawProgress));
      const distance = isMobile ? Math.min(420, viewportHeight * 0.46) : 190;
      const translateY = (progress - 0.5) * distance;

      picture.style.setProperty("--parallax-y", `${translateY}px`);
      picture.style.setProperty("--parallax-scale", isMobile ? "1.08" : "1.06");
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
      <picture className="parallax-picture" ref={pictureRef} aria-hidden="true">
        <source media="(max-width: 760px)" srcSet="/images/parallax-mobile.webp" />
        <Image
          src="/images/parallax-desktop.webp"
          alt=""
          fill
          sizes="100vw"
          className="parallax-image"
        />
      </picture>
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
