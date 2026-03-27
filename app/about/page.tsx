"use client";

import { ShieldCheck, Target, Eye, TrendingUp } from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const values = isAr
    ? [
        "التميز التشغيلي",
        "الجودة والموثوقية",
        "الاستدامة والمسؤولية",
        "الشفافية والحوكمة",
      ]
    : [
        "Operational Excellence",
        "Quality & Reliability",
        "Sustainability & Responsibility",
        "Transparency & Governance",
      ];

  const milestones = isAr
    ? [
        { year: "1978", text: "تأسيس الشركة وبداية الانطلاقة الصناعية." },
        { year: "1996", text: "توسعة القدرات الإنتاجية لدعم النمو الوطني." },
        {
          year: "2012",
          text: "تعزيز الكفاءة التشغيلية وتطوير البنية الصناعية.",
        },
        {
          year: "2024",
          text: "ترسيخ توجهات الاستدامة والحوكمة والتحول المؤسسي.",
        },
      ]
    : [
        {
          year: "1978",
          text: "Company established and industrial operations launched.",
        },
        {
          year: "1996",
          text: "Production capacity expanded to support national growth.",
        },
        {
          year: "2012",
          text: "Operational efficiency and industrial infrastructure upgraded.",
        },
        {
          year: "2024",
          text: "Sustainability, governance, and enterprise transformation reinforced.",
        },
      ];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_25%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "من نحن" : "About Us"}
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "شركة صناعية تقود النمو بجودة وثقة واستدامة"
                : "An industrial leader built on quality, trust, and sustainable growth"}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "نقدم نموذجاً مؤسسياً حديثاً في صناعة الإسمنت، يجمع بين القوة الصناعية، الانضباط التشغيلي، والالتزام بالاستدامة والحوكمة لدعم مشاريع البنية التحتية والتنمية طويلة الأمد."
                : "We represent a modern enterprise model in the cement industry, combining industrial strength, disciplined operations, and a firm commitment to sustainability and governance to support infrastructure and long-term development."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">
              {isAr ? "الرؤية" : "Vision"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {isAr
                ? "أن نكون المعيار الإقليمي للتميز الصناعي المستدام في قطاع الإسمنت ومواد البناء."
                : "To become the regional benchmark for sustainable industrial excellence in cement and building materials."}
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">
              {isAr ? "الرسالة" : "Mission"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {isAr
                ? "تقديم منتجات موثوقة وحلول صناعية متقدمة تدعم التنمية العمرانية والاقتصادية بأعلى مستويات الجودة والانضباط."
                : "To deliver reliable products and advanced industrial solutions that support economic and urban development with the highest standards of quality and discipline."}
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">
              {isAr ? "القيم" : "Values"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "محطات رئيسية" : "Key Milestones"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm uppercase tracking-[0.16em] text-amber-300">
                {item.year}
              </div>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-28">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                {isAr ? "الملف المؤسسي" : "Corporate Profile"}
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                {isAr
                  ? "شركة ترتكز على الأداء والانضباط ورؤية طويلة الأجل"
                  : "An enterprise defined by performance, discipline, and long-term vision"}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {isAr
                  ? "نعمل على بناء قيمة مستدامة عبر التميز التشغيلي، الاستثمار في الكفاءات، وتعزيز مكانتنا كشريك موثوق في مشاريع البنية التحتية والتنمية."
                  : "We build sustainable value through operational excellence, investment in people, and a trusted role in infrastructure and development projects."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                <TrendingUp className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {isAr ? "نمو مؤسسي مستدام" : "Sustainable Enterprise Growth"}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {isAr
                  ? "تركيزنا المستمر على الجودة، الحوكمة، والاستدامة يعزز قدرتنا على النمو بثبات وبناء الثقة مع المستثمرين والعملاء."
                  : "Our ongoing focus on quality, governance, and sustainability strengthens our ability to grow responsibly and build trust with investors and customers."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
