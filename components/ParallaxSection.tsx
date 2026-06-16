"use client";

import { CSSProperties, useEffect, useRef } from "react";
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
  const mobileMediaRef = useRef<HTMLDivElement | null>(null);

  const style = {
    "--parallax-desktop": "url('/images/parallax-desktop.webp')",
    "--parallax-mobile": "url('/images/parallax-mobile.webp')"
  } as CSSProperties;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      const section = sectionRef.current;
      const mobileMedia = mobileMediaRef.current;

      if (!section || !mobileMedia) return;
      if (!window.matchMedia("(max-width: 760px)").matches) {
        mobileMedia.style.setProperty("--parallax-y", "0px");
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const progress = Math.max(0, Math.min(1, rawProgress));
      const distance = Math.min(760, viewportHeight * 0.78);
      const translateY = (progress - 0.5) * distance;
      mobileMedia.style.setProperty("--parallax-y", `${translateY}px`);
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
    <section className="parallax-section" ref={sectionRef} style={style}>
      <div className="parallax-mobile-media" ref={mobileMediaRef} aria-hidden="true" />
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
