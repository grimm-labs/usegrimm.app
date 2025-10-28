"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";
import { useTranslations } from "@/hooks/useTranslations";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Support() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const t = useTranslations();

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header onDownloadClick={openDownloadModal} />
      <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("support.title")}
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">{t("support.subtitle")}</p>
        </div>

        {/* Check FAQ First */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-6">
            {t("support.checkFAQ")}{" "}
            <Link
              href="/faq"
              className="text-green-600 hover:text-green-700 underline font-medium"
            >
              {t("common.faq")}
            </Link>
            {t("support.first")}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
          {/* Warning Section */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  {t("support.warning.title")}
                </h3>
                <p className="text-orange-700 text-sm">
                  {t("support.warning.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Email Support */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <FaEnvelope className="w-5 h-5 text-green-600 mr-3" />
              {t("support.email.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("support.email.description")}
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <a
                href="mailto:support@usegrimm.app"
                className="text-green-600 font-mono text-lg hover:text-green-700 transition-colors"
              >
                support@usegrimm.app
              </a>
            </div>
          </section>

          {/* Stay in Touch */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {t("support.stayInTouch.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reach Out */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {t("support.reachOut.title")}
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://x.com/useGrimmApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://github.com/grimm-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* About Us */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {t("support.aboutUs.title")}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>{t("support.aboutUs.builtBy")}</p>
                  <p>{t("support.aboutUs.sourceCode")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Issues */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <FaGithub className="w-5 h-5 text-green-600 mr-3" />
              {t("support.technical.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("support.technical.description")}
            </p>
          </section>
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {isDownloadModalOpen && (
        <Modal
          isOpen={isDownloadModalOpen}
          content={<DownloadContent />}
          onClose={closeDownloadModal}
          size="large"
        />
      )}
    </div>
  );
}
