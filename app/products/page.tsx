"use client";

import {
  Factory,
  ShieldCheck,
  Package,
  Settings,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";

export default function ProductsPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const products = isAr
    ? [
        {
          title: "إسمنت بورتلاندي عادي",
          desc: "حل موثوق لمشاريع البناء العامة والبنية التحتية ذات المتطلبات القياسية.",
          type: "OPC",
        },
        {
          title: "إسمنت مقاوم للكبريتات",
          desc: "مصمم للبيئات القاسية والتطبيقات التي تتطلب مقاومة أعلى للعوامل الكيميائية.",
          type: "SRC",
        },
        {
          title: "إسمنت التشييد والبناء",
          desc: "مناسب لأعمال البناء المتنوعة مع أداء ثابت وجودة تشغيلية موثوقة.",
          type: "Construction Cement",
        },
        {
          title: "إسمنت المشاريع الخاصة",
          desc: "حلول مخصصة لتطبيقات صناعية وإنشائية تتطلب مواصفات فنية دقيقة.",
          type: "Special Applications",
        },
      ]
    : [
        {
          title: "Ordinary Portland Cement",
          desc: "A reliable solution for general construction and infrastructure projects with standard performance requirements.",
          type: "OPC",
        },
        {
          title: "Sulfate Resistant Cement",
          desc: "Designed for harsh environments and applications requiring higher resistance to chemical exposure.",
          type: "SRC",
        },
        {
          title: "Construction Cement",
          desc: "Suitable for a wide range of construction applications with stable performance and dependable quality.",
          type: "Construction Cement",
        },
        {
          title: "Special Project Cement",
          desc: "Tailored solutions for industrial and construction applications requiring precise technical specifications.",
          type: "Special Applications",
        },
      ];

  const specs = isAr
    ? [
        { label: "الجودة", value: "مطابقة للمعايير الدولية" },
        { label: "التوريد", value: "سائب ومعبأ" },
        { label: "التطبيقات", value: "بنية تحتية، إنشاءات، مشاريع صناعية" },
        { label: "الدعم", value: "فني وتجاري" },
      ]
    : [
        { label: "Quality", value: "Aligned with international standards" },
        { label: "Supply", value: "Bulk and bagged cement" },
        {
          label: "Applications",
          value: "Infrastructure, construction, industrial projects",
        },
        { label: "Support", value: "Technical and commercial support" },
      ];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_25%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "المنتجات" : "Products"}
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "محفظة منتجات تدعم مشاريع البناء والبنية التحتية بثقة"
                : "A product portfolio built to support construction and infrastructure with confidence"}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "نقدم مجموعة متكاملة من منتجات الإسمنت المصممة لتلبية متطلبات المشاريع الوطنية والإنشائية والصناعية، مع التركيز على الجودة، الاعتمادية، والانضباط في التوريد."
                : "We offer an integrated range of cement products designed to meet the requirements of national, construction, and industrial projects with a strong focus on quality, reliability, and disciplined supply."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "فئات المنتجات" : "Product Categories"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                  <Package className="h-5 w-5" />
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-300">
                  {product.type}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {product.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Settings className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              {isAr ? "المواصفات الفنية" : "Technical Highlights"}
            </h2>

            <div className="mt-6 space-y-4">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                >
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="mt-1 text-base font-medium text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              {isAr ? "الجودة والاعتمادات" : "Quality & Certifications"}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {isAr
                ? "تخضع منتجاتنا لإجراءات رقابية وتشغيلية صارمة لضمان الاتساق في الأداء وتلبية المعايير الفنية المعتمدة إقليمياً ودولياً."
                : "Our products are supported by strict operational and quality control procedures to ensure consistency in performance and compliance with recognized regional and international technical standards."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <div className="flex items-center gap-3 text-amber-300">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="font-medium text-white">
                    {isAr ? "اعتمادات فنية" : "Technical Certifications"}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <div className="flex items-center gap-3 text-amber-300">
                  <Factory className="h-5 w-5" />
                  <span className="font-medium text-white">
                    {isAr ? "قدرات توريد موثوقة" : "Reliable Supply Capability"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-28">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                {isAr ? "الدعم والمبيعات" : "Sales & Support"}
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                {isAr
                  ? "فريق جاهز لدعم احتياجاتكم الفنية والتجارية"
                  : "A team ready to support your technical and commercial requirements"}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {isAr
                  ? "نوفر دعماً متخصصاً لمساعدة العملاء والشركاء في اختيار الحلول المناسبة للمشاريع، مع التزام عالٍ بالاستجابة والموثوقية."
                  : "We provide specialized support to help customers and partners select the right solutions for their projects, backed by responsiveness and reliability."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                <PhoneCall className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {isAr ? "تواصل مع فريق المنتجات" : "Contact the Product Team"}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {isAr
                  ? "للاستفسارات التجارية أو طلبات المشاريع أو المعلومات الفنية، يمكن لفريقنا دعمكم عبر قنوات التواصل المؤسسية."
                  : "For commercial inquiries, project requests, or technical product information, our team is available through dedicated corporate channels."}
              </p>

              <div className="mt-6 space-y-3 text-slate-300">
                <div>products@ncc.example</div>
                <div>+966 11 000 0000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
