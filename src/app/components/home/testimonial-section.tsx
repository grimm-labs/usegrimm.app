"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";

export const TestimonialSection = () => {
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
            Suitable for beginners and experts alike.
          </motion.h2>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              &ldquo;I built this wallet so that it would offer all the advanced
              features I want, but also that my mom could use it without being
              confused.&rdquo;
            </blockquote>
            <footer className="text-xl font-semibold text-gray-600">
              — JONATHAN NENBA, founder of Grimm App
            </footer>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Multi-network compatibility
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Transact seamlessly on the <strong>Bitcoin</strong> Network,{" "}
                <strong>Lightning</strong> Network and <strong>Liquid</strong>{" "}
                Network. Using non-custodial atomic-swap technologies, you can
                move funds between networks anonymously and securely.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Native integration with the Grimm App exchange
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Connect your Grimm App account to buy bitcoin, sell bitcoin and
                make flat payments directly with your self-custodial wallet.
                This is optional, and you don&apos;t have to link an account if
                you don&apos;t want to. It&apos;s so easy, it feels like using a
                custodial app!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
