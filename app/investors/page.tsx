"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Landmark,
  BarChart3,
  FileText,
  Mail,
  ArrowLeft,
  ArrowRight,
  Download,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";
import { useReveal } from "../hooks/useReveal";

function HighlightCard({
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
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function DocumentCard({
  title,
  meta,
  delayClass,
}: {
  title: string;
  meta: string;
  delayClass: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} hover-lift flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-5`}
    >
      <div>
        <div className="text-lg font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-slate-400">{meta}</div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
        <Download className="h-4 w-4" />
      </div>
    </div>
  );
}

function FaqCard({
  question,
  answer,
  delayClass,
}: {
  question: string;
  answer: string;
  delayClass: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} rounded-[24px] border border-white/10 bg-white/5 p-6`}
    >
      <h3 className="text-lg font-semibold text-white">{question}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{answer}</p>
    </div>
  );
}

export default function InvestorsPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const heroTextRef = useReveal<HTMLDivElement>();
  const heroImageRef = useReveal<HTMLDivElement>();
  const highlightsHeadingRef = useReveal<HTMLDivElement>();
  const docsHeadingRef = useReveal<HTMLDivElement>();
  const contactRef = useReveal<HTMLDivElement>();
  const faqHeadingRef = useReveal<HTMLDivElement>();

  const highlights = isAr
    ? [
        {
          icon: ShieldCheck,
          title: "الشفافية والإفصاح",
          text: "نهج مؤسسي يركز على وضوح المعلومات وتقديم محتوى منظم يخدم المستثمرين وأصحاب العلاقة.",
        },
        {
          icon: Landmark,
          title: "الحوكمة المؤسسية",
          text: "إطار حوكمة يدعم الانضباط، المساءلة، واتخاذ القرارات وفق معايير مؤسسية واضحة.",
        },
        {
          icon: BarChart3,
          title: "النمو المستدام",
          text: "تركيز على الأداء طويل الأمد وبناء الثقة عبر الجودة والاستمرارية والانضباط التشغيلي.",
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: "Transparency & Disclosure",
          text: "An enterprise approach focused on clear information and structured communication for investors and stakeholders.",
        },
        {
          icon: Landmark,
          title: "Corporate Governance",
          text: "A governance framework that supports accountability, discipline, and decision-making based on clear corporate standards.",
        },
        {
          icon: BarChart3,
          title: "Sustainable Growth",
          text: "A focus on long-term performance and trust-building through quality, continuity, and operational discipline.",
        },
      ];

  const documents = isAr
    ? [
        { title: "التقارير المالية", meta: "Financial Reports" },
        { title: "الإعلانات والإفصاحات", meta: "Announcements & Disclosures" },
        { title: "الحوكمة", meta: "Corporate Governance" },
      ]
    : [
        {
          title: "Financial Reports",
          meta: "Periodic reporting and financial information",
        },
        {
          title: "Announcements & Disclosures",
          meta: "Material updates and investor communications",
        },
        {
          title: "Corporate Governance",
          meta: "Governance framework and board-related information",
        },
      ];

  const faq = isAr
    ? [
        {
          question: "كيف يمكن التواصل مع علاقات المستثمرين؟",
          answer:
            "يمكن التواصل عبر البريد الإلكتروني المخصص لعلاقات المستثمرين أو من خلال صفحة الاتصال.",
        },
        {
          question: "أين يمكن العثور على المعلومات المالية؟",
          answer:
            "يتم عرض المواد المالية والتقارير والإفصاحات ضمن قسم علاقات المستثمرين.",
        },
        {
          question: "هل تتوفر معلومات عن الحوكمة؟",
          answer:
            "نعم، تتضمن الصفحة أقساماً مخصصة للحوكمة والإفصاح المؤسسي والمعلومات ذات الصلة.",
        },
      ]
    : [
        {
          question: "How can investor relations be contacted?",
          answer:
            "Investor relations can be contacted through the dedicated email address or via the contact page.",
        },
        {
          question: "Where can financial information be found?",
          answer:
            "Financial materials, reports, and disclosures are presented within the investor relations section.",
        },
        {
          question: "Is governance information available?",
          answer:
            "Yes, the page includes sections dedicated to governance, disclosure, and related corporate information.",
        },
      ];

  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-bg-animate absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_20%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />

        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div ref={heroTextRef} className="reveal reveal-delay-1">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "علاقات المستثمرين" : "Investor Relations"}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "ثقة استثمارية مبنية على الشفافية والحوكمة"
                : "Investor confidence built on transparency and governance"}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "توفر شركة إسمنت البادية منصة معلومات مؤسسية منظمة تدعم المستثمرين وأصحاب العلاقة عبر الإفصاح والحوكمة والمعلومات ذات الصلة بالأداء المؤسسي."
                : "Al Badia Cement provides a structured corporate information platform supporting investors and stakeholders through disclosure, governance, and enterprise-related information."}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:investor.relations@albadiacement.com"
                className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950"
              >
                {isAr
                  ? "تواصل مع علاقات المستثمرين"
                  : "Contact Investor Relations"}
                <ArrowIcon className="button-arrow h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="button-premium inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10"
              >
                {isAr ? "صفحة الاتصال" : "Contact Page"}
              </Link>
            </div>
          </div>

          <div
            ref={heroImageRef}
            className="reveal reveal-delay-2 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/25 via-transparent to-white/5" />
            <Image
              src="/images/hero-planet-v2.jpg"
              alt="Al Badia Cement facility"
              width={1200}
              height={900}
              className="h-full w-full object-cover brightness-90"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div ref={highlightsHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "مرتكزات علاقات المستثمرين" : "Investor Relations Pillars"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <HighlightCard
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
        <div ref={docsHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "مركز الوثائق" : "Document Center"}
          </h2>
        </div>

        <div className="grid gap-5">
          {documents.map((doc, index) => (
            <DocumentCard
              key={doc.title}
              title={doc.title}
              meta={doc.meta}
              delayClass={delays[index] ?? ""}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div
          ref={contactRef}
          className="reveal rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                {isAr ? "بيانات التواصل" : "Investor Contact"}
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                {isAr
                  ? "قنوات تواصل واضحة للمستثمرين وأصحاب العلاقة"
                  : "Clear communication channels for investors and stakeholders"}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {isAr
                  ? "للاستفسارات المتعلقة بالإفصاحات أو الحوكمة أو المعلومات المؤسسية، يمكن التواصل مباشرة مع قسم علاقات المستثمرين."
                  : "For disclosure, governance, or enterprise-related inquiries, investors may contact the investor relations department directly."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                <Mail className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {isAr ? "علاقات المستثمرين" : "Investor Relations"}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300 break-all">
                investor.relations@albadiacement.com
              </p>

              <p className="mt-2 text-sm text-slate-400">+963 11 9798</p>

              <div className="mt-6">
                <a
                  href="mailto:investor.relations@albadiacement.com"
                  className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
                >
                  {isAr ? "إرسال بريد إلكتروني" : "Send Email"}
                  <ArrowIcon className="button-arrow h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-28">
        <div ref={faqHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "أسئلة شائعة" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {faq.map((item, index) => (
            <FaqCard
              key={item.question}
              question={item.question}
              answer={item.answer}
              delayClass={delays[index] ?? ""}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
