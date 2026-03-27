"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_20%),radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
            {t.badge}
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {t.heroText}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              {t.primary}
              <ArrowIcon className="h-4 w-4" />
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              {t.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
