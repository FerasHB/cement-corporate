"use client";

import Image from "next/image";
import { useLanguage } from "../components/LanguageProvider";
import { useReveal } from "../hooks/useReveal";
import { content } from "../lib/content";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const textRef = useReveal<HTMLDivElement>();
  const imageRef = useReveal<HTMLDivElement>();

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* TEXT */}
          <div ref={textRef} className="reveal reveal-delay-1">
            <div className="mb-6 text-xs uppercase tracking-[0.22em] text-slate-400">
              {isAr ? "من نحن" : "About Us"}
            </div>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              {isAr
                ? "شركة رائدة في صناعة الإسمنت والبنية التحتية"
                : "A Leading Company in Cement & Infrastructure"}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {isAr
                ? "تأسست شركة إسمنت البادية لتلبية الطلب المتزايد على مواد البناء عالية الجودة، حيث تساهم في تطوير مشاريع البنية التحتية والصناعات العمرانية في المنطقة."
                : "Al Badia Cement was established to meet the growing demand for high-quality construction materials, contributing to infrastructure and urban development across the region."}
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              {isAr
                ? "تعتمد الشركة على أحدث التقنيات الصناعية، مع التزام قوي بالجودة والاستدامة والحوكمة، مما يعزز مكانتها كشريك موثوق في القطاع."
                : "The company leverages advanced industrial technologies with a strong commitment to quality, sustainability, and governance, reinforcing its position as a trusted industry partner."}
            </p>
          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="reveal reveal-delay-2 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/25 via-transparent to-white/5" />

            <Image
              src="/images/about-planet-v2.jpg"
              alt="Cement factory"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
