"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Language = "ar" | "en";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const urlLang = searchParams.get("lang");
  const lang: Language = urlLang === "en" ? "en" : "ar";

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const hasLangInUrl = searchParams.get("lang");
    const savedLang = localStorage.getItem("lang");

    if (!hasLangInUrl && (savedLang === "ar" || savedLang === "en")) {
      router.replace(`${pathname}?lang=${savedLang}`);
    }
  }, [pathname, router, searchParams]);

  const setLang = (nextLang: Language) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLang);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
