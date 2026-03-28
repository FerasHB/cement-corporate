"use client";

import Image from "next/image";
import {
  Package,
  ShieldCheck,
  Factory,
  BadgeCheck,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";
import { useReveal } from "../hooks/useReveal";

function ProductCard({
  title,
  desc,
  tag,
  delayClass,
}: {
  title: string;
  desc: string;
  tag: string;
  delayClass: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} hover-lift rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
          <Package className="h-5 w-5" />
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-slate-300">
          {tag}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-base leading-8 text-slate-300">{desc}</p>
    </div>
  );
}

function SpecCard({
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

export default function ProductsPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const heroTextRef = useReveal<HTMLDivElement>();
  const heroImageRef = useReveal<HTMLDivElement>();
  const headingRef = useReveal<HTMLDivElement>();
  const specsHeadingRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  const products = isAr
    ? [
        {
          title: "الإسمنت البورتلاندي العادي",
          desc: "منتج عالي الجودة مناسب لمختلف تطبيقات البناء والبنية التحتية.",
          tag: "OPC",
        },
        {
          title: "الكلنكر",
          desc: "يتم إنتاجه وفق معايير تشغيلية متقدمة لضمان القوة والموثوقية.",
          tag: "Clinker",
        },
        {
          title: "حلول إسمنتية للمشاريع",
          desc: "حلول تدعم المشاريع الهندسية والصناعية ذات المتطلبات العالية.",
          tag: "Projects",
        },
      ]
    : [
        {
          title: "Ordinary Portland Cement",
          desc: "A high-quality product suitable for a wide range of construction and infrastructure applications.",
          tag: "OPC",
        },
        {
          title: "Clinker",
          desc: "Produced under advanced operating standards to ensure strength and consistency.",
          tag: "Clinker",
        },
        {
          title: "Project Cement Solutions",
          desc: "Cement solutions supporting engineering and industrial projects with demanding requirements.",
          tag: "Projects",
        },
      ];

  const specs = isAr
    ? [
        {
          icon: ShieldCheck,
          title: "الجودة",
          text: "منتجات تعتمد على معايير تشغيلية دقيقة لضمان الثبات والاعتمادية.",
        },
        {
          icon: BadgeCheck,
          title: "الاعتمادية",
          text: "حلول مناسبة للمشاريع التي تتطلب أداءً ثابتاً وتوريداً منظماً.",
        },
        {
          icon: Factory,
          title: "القدرة الإنتاجية",
          text: "إنتاج صناعي يدعم تلبية احتياجات المشاريع والبنية التحتية.",
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: "Quality",
          text: "Products supported by disciplined operating standards to ensure reliability and consistency.",
        },
        {
          icon: BadgeCheck,
          title: "Reliability",
          text: "Solutions suited for projects requiring dependable performance and structured supply.",
        },
        {
          icon: Factory,
          title: "Production Capability",
          text: "Industrial output designed to support infrastructure and large-scale project demand.",
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
              {isAr ? "المنتجات" : "Products"}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "منتجات إسمنتية موثوقة تدعم البناء والبنية التحتية"
                : "Reliable cement products supporting construction and infrastructure"}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "توفر شركة إسمنت البادية منتجات عالية الجودة تم تطويرها لتلبية احتياجات المشاريع العمرانية والهندسية والصناعية، مع تركيز واضح على الجودة والاعتمادية والاستمرارية."
                : "Al Badia Cement delivers high-quality products developed to support urban, engineering, and industrial projects with a clear focus on quality, reliability, and continuity."}
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950"
              >
                {isAr ? "تواصل مع فريق المبيعات" : "Contact Sales Team"}
                <ArrowIcon className="button-arrow h-4 w-4" />
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
              alt="Al Badia Cement production facility"
              width={1200}
              height={900}
              className="h-full w-full object-cover brightness-90"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div ref={headingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "فئات المنتجات" : "Product Categories"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              desc={product.desc}
              tag={product.tag}
              delayClass={delays[index] ?? ""}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div ref={specsHeadingRef} className="reveal mb-10">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            {isAr ? "الجودة والاعتمادية" : "Quality & Reliability"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {specs.map((item, index) => (
            <SpecCard
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
                {isAr ? "الدعم التجاري" : "Commercial Support"}
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
                {isAr
                  ? "هل تحتاج إلى معلومات إضافية عن المنتجات؟"
                  : "Need more information about our products?"}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {isAr
                  ? "يمكن لفريقنا مساعدتك في الاستفسارات العامة والتجارية وتوجيهك إلى القسم المناسب حسب طبيعة الطلب."
                  : "Our team can support general and commercial product inquiries and direct you to the appropriate department based on your needs."}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">
                {isAr ? "تواصل مع الفريق" : "Get in Touch"}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {isAr
                  ? "للاستفسارات المتعلقة بالمنتجات والمبيعات، يمكنكم التواصل عبر البريد الإلكتروني أو صفحة الاتصال."
                  : "For product and sales-related inquiries, contact us by email or through the contact page."}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:sales@albadiacement.com"
                  className="button-premium inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
                >
                  sales@albadiacement.com
                  <ArrowIcon className="button-arrow h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="button-premium inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {isAr ? "صفحة الاتصال" : "Contact Page"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
