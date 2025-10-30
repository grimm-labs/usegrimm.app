"use client";

import React, { useState } from "react";
import { FAQItem } from "../components/faq-item";
import Footer from "../components/footer";
import Header from "../components/header";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";
import { useTranslations } from "@/hooks/useTranslations";

interface FAQData {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const t = useTranslations();

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  const faqItems = t<FAQData[]>("faqPage.questions") as FAQData[];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header onDownloadClick={openDownloadModal} />

      <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("faqPage.title") as string}
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            {t("faqPage.subtitle") as string}
          </p>
        </div>

        <div className="mb-8">
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
                  {t("faqPage.warning.title")}
                </h3>
                <p className="text-orange-700 text-sm mb-3">
                  {t("faqPage.warning.description")}
                </p>
                <p className="text-orange-700 text-sm">
                  {t("faqPage.warning.advice")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="space-y-6">
            {Array.isArray(faqItems) &&
              faqItems.map((item: FAQData, index: number) => (
                <div
                  key={index}
                  className="border-l-4 border-green-600 pl-4 md:pl-6 bg-white rounded-r-lg transition-all duration-200 hover:shadow-md"
                >
                  <FAQItem title={item.question} content={item.answer} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
      {/* Modal au niveau racine */}
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
