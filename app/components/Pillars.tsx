"use client";

import { Factory, Leaf, Landmark, Briefcase } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

type PillarsProps = {
  t: {
    pillarsTitle: string;
    pillars: readonly {
      readonly title: string;
      readonly text: string;
    }[];
  };
};

function PillarCard({
  icon: Icon,
  title,
  text,
  delayClass,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  delayClass: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} hover-lift rounded-[28px] border border-white/10 bg-white/5 p-6`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

export default function Pillars({ t }: PillarsProps) {
  const headingRef = useReveal<HTMLDivElement>();
  const icons = [Factory, Leaf, Landmark, Briefcase];
  const delays = [
    "reveal-delay-1",
    "reveal-delay-2",
    "reveal-delay-3",
    "reveal-delay-4",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <div ref={headingRef} className="reveal mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          {t.pillarsTitle}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.pillars.map((pillar, index) => {
          const Icon = icons[index];

          return (
            <PillarCard
              key={pillar.title}
              icon={Icon}
              title={pillar.title}
              text={pillar.text}
              delayClass={delays[index] ?? ""}
            />
          );
        })}
      </div>
    </section>
  );
}
