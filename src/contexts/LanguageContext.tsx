"use client";

import React, { createContext, useContext, useState, useSyncExternalStore } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("language");
  if (saved === "en" || saved === "fr") return saved;
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "fr" ? "fr" : "en";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const initialLang = useSyncExternalStore(subscribe, getInitialLanguage, () => "en" as Language);
  const [language, setLanguage] = useState<Language>(initialLang);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
