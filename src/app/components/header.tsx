"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import logo from "@/app/assets/logo_19.png";
import { BetaBadge } from "./beta-badge";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "@/hooks/useTranslations";

interface HeaderProps {
  onDownloadClick: () => void;
}

export default function Header({ onDownloadClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <BetaBadge />

      <header className="bg-transparent backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href={"/"} className="block text-green-600">
                <span className="sr-only">Home</span>
                <Image src={logo} alt="Grimm App" style={{ width: 180 }} />
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  >
                    {t("common.faq")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  >
                    {t("common.support")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://x.com/useGrimmApp"
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                    rel="noreferrer"
                  >
                    {t("header.twitter")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/grimm-app"
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                    rel="noreferrer"
                  >
                    {t("header.linkedin")}
                  </a>
                </li>
                <li>
                  <LanguageSwitcher />
                </li>
                <li>
                  <button
                    onClick={onDownloadClick}
                    className="bg-green-600 px-6 py-2 rounded-full text-white transition-colors hover:bg-green-700 font-medium"
                  >
                    {t("common.download")}
                  </button>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={onDownloadClick}
                className="bg-green-600 px-4 py-2 rounded-full text-white transition-colors hover:bg-green-700 font-medium text-sm"
              >
                {t("common.download")}
              </button>

              <button
                type="button"
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-slideDown">
              <ul className="space-y-4 text-center">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium block py-3 text-lg"
                    onClick={closeMenu}
                  >
                    {t("common.faq")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  >
                    {t("common.support")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://x.com/useGrimmApp"
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium block py-3 text-lg"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    {t("header.twitter")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/grimm-app"
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium block py-3 text-lg"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    {t("header.linkedin")}
                  </a>
                </li>
                <li className="pt-4 border-t border-gray-200">
                  <div className="flex flex-col items-center space-y-4">
                    <span className="text-gray-500 text-sm font-medium mb-2">
                      {t("common.language")}
                    </span>
                    <LanguageSwitcher />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
