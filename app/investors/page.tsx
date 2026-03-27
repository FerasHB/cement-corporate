"use client";

import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";
import Navbar from "../components/Navbar";

export default function InvestorsPage() {
  const { lang, setLang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-950 text-white">
      <Navbar t={t} isAr={isAr} setLang={setLang} />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-semibold md:text-6xl">
          {isAr ? "علاقات المستثمرين" : "Investor Relations"}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {isAr
            ? "تتضمن هذه الصفحة الإعلانات، الحوكمة، التقارير، معلومات التواصل، والملفات القابلة للتحميل."
            : "This page will include announcements, governance, reports, investor contacts, and downloadable documents."}
        </p>
      </div>
    </main>
  );
}
