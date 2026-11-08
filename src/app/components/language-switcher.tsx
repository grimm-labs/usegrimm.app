"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDownIcon, CheckIcon } from "./icons";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const languages = [
    { code: "en", name: "English", flag: "/flags/us.svg" },
    { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: "en" | "fr") => {
    setLanguage(langCode);
    closeDropdown();
  };

  return (
    <div className="relative">
      {/* Bouton principal */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300 min-w-[130px] justify-center"
      >
        {currentLanguage?.flag && (
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            width={20}
            height={14}
            className="rounded-sm"
          />
        )}
        <span className="text-sm font-medium text-gray-700 capitalize">
          {currentLanguage?.code}
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
              className={`flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                language === lang.code
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700"
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={14}
                className="rounded-sm"
              />
              <span className="text-sm font-medium">{lang.name}</span>
              {language === lang.code && (
                <CheckIcon className="w-4 h-4 ml-auto text-green-500" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay pour fermer en cliquant à l'extérieur */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={closeDropdown} />}
    </div>
  );
};
