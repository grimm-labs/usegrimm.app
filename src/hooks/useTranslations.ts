"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// Import des fichiers de traduction
import enTranslations from "@/locales/en.json";
import frTranslations from "@/locales/fr.json";

const translations = {
  en: enTranslations,
  fr: frTranslations,
};

type TranslationKey = string;
export type Translator = {
  <T = string>(key: TranslationKey): T;
};

export function useTranslations() {
  const { language } = useLanguage();
  // Le hook retourne une chaîne. On utilise `unknown` pour éviter `any` et
  // on vérifie le type final avant de retourner.

  const t = <T = string>(key: TranslationKey): T => {
    const keys = key.split(".");
    let value: unknown = translations[language as keyof typeof translations];

    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        k in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key as unknown as T;
      }
    }

    // Retourner la valeur finale castée en T. Si la clé est manquante, on renvoie
    // la clé comme fallback castée en T (comportement inchangé mais typé).
    return (value as T) ?? (key as unknown as T);
  };

  return t as Translator;
}
