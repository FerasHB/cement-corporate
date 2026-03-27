"use client";

import { ShieldCheck, Factory, BarChart3 } from "lucide-react";

type TrustSectionProps = {
  isAr: boolean;
};

export default function TrustSection({ isAr }: TrustSectionProps) {
  const items = isAr
    ? [
        {
          icon: Factory,
          title: "قدرات إنتاجية موثوقة",
          text: "منشأة صناعية حديثة تدعم تلبية الطلب المتزايد على الإسمنت عالي الجودة.",
        },
        {
          icon: ShieldCheck,
          title: "التزام بالجودة والحوكمة",
          text: "نهج مؤسسي يعزز الثقة من خلال الانضباط التشغيلي والشفافية.",
        },
        {
          icon: BarChart3,
          title: "دعم للتنمية والبنية التحتية",
          text: "مساهمة مستمرة في مشاريع البناء والبنية التحتية ذات الأثر طويل الأمد.",
        },
      ]
    : [
        {
          icon: Factory,
          title: "Reliable Production Capability",
          text: "A modern industrial facility supporting growing demand for high-quality cement.",
        },
        {
          icon: ShieldCheck,
          title: "Commitment to Quality & Governance",
          text: "A disciplined enterprise approach that reinforces trust through transparency and consistency.",
        },
        {
          icon: BarChart3,
          title: "Supporting Infrastructure Growth",
          text: "A continued contribution to construction and infrastructure projects with long-term impact.",
        },
      ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
