"use client";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pillars from "./components/Pillars";
import { useLanguage } from "./components/LanguageProvider";
import { content } from "./lib/content";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <Hero t={t} isAr={isAr} />
      <Stats t={t} />
      <Pillars t={t} />
    </main>
  );
}
