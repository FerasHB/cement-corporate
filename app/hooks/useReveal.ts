"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0.05) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      },
      {
        threshold: [0, 0.05, 0.12, 0.2],
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}