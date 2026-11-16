"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const update = () => setEnabled(!motion.matches && !connection?.saveData);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;
    let visible = true;
    const update = () => {
      if (!visible || document.hidden || userPaused.current) video.pause();
      else video.play().catch(() => setReady(false));
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      video.pause();
    };
  }, [enabled]);

  if (!enabled) return null;

  return <>
    <video
      ref={videoRef}
      className={`hero-video${ready ? " is-ready" : ""}`}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => { setReady(true); setPlaying(true); }}
      onPause={() => setPlaying(false)}
      onError={() => setReady(false)}
    />
    {ready && <button
      className="hero-video-toggle"
      type="button"
      aria-label={playing ? "Pause background video" : "Play background video"}
      onClick={() => {
        const video = videoRef.current;
        if (!video) return;
        userPaused.current = !video.paused;
        if (video.paused) video.play().catch(() => setReady(false));
        else video.pause();
      }}
    ><span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span></button>}
  </>;
}
