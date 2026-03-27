"use client";

import { Factory, Leaf, Landmark, Briefcase } from "lucide-react";

type PillarsProps = {
  t: {
    pillarsTitle: string;
    pillars: readonly {
      readonly title: string;
      readonly text: string;
    }[];
  };
};

export default function Pillars({ t }: PillarsProps) {
  const icons = [Factory, Leaf, Landmark, Briefcase];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          {t.pillarsTitle}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.pillars.map((pillar, index) => {
          const Icon = icons[index];

          return (
            <div
              key={pillar.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {pillar.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
