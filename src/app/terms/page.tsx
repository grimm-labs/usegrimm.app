"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";
import { useTranslations } from "@/hooks/useTranslations";

export default function Terms() {
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
            {t("terms.title")}
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">{t("terms.lastUpdated")}</p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
          <section className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.welcome.part1")}{" "}
              <strong className="text-green-600 font-semibold">
                Grimm App
              </strong>
              {t("terms.sections.welcome.part2")}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.acceptance")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.content.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.content.part1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.content.part2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.links.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.links.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.acceptableUse.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.acceptableUse.part1")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              {t<string[]>("terms.sections.acceptableUse.list").map(
                (item: string, index: number) => (
                  <li key={index} className="leading-relaxed">
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.acceptableUse.part2")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.intellectualProperty.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.intellectualProperty.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.security.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.security.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.disclaimer.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.disclaimer.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.liability.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.liability.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.indemnification.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.indemnification.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.changes.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.changes.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.governingLaw.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.governingLaw.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.termination.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.termination.description")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-2 h-6 bg-green-600 mr-3 rounded-full"></div>
              {t("terms.sections.contact.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("terms.sections.contact.description")}{" "}
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
