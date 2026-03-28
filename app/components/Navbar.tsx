"use client";

import { Factory, Globe, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { content } from "../lib/content";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";
  const pathname = usePathname();

  const nextLang = isAr ? "en" : "ar";

  const navLinks = isAr
    ? [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "/about" },
        { label: "المنتجات", href: "/products" },
        { label: "علاقات المستثمرين", href: "/investors" },
        { label: "الاستدامة", href: "/sustainability" },
        { label: "اتصل بنا", href: "/contact" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "Investor Relations", href: "/investors" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Contact", href: "/contact" },
      ];

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/?lang=${lang}`} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Factory className="h-5 w-5 text-amber-300" />
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-200">
              {t.brand}
            </div>
            <div className="text-xs text-slate-400">{t.subtitle}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-2">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={`${item.href}?lang=${lang}`}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`${pathname}?lang=${nextLang}`}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 lg:px-4 lg:py-2.5"
          >
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {isAr ? "AR / EN" : "EN / AR"}
            </span>
          </Link>

          <details className="lg:hidden relative">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white">
              <Menu className="h-5 w-5" />
            </summary>

            <div className="absolute end-0 mt-3 w-[280px] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={`${item.href}?lang=${lang}`}
                      className={`rounded-xl px-4 py-3 text-base font-medium ${
                        isActive
                          ? "bg-white text-slate-950"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
