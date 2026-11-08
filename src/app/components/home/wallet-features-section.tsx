"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  AnimatedItem,
  StaggerContainer,
} from "./animated-section";
import { useTranslations } from "@/hooks/useTranslations";

// Features listed in the mobile app README (grimm-labs/grimm-mobile-app),
// grouped by theme. Icons live in public/icons/features.
const FEATURE_GROUPS = [
  {
    key: "payments",
    items: [
      { key: "instantPayments", icon: "instant-payments" },
      { key: "lowFees", icon: "low-fees" },
      { key: "qrCode", icon: "qr-code" },
      { key: "units", icon: "bitcoin-units" },
    ],
  },
  {
    key: "security",
    items: [
      { key: "selfCustody", icon: "self-custody" },
      { key: "secureStorage", icon: "secure-storage" },
      { key: "recoveryPhrase", icon: "recovery-phrase" },
      { key: "openSource", icon: "open-source" },
    ],
  },
  {
    key: "everyday",
    items: [
      { key: "history", icon: "transaction-history" },
      { key: "balance", icon: "realtime-balance" },
      { key: "privacy", icon: "privacy" },
      { key: "simple", icon: "simple-interface" },
    ],
  },
] as const;

export const WalletFeaturesSection = () => {
  const t = useTranslations();

  return (
    <section
      id="wallet-features"
      className="py-12 md:py-16 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-grimm/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-grimm-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-grimm/10 px-4 py-1.5 text-sm font-medium text-grimm mb-4">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-grimm-accent" />
              {t("walletFeatures.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-w-3xl mx-auto">
              {t("walletFeatures.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("walletFeatures.subtitle")}
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={StaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FEATURE_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.key}
              variants={AnimatedItem}
              className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-gray-100">
                <span className="text-sm font-bold text-grimm-accent tabular-nums">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-grimm">
                  {t(`walletFeatures.groups.${group.key}`)}
                </h3>
              </div>

              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {group.items.map((item) => (
                  <li key={item.key} className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-grimm-light">
                      <Image
                        src={`/icons/features/${item.icon}.svg`}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t(`walletFeatures.items.${item.key}.title`)}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {t(`walletFeatures.items.${item.key}.description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
