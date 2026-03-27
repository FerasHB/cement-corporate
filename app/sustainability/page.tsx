"use client";

import {
  Leaf,
  Factory,
  Users,
  ShieldCheck,
  BarChart3,
  Recycle,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";

export default function SustainabilityPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const pillars = isAr
    ? [
        {
          icon: Leaf,
          title: "البيئة",
          text: "نعمل على خفض الأثر البيئي عبر تحسين الكفاءة التشغيلية، إدارة الموارد، وتقليل الانبعاثات.",
        },
        {
          icon: Users,
          title: "المجتمع والكوادر",
          text: "نستثمر في تطوير الموظفين، بيئة العمل الآمنة، والمساهمة الإيجابية في المجتمعات المحيطة.",
        },
        {
          icon: ShieldCheck,
          title: "الحوكمة والامتثال",
          text: "نعتمد أطر حوكمة واضحة تدعم الشفافية، الانضباط المؤسسي، والالتزام بالمعايير.",
        },
      ]
    : [
        {
          icon: Leaf,
          title: "Environment",
          text: "We work to reduce environmental impact through operational efficiency, responsible resource management, and emissions reduction.",
        },
        {
          icon: Users,
          title: "People & Community",
          text: "We invest in workforce development, safe workplaces, and positive contribution to surrounding communities.",
        },
        {
          icon: ShieldCheck,
          title: "Governance & Compliance",
          text: "We apply disciplined governance frameworks that reinforce transparency, corporate accountability, and compliance.",
        },
      ];

  const kpis = isAr
    ? [
        { label: "خفض كثافة الانبعاثات", value: "18%" },
        { label: "تحسين كفاءة الطاقة", value: "22%" },
        { label: "ساعات تدريب سنوية", value: "38K" },
        { label: "مبادرات مجتمعية", value: "24" },
      ]
    : [
        { label: "Emissions Intensity Reduction", value: "18%" },
        { label: "Energy Efficiency Improvement", value: "22%" },
        { label: "Annual Training Hours", value: "38K" },
        { label: "Community Initiatives", value: "24" },
      ];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_25%),linear-gradient(180deg,#020617_0%,#021b16_45%,#020617_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "الاستدامة" : "Sustainability"}
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "الاستدامة كركيزة للنمو الصناعي المسؤول"
                : "Sustainability as a foundation for responsible industrial growth"}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "ننظر إلى الاستدامة باعتبارها جزءاً أساسياً من نموذجنا المؤسسي، من خلال التوازن بين الأداء الاقتصادي، المسؤولية البيئية، تنمية الكوادر، والحوكمة الرشيدة."
                : "We view sustainability as a core part of our enterprise model by balancing economic performance, environmental responsibility, people development, and disciplined governance."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "أولويات الاستدامة" : "Sustainability Priorities"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "مؤشرات الأداء" : "Performance Indicators"}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <div
              key={item.label}
              className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-xl shadow-black/20"
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <Recycle className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              {isAr ? "الموارد والانبعاثات" : "Resources & Emissions"}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {isAr
                ? "نركز على إدارة أكثر كفاءة للطاقة والموارد الطبيعية، وتحسين الممارسات التشغيلية التي تدعم خفض الانبعاثات وتعزيز الكفاءة البيئية."
                : "We focus on more efficient use of energy and natural resources, alongside operating practices that support lower emissions and stronger environmental performance."}
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <Factory className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              {isAr ? "السلامة وثقافة العمل" : "Safety & Workplace Culture"}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {isAr
                ? "نعتبر السلامة أولوية تشغيلية دائمة، ونعمل على بناء ثقافة مؤسسية تحمي الأفراد وتعزز المسؤولية والانضباط في جميع العمليات."
                : "We treat safety as a permanent operational priority and continue to strengthen a workplace culture built on responsibility, discipline, and protection of people."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-28">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                {isAr ? "التأثير المجتمعي" : "Community Impact"}
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                {isAr
                  ? "نمو صناعي يرتبط بقيمة أوسع للمجتمع"
                  : "Industrial growth connected to broader community value"}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {isAr
                  ? "نعمل على ترسيخ أثر إيجابي يتجاوز العمليات التشغيلية ليشمل دعم المجتمعات، تطوير المهارات، وتعزيز القيمة المستدامة على المدى الطويل."
                  : "We seek to create a positive impact beyond operations through community support, workforce development, and long-term sustainable value creation."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <BarChart3 className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {isAr
                  ? "نهج استدامة منظم"
                  : "A Structured Sustainability Approach"}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {isAr
                  ? "نواصل تطوير مؤشرات الأداء والمبادرات المؤسسية بما يضمن التقدم المستمر في الجوانب البيئية والاجتماعية والحوكمية."
                  : "We continue to enhance performance indicators and enterprise-wide initiatives to ensure steady progress across environmental, social, and governance priorities."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
