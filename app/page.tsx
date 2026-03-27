"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pillars from "./components/Pillars";
import { useLanguage } from "./components/LanguageProvider";
import { content } from "./lib/content";

export default function HomePage() {
  const { lang, setLang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-950 text-white">
      <Navbar t={t} isAr={isAr} setLang={setLang} />
      <Hero t={t} isAr={isAr} />
      <Stats t={t} />
      <Pillars t={t} />
    </main>
  );
}
