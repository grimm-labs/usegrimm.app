"use client";

import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { HeroSection } from "./components/home/hero-section";
import { FeaturesSection } from "./components/home/features-section";
import { TestimonialSection } from "./components/home/testimonial-section";
import { FAQPreview } from "./components/home/faq-preview";
import { motion } from "framer-motion";
import { AnimatedSection } from "./components/home/animated-section";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen relative overflow-x-hidden">
      <Header />

      <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonial Section (remplace Quote) */}
        <TestimonialSection />

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
                Engineering Sovereignty
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We build the tools and infrastructure you deserve to buy, sell,
                hold, and spend Bitcoin without compromise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.grimm.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.button
                    className="bg-green-600 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold text-base md:text-lg hover:bg-green-700 transition-colors shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
