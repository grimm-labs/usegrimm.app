"use client";

import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { HeroSection } from "./components/home/hero-section";
import { FeaturesSection } from "./components/home/features-section";
import { FAQPreview } from "./components/home/faq-preview";
import { motion } from "framer-motion";
import { AnimatedSection } from "./components/home/animated-section";
import { Modal } from "./components/modal";
import { DownloadContent } from "./components/donwload-content";
import { useTranslations } from "@/hooks/useTranslations";

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const t = useTranslations();

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <div className="flex flex-col justify-between min-h-screen relative overflow-x-hidden">
      <Header onDownloadClick={openDownloadModal} />

      <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Preview */}
        <FAQPreview />

        {/* CTA Final */}
        <AnimatedSection delay={0.3}>
          <section className="py-12 md:py-20 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 bg-green-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-36 h-36 md:w-48 md:h-48 bg-orange-600/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("cta.subtitle")}
              </motion.p>

              <button
                onClick={openDownloadModal}
                className="bg-green-600 px-6 py-2 rounded-full text-white transition-colors hover:bg-green-700 font-medium"
              >
                {t("common.download")}
              </button>
            </div>
          </section>
        </AnimatedSection>
      </main>

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
