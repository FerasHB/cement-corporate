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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Factory className="h-5 w-5 text-amber-300" />
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                {t.brand}
              </div>
              <div className="text-xs text-slate-400">{t.subtitle}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-2 text-sm transition ${
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

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language */}
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="hidden lg:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
            >
              <Globe className="h-4 w-4" />
              {isAr ? "AR / EN" : "EN / AR"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950 p-6">
          {/* Top */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              {isAr ? "القائمة" : "Menu"}
            </span>

            <button onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Links */}
          <div className="mt-10 flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switch */}
          <button
            onClick={() => {
              setLang(isAr ? "en" : "ar");
            }}
            className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-white"
          >
            {isAr ? "AR / EN" : "EN / AR"}
          </button>
        </div>
      )}
    </>
  );
}
