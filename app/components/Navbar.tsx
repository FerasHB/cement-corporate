"use client";

import { Factory, Globe } from "lucide-react";

export default function Navbar({ t, isAr, setLang }: any) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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

        <nav className="hidden gap-6 lg:flex">
          {t.nav.map((item: string) => (
            <span
              key={item}
              className="text-sm text-slate-300 hover:text-white cursor-pointer"
            >
              {item}
            </span>
          ))}
        </nav>

        <button
          onClick={() => setLang(isAr ? "en" : "ar")}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
        >
          <Globe className="h-4 w-4" />
          {isAr ? "AR / EN" : "EN / AR"}
        </button>
      </div>
    </header>
  );
}
