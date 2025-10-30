"use client";

import Link from "next/link";
import { Modal } from "./modal";
import { Donation } from "./donation";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "@/app/assets/logo_19.png";
import Image from "next/image";
import googlePlayButton from "@/app/assets/googlePlay.png";
import appSToreButton from "@/app/assets/appStore.png";
import { useTranslations } from "@/hooks/useTranslations";
import { LanguageSwitcher } from "./language-switcher";

export default function Footer() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      {isDonationModalOpen && (
        <Modal
          isOpen={isDonationModalOpen}
          content={<Donation />}
          onClose={() => setIsDonationModalOpen(false)}
        />
      )}

      <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <Link href={"/"} className="block text-green-600">
                    <span className="sr-only">{t("common.home")}</span>
                    <Image src={logo} alt="Grimm Technologies" style={{ width: 150 }} />
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                {t("common.motto")}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://x.com/useGrimmApp"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/grimm-technologies/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/grimm-labs/grimm-mobile-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-gray-800 mb-4">
                {t("common.download")}
              </h3>
              <div className="flex flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.grimm.labs.app"
                  className="block"
                  target="_blank"
                >
                  <Image
                    src={googlePlayButton}
                    alt="Get it on Google Play"
                    className="w-full max-w-[180px] sm:max-w-[210px] hover:opacity-90 transition-opacity cursor-pointer"
                    width={180}
                    height={78}
                  />
                </a>
                <a
                  href="https://testflight.apple.com/join/kK732x9j"
                  className="block"
                  target="_blank"
                >
                  <Image
                    src={appSToreButton}
                    alt="Get it on App Store"
                    className="w-full max-w-[180px] sm:max-w-[210px] hover:opacity-90 transition-opacity cursor-pointer"
                    width={180}
                    height={78}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-gray-800 mb-4">
                {t("common.language")}
              </h3>
              <LanguageSwitcher />
            </div>
          </div>

          <div className="border-t border-gray-200 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left order-2 md:order-1">
                &copy; {new Date().getFullYear()} Grimm Technologies.{" "}
                {t("common.allRightsReserved")}
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm order-1 md:order-2 mb-4 md:mb-0">
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  {t("common.terms")}
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  {t("common.privacy")}
                </Link>
                <Link
                  href="/support"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  {t("common.support")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
