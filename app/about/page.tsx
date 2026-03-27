"use client";

import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const { lang, setLang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-950 text-white">
      <Navbar t={t} isAr={isAr} setLang={setLang} />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-semibold md:text-6xl">
          {isAr ? "من نحن" : "About Us"}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {isAr
            ? "تقدم هذه الصفحة نبذة عن الشركة، الرؤية، الرسالة، القيم، والاتجاه الاستراتيجي."
            : "This page presents the corporate profile, vision, mission, values, and strategic direction of the company."}
        </p>
      </div>
    </main>
  );
}
