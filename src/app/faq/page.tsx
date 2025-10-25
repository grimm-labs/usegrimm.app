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
