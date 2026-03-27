"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "ar" | "en";

type LanguageContextType = {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "ar" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
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
