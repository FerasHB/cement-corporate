"use client";

import { ShieldCheck, Factory, BarChart3 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

type TrustSectionProps = {
  isAr: boolean;
};

function TrustCard({
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
      className={`reveal ${delayClass} hover-lift rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

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

  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <TrustCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            delayClass={delays[index] ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
