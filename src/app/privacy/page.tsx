"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";
import { useTranslations } from "@/hooks/useTranslations";

export default function Privacy() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const t = useTranslations();

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header onDownloadClick={openDownloadModal} />
      <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("privacyPage.title")}
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">
            {t("privacyPage.lastUpdated")}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.introduction")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.informationCollection.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.informationCollection.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.logData.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.logData.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.cookies.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.cookies.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.security.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.security.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.yourRights.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.yourRights.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.changes.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.changes.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("privacyPage.sections.contact.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("privacyPage.sections.contact.description")}{" "}
              <a
                href="mailto:support@usegrimm.app"
                className="text-green-600 underline hover:text-green-700 transition-colors font-medium"
              >
                support@usegrimm.app
              </a>
              .
            </p>
          </section>
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
