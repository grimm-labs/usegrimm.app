"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { useTranslations } from "@/hooks/useTranslations";

export const TestimonialSection = () => {
  const t = useTranslations();

  return (
    <AnimatedSection delay={0.2}>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl" />

        <div className="absolute top-10 right-10 w-20 h-20 bg-green-600/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-orange-600/10 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("testimonial.title")}
          </motion.h2>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              {t("testimonial.quote")}
            </blockquote>
            <footer className="text-base text-gray-600">
              {t("testimonial.author")}
            </footer>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};
