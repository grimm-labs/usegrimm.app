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
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center text-gray-600 mb-8">
          {t("faqPage.title") as string}
        </h1>
        <p className="mt-2 text-lg text-center text-gray-600 mb-8">
          {t("faqPage.subtitle") as string}
        </p>
        <div className="flex flex-col">
          {Array.isArray(faqItems) &&
            faqItems.map((item: FAQData, index: number) => (
              <FAQItem
                key={index}
                title={item.question}
                content={item.answer}
              />
            ))}
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
