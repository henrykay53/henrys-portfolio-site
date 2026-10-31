"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Opts [data-reveal] elements into a fade-and-rise as they enter the viewport.
 * Content stays visible without JS and under prefers-reduced-motion (see globals.css).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    // Anything already on screen is shown immediately so nothing blinks out.
    const fold = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < fold) el.classList.add("is-visible");
      else observer.observe(el);
    });
    root.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
