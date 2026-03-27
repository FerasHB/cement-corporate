"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

type StatsProps = {
  t: {
    statsTitle: string;
    stats: readonly {
      readonly label: string;
      readonly value: string;
    }[];
  };
};

function parseValue(value: string) {
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9]+/)?.[0] ?? "";
  const suffix = value.match(/[^0-9.]+$/)?.[0] ?? "";
  const hasNumber = !Number.isNaN(numeric);

  return {
    numeric: hasNumber ? numeric : 0,
    prefix,
    suffix,
    hasNumber,
    decimals: value.includes(".") ? 1 : 0,
  };
}

function Counter({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const parsed = parseValue(value);

    if (reduceMotion || !parsed.hasNumber) {
      setDisplay(value);
      return;
    }

    let started = false;
    let frameId = 0;

    const runCounter = () => {
      const duration = 2000;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = parsed.numeric * eased;
        const formatted = `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`;
        setDisplay(formatted);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          setDisplay(value);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          runCounter();
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="mt-4 text-5xl font-semibold tracking-tight text-white"
    >
      {display}
    </div>
  );
}

function StatCard({
  label,
  value,
  delayClass,
}: {
  label: string;
  value: string;
  delayClass: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} hover-lift rounded-[30px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-xl shadow-black/20 backdrop-blur-sm`}
    >
      <div className="text-sm uppercase tracking-[0.14em] text-slate-400">
        {label}
      </div>

      <Counter value={value} />

      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

export default function Stats({ t }: StatsProps) {
  const headingRef = useReveal<HTMLDivElement>();
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
          {t.statsTitle}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {t.stats.map((item, index) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            delayClass={delays[index] ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
