"use client";

import Link from "next/link";
import { Factory, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { content } from "../lib/content";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const navLinks = isAr
    ? [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "/about" },
        { label: "المنتجات", href: "/products" },
        { label: "علاقات المستثمرين", href: "/investors" },
        { label: "اتصل بنا", href: "/contact" },
        { label: "الاستدامة", href: "/sustainability" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "Investor Relations", href: "/investors" },
        { label: "Contact", href: "/contact" },
        { label: "Sustainability", href: "/sustainability" },
      ];

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Factory className="h-5 w-5 text-amber-300" />
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  {t.brand}
                </div>
                <div className="text-xs text-slate-400">{t.subtitle}</div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              {isAr
                ? "حضور رقمي مؤسسي حديث يعكس الجودة، الحوكمة، والاستدامة لشركة إسمنت رائدة."
                : "A premium digital corporate presence reflecting quality, governance, and sustainability for a leading cement company."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {isAr ? "معلومات التواصل" : "Contact Information"}
            </h3>

            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 text-amber-300" />
                <span>
                  {isAr
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Saudi Arabia"}
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 text-amber-300" />
                <span>+966 11 000 0000</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 text-amber-300" />
                <span>info@ncc.example</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {isAr ? "علاقات المستثمرين" : "Investor Relations"}
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>
                {isAr
                  ? "للاستفسارات المتعلقة بالمستثمرين والحوكمة والتقارير."
                  : "For investor, governance, and reporting-related inquiries."}
              </p>
              <p>ir@ncc.example</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          {isAr
            ? `© 2026 ${t.brand}. جميع الحقوق محفوظة.`
            : `© 2026 ${t.brand}. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
