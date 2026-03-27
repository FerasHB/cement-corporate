"use client";

import {
  FileText,
  Landmark,
  ShieldCheck,
  BarChart3,
  Mail,
  Download,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";

export default function InvestorsPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const highlights = isAr
    ? [
        {
          title: "الشفافية والإفصاح",
          text: "نلتزم بتقديم معلومات واضحة ومنظمة تدعم ثقة المستثمرين وصناع القرار.",
        },
        {
          title: "الحوكمة المؤسسية",
          text: "إطار حوكمة يعزز المساءلة والانضباط المؤسسي والاستدامة طويلة الأجل.",
        },
        {
          title: "النمو المستدام",
          text: "نركز على الأداء المسؤول وبناء قيمة مستقرة للمساهمين على المدى الطويل.",
        },
      ]
    : [
        {
          title: "Transparency & Disclosure",
          text: "We are committed to clear and structured disclosures that support investor confidence and informed decision-making.",
        },
        {
          title: "Corporate Governance",
          text: "A governance framework that strengthens accountability, discipline, and long-term sustainability.",
        },
        {
          title: "Sustainable Growth",
          text: "We focus on responsible performance and stable long-term value creation for shareholders.",
        },
      ];

  const documents = isAr
    ? [
        "التقرير السنوي 2025",
        "النتائج المالية للربع الرابع",
        "عرض المستثمرين",
        "تقرير الحوكمة",
      ]
    : [
        "Annual Report 2025",
        "Q4 Financial Results",
        "Investor Presentation",
        "Governance Report",
      ];

  const faq = isAr
    ? [
        "كيف يمكن الوصول إلى التقارير المالية؟",
        "أين يمكن الاطلاع على الإفصاحات والإعلانات؟",
        "كيف يمكن التواصل مع فريق علاقات المستثمرين؟",
      ]
    : [
        "How can financial reports be accessed?",
        "Where can disclosures and announcements be found?",
        "How can the investor relations team be contacted?",
      ];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_25%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "علاقات المستثمرين" : "Investor Relations"}
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "ثقة استثمارية مبنية على الشفافية والحوكمة والنمو المسؤول"
                : "Investor confidence built on transparency, governance, and responsible growth"}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "نوفر منصة معلومات مؤسسية تدعم المستثمرين عبر الإفصاح المنظم، الحوكمة الواضحة، والتقارير التي تعكس قوة الأداء والانضباط التشغيلي."
                : "We provide a structured corporate information platform for investors through disciplined disclosures, clear governance, and reporting that reflects resilient performance and operational discipline."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const icons = [ShieldCheck, Landmark, BarChart3];
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <FileText className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              {isAr ? "مركز التحميل" : "Download Center"}
            </h2>

            <div className="mt-6 space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                >
                  <span className="text-slate-200">{doc}</span>
                  <Download className="h-4 w-4 text-amber-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Mail className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              {isAr ? "تواصل المستثمرين" : "Investor Contact"}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {isAr
                ? "فريق علاقات المستثمرين متاح للاستفسارات المتعلقة بالتقارير، الإفصاحات، والحوكمة المؤسسية."
                : "Our investor relations team is available for inquiries related to reporting, disclosures, and corporate governance."}
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div>
                <div className="text-sm text-slate-400">
                  {isAr ? "البريد الإلكتروني" : "Email"}
                </div>
                <div className="mt-1 text-white">ir@ncc.example</div>
              </div>

              <div>
                <div className="text-sm text-slate-400">
                  {isAr ? "الهاتف" : "Phone"}
                </div>
                <div className="mt-1 text-white">+966 11 000 0000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-28">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>

          <div className="mt-8 grid gap-4">
            {faq.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-base text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
