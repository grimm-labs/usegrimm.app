"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  AnimatedItem,
  StaggerContainer,
} from "./animated-section";

export const FAQPreview = () => {
  const faqs = [
    {
      question: "What is a self-custodial wallet ?",
      answer:
        "A self-custodial wallet is a type of wallet where you have full control and ownership of your private keys. This means you are the only one with access to your funds, without relying on a third party. It’s crucial to securely back up your private keys to avoid losing access to your Bitcoin.",
    },
    {
      question: "Can I buy and sell Bitcoin directly through the app ?",
      answer:
        "Yes! Our app allows you to buy and sell Bitcoin directly, provided you complete a Know Your Customer (KYC) identity verification process. This ensures compliance with local regulations and the security of your transactions.",
    },
    {
      question: "Is my personal information secure ?",
      answer:
        "Absolutely! We prioritize the privacy and security of your data. All personal information is securely stored and never shared with third parties without your explicit consent.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 bg-green-600/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-orange-600/10 rounded-full blur-xl" />

      <div className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything you need to know about Grimm App
            </motion.p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={StaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={AnimatedItem}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <motion.h3
                className="text-xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                {faq.question}
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <Link href="/faq">
              <motion.button
                className="bg-gray-800 px-8 py-4 rounded-full text-white font-semibold hover:bg-gray-900 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See all questions
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
