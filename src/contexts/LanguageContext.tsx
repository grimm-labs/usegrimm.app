"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "language";

// The language lives in localStorage (an external store) instead of React
// state. Pages are pre-rendered in English on the server; after hydration
// React re-reads the store and switches to the saved or browser language.
const listeners = new Set<() => void>();

// Used only when localStorage cannot be written (e.g. blocked storage),
// so switching language still works for the current visit.
let unsavedLanguage: Language | null = null;

function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "fr";
}

function readSavedLanguage(): Language | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return isLanguage(saved) ? saved : null;
  } catch {
    return null;
  }
}

function getClientLanguage(): Language {
  const saved = unsavedLanguage ?? readSavedLanguage();
  if (saved) return saved;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function getServerLanguage(): Language {
  return "en";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // Keeps other open tabs in sync.
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function saveLanguage(lang: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
    unsavedLanguage = null;
  } catch {
    unsavedLanguage = lang;
  }
  listeners.forEach((notify) => notify());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getClientLanguage,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage: saveLanguage }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
