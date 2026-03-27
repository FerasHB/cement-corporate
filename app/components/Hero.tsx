"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
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

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_top,rgba(245,158,11,0.10),transparent_20%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />

      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
            {t.badge}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {t.heroText}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t.primary}
              <ArrowIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
