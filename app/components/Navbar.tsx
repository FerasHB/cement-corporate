"use client";

import { Factory, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { content } from "../lib/content";
import { useState } from "react";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="brand-premium group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition group-hover:border-white/20 group-hover:bg-white/10">
              <Factory className="h-5 w-5 text-amber-300" />
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 transition group-hover:text-white">
                {t.brand}
              </div>
              <div className="text-xs text-slate-400">{t.subtitle}</div>
            </div>
          </Link>

          <nav className="nav-shell hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-2 lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-premium rounded-xl px-4 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="button-premium hidden lg:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              {isAr ? "AR / EN" : "EN / AR"}
            </button>

            <button
              onClick={() => setOpen(true)}
              className="button-premium lg:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/98 p-6 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                {isAr ? "القائمة" : "Menu"}
              </span>

              <button
                onClick={() => setOpen(false)}
                className="button-premium rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl border border-white/10 px-5 py-4 text-2xl font-semibold transition ${
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

            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="button-premium mt-8 w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-white hover:bg-white/10"
            >
              {isAr ? "AR / EN" : "EN / AR"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
