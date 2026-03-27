"use client";

type StatsProps = {
  t: {
    statsTitle: string;
    stats: readonly { label: string; value: string }[];
  };
};

export default function Stats({ t }: StatsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          {t.statsTitle}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {t.stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20"
          >
            <div className="text-sm text-slate-400">{item.label}</div>

            <div className="mt-4 text-4xl font-semibold text-white">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
