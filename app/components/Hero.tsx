"use client";

import Image from "next/image";
import LocalizedLink from "./LocalizedLink";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

type HeroProps = {
  t: {
    badge: string;
    heroTitle: string;
    heroText: string;
    primary: string;
    secondary: string;
  };
  isAr: boolean;
};

export default function Hero({ t, isAr }: HeroProps) {
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const badgeRef = useReveal<HTMLDivElement>();
  const titleRef = useReveal<HTMLHeadingElement>();
  const textRef = useReveal<HTMLParagraphElement>();
  const buttonsRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* 🔥 IMAGE (jetzt deutlich sichtbar) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-plant-v2.jpg"
          alt="Cement Factory"
          fill
          priority
          className="object-cover opacity-50 scale-105"
        />
      </div>

      {/* 🔥 LIGHTER OVERLAY (wichtig!) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_top,rgba(245,158,11,0.07),transparent_20%),linear-gradient(180deg,rgba(2,6,23,0.60)_0%,rgba(2,11,46,0.55)_45%,rgba(2,6,23,0.70)_100%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.20),transparent_22%),radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.10),transparent_18%)]" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <div
            ref={badgeRef}
            className="reveal reveal-delay-1 mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm"
          >
            {t.badge}
          </div>

          <h1
            ref={titleRef}
            className="reveal reveal-delay-2 max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl"
          >
            {t.heroTitle}
          </h1>

          <p
            ref={textRef}
            className="reveal reveal-delay-3 mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            {t.heroText}
          </p>

          <div
            ref={buttonsRef}
            className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-4"
          >
            <LocalizedLink
              href="/products"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {t.primary}
              <ArrowIcon className="h-4 w-4" />
            </LocalizedLink>

            <LocalizedLink
              href="/contact"
              className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 hover:-translate-y-1"
            >
              {t.secondary}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
