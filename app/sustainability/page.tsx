"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Users,
  ShieldCheck,
  Recycle,
  Factory,
  BarChart3,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";
import { useReveal } from "../hooks/useReveal";

function PriorityCard({
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
      className={`reveal ${delayClass} hover-lift rounded-[30px] border border-white/10 bg-white/5 p-8`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function KpiCard({
  value,
  label,
  delayClass,
}: {
  value: string;
  label: string;
  delayClass: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} hover-lift rounded-[30px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-xl shadow-black/20`}
    >
      <div className="text-sm uppercase tracking-[0.14em] text-slate-400">
        {label}
      </div>

      <div className="mt-4 text-5xl font-semibold tracking-tight text-white">
        {value}
      </div>

      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function FocusCard({
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
      className={`reveal ${delayClass} hover-lift rounded-[30px] border border-white/10 bg-white/5 p-8`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>
    </div>
  );
}

export default function SustainabilityPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const heroTextRef = useReveal<HTMLDivElement>();
  const heroImageRef = useReveal<HTMLDivElement>();
  const prioritiesHeadingRef = useReveal<HTMLDivElement>();
  const kpisHeadingRef = useReveal<HTMLDivElement>();
  const focusHeadingRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  const priorities = isAr
    ? [
        {
          icon: Leaf,
          title: "البيئة",
          text: "العمل على تقليل الأثر البيئي من خلال تحسين الكفاءة التشغيلية وإدارة الموارد والانبعاثات.",
        },
        {
          icon: Users,
          title: "المجتمع والكوادر",
          text: "الاستثمار في تطوير الموظفين ودعم بيئة عمل آمنة وتعزيز الأثر الإيجابي في المجتمع.",
        },
        {
          icon: ShieldCheck,
          title: "الحوكمة والامتثال",
          text: "اعتماد أطر مؤسسية واضحة تدعم الشفافية والانضباط والالتزام بالمعايير.",
        },
      ]
    : [
        {
          icon: Leaf,
          title: "Environment",
          text: "Reducing environmental impact through stronger operational efficiency, resource management, and emissions awareness.",
        },
        {
          icon: Users,
          title: "People & Community",
          text: "Investing in workforce development, safe workplaces, and a positive contribution to the surrounding community.",
        },
        {
          icon: ShieldCheck,
          title: "Governance & Compliance",
          text: "Applying disciplined institutional frameworks that support transparency, accountability, and compliance.",
        },
      ];

  const kpis = isAr
    ? [
        { value: "2006", label: "سنة التأسيس" },
        { value: "3.2M+", label: "الطاقة الإنتاجية السنوية" },
        { value: "2011", label: "بدء التشغيل" },
        { value: "ESG", label: "نهج استدامة مؤسسي" },
      ]
    : [
        { value: "2006", label: "Established" },
        { value: "3.2M+", label: "Annual Capacity" },
        { value: "2011", label: "Operational Since" },
        { value: "ESG", label: "Structured Sustainability Approach" },
      ];

  const focusAreas = isAr
    ? [
        {
          icon: Recycle,
          title: "الموارد والانبعاثات",
          text: "تحسين إدارة الموارد والطاقة ودعم الممارسات التي تسهم في تقليل الأثر البيئي على المدى الطويل.",
        },
        {
          icon: Factory,
          title: "السلامة التشغيلية",
          text: "ترسيخ ثقافة تشغيلية تضع السلامة والانضباط وحماية الأفراد في مقدمة الأولويات.",
        },
        {
          icon: BarChart3,
          title: "القيمة طويلة الأمد",
          text: "ربط الاستدامة بالأداء المؤسسي والنمو المسؤول وبناء الثقة مع أصحاب العلاقة.",
        },
      ]
    : [
        {
          icon: Recycle,
          title: "Resources & Emissions",
          text: "Improving energy and resource management while supporting practices that reduce long-term environmental impact.",
        },
        {
          icon: Factory,
          title: "Operational Safety",
          text: "Strengthening a workplace culture where safety, discipline, and people protection remain core priorities.",
        },
        {
          icon: BarChart3,
          title: "Long-Term Value",
          text: "Connecting sustainability to enterprise performance, responsible growth, and stakeholder trust.",
        },
      ];

  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-bg-animate absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_25%),radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_18%),linear-gradient(180deg,#020617_0%,#021b16_45%,#020617_100%)]" />

        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div ref={heroTextRef} className="reveal reveal-delay-1">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "الاستدامة" : "Sustainability"}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "الاستدامة كجزء أساسي من النمو الصناعي المسؤول"
                : "Sustainability as a core part of responsible industrial growth"}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "تنظر شركة إسمنت البادية إلى الاستدامة باعتبارها جزءاً أساسياً من نموذجها المؤسسي عبر التوازن بين الأداء الاقتصادي، المسؤولية البيئية، تنمية الكوادر، والحوكمة الرشيدة."
                : "Al Badia Cement views sustainability as a core part of its enterprise model by balancing economic performance, environmental responsibility, people development, and disciplined governance."}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950"
              >
                {isAr ? "تواصل معنا" : "Contact Us"}
                <ArrowIcon className="button-arrow h-4 w-4" />
              </Link>

              <Link
                href="/investors"
                className="button-premium inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
              >
                {isAr ? "علاقات المستثمرين" : "Investor Relations"}
              </Link>
            </div>
          </div>

          <div
            ref={heroImageRef}
            className="reveal reveal-delay-2 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/25 via-transparent to-white/5" />
            <Image
              src="/images/about-planet-v2.jpg"
              alt="Al Badia Cement sustainability and operations"
              width={1200}
              height={900}
              className="h-full w-full object-cover brightness-90"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div ref={prioritiesHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "أولويات الاستدامة" : "Sustainability Priorities"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {priorities.map((item, index) => (
            <PriorityCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
              delayClass={delays[index] ?? ""}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div ref={kpisHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "مؤشرات أساسية" : "Key Indicators"}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item, index) => (
            <KpiCard
              key={item.label}
              value={item.value}
              label={item.label}
              delayClass={
                [
                  "reveal-delay-1",
                  "reveal-delay-2",
                  "reveal-delay-3",
                  "reveal-delay-4",
                ][index] ?? ""
              }
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div ref={focusHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "مجالات التركيز" : "Focus Areas"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((item, index) => (
            <FocusCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
              delayClass={delays[index] ?? ""}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-28">
        <div
          ref={ctaRef}
          className="reveal rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                {isAr ? "الأثر المؤسسي" : "Enterprise Impact"}
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                {isAr
                  ? "استدامة ترتبط بالأداء والثقة والمسؤولية"
                  : "Sustainability connected to performance, trust, and responsibility"}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {isAr
                  ? "تعكس الاستدامة في الشركة التزاماً طويل الأمد بتحسين الأداء المؤسسي، دعم الكوادر، وتعزيز العلاقة مع المجتمع وأصحاب العلاقة."
                  : "Sustainability at the company reflects a long-term commitment to stronger enterprise performance, people development, and a better relationship with communities and stakeholders."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">
                {isAr ? "تواصل مع الفريق" : "Get in Touch"}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {isAr
                  ? "إذا كنتم بحاجة إلى مزيد من المعلومات حول نهج الاستدامة أو التواصل المؤسسي، يمكنكم استخدام صفحة الاتصال."
                  : "If you need more information about sustainability practices or corporate communication, please use the contact page."}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
                >
                  {isAr ? "صفحة الاتصال" : "Contact Page"}
                  <ArrowIcon className="button-arrow h-4 w-4" />
                </Link>

                <a
                  href="mailto:communication@albadiacement.com"
                  className="button-premium inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  communication@albadiacement.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
