"use client";
import Navbar from "./components/Navbar";
import { useMemo, useState } from "react";
import Hero from "./components/Hero";
import {
  Factory,
  Globe,
  Leaf,
  Landmark,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const content = {
  ar: {
    dir: "rtl",
    brand: "شركة الإسمنت الوطنية",
    subtitle: "قيادة صناعية تبني المستقبل",
    nav: [
      "الرئيسية",
      "من نحن",
      "المنتجات",
      "علاقات المستثمرين",
      "الاستدامة",
      "الوظائف",
      "اتصل بنا",
    ],
    badge: "إسمنت · بنية تحتية · استدامة",
    heroTitle: "قوة صناعية موثوقة تبني مشاريع الغد",
    heroText:
      "حضور رقمي مؤسسي حديث يعكس الجودة والابتكار والحوكمة والثقة الاستثمارية لشركة إسمنت كبرى في الشرق الأوسط.",
    primary: "استكشف الشركة",
    secondary: "علاقات المستثمرين",
    statsTitle: "أرقام رئيسية",
    stats: [
      { label: "سنة التأسيس", value: "1978" },
      { label: "الطاقة الإنتاجية", value: "12MTPA" },
      { label: "عدد الموظفين", value: "4,500+" },
      { label: "الانتشار", value: "16 سوق" },
    ],
    pillarsTitle: "ركائز الأعمال",
    pillars: [
      {
        title: "المنتجات",
        text: "حلول إسمنتية عالية الجودة لمشاريع البنية التحتية والإنشاءات.",
      },
      {
        title: "الاستدامة",
        text: "التزام واضح بخفض الانبعاثات وكفاءة الموارد والطاقة.",
      },
      {
        title: "علاقات المستثمرين",
        text: "شفافية مؤسسية وحوكمة قوية وتقارير موثوقة.",
      },
      {
        title: "الوظائف",
        text: "بيئة عمل احترافية تدعم التطور والسلامة والتميز.",
      },
    ],
  },
  en: {
    dir: "ltr",
    brand: "National Cement Company",
    subtitle: "Industrial leadership building the future",
    nav: [
      "Home",
      "About",
      "Products",
      "Investor Relations",
      "Sustainability",
      "Careers",
      "Contact",
    ],
    badge: "Cement · Infrastructure · Sustainability",
    heroTitle: "Trusted industrial strength building tomorrow’s infrastructure",
    heroText:
      "A premium corporate digital presence reflecting quality, innovation, governance, and investor confidence for a major cement company in the Middle East.",
    primary: "Explore Company",
    secondary: "Investor Relations",
    statsTitle: "Key Figures",
    stats: [
      { label: "Established", value: "1978" },
      { label: "Capacity", value: "12MTPA" },
      { label: "Employees", value: "4,500+" },
      { label: "Market Reach", value: "16 Markets" },
    ],
    pillarsTitle: "Business Pillars",
    pillars: [
      {
        title: "Products",
        text: "High-quality cement solutions for infrastructure and construction.",
      },
      {
        title: "Sustainability",
        text: "A clear commitment to emissions reduction and resource efficiency.",
      },
      {
        title: "Investor Relations",
        text: "Strong governance, transparency, and credible reporting.",
      },
      {
        title: "Careers",
        text: "A professional workplace focused on growth, safety, and excellence.",
      },
    ],
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = useMemo(() => content[lang], [lang]);
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const pillarIcons = [Factory, Leaf, Landmark, Briefcase];

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-950 text-white">
      <Navbar t={t} isAr={isAr} setLang={setLang} />
      <Hero t={t} isAr={isAr} />
      import Stats from "./components/Stats";
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {t.pillarsTitle}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];

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
    </main>
  );
}
