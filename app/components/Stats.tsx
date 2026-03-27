"use client";

type StatsProps = {
  t: {
    statsTitle: string;
    stats: readonly {
      readonly label: string;
      readonly value: string;
    }[];
  };
};

export default function Stats({ t }: StatsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          {t.statsTitle}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {t.stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-xl shadow-black/20 backdrop-blur-sm"
          >
            <div className="text-sm uppercase tracking-[0.14em] text-slate-400">
              {item.label}
            </div>

            <div className="mt-4 text-5xl font-semibold tracking-tight text-white">
              {item.value}
            </div>

            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
