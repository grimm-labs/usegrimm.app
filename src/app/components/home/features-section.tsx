"use client";

import React from "react";
import { FeatureCard } from "./feature-card";
import Image from "next/image";
import {
  AnimatedSection,
  AnimatedItem,
  StaggerContainer,
} from "./animated-section";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

const FeatureIcon = ({ name }: { name: string }) => (
  <Image src={`/icons/features/${name}.svg`} alt="" width={28} height={28} />
);

export const FeaturesSection = () => {
  const t = useTranslations();

  const features = [
    {
      title: t("features.lightning.title"),
      description: t("features.lightning.description"),
      icon: <FeatureIcon name="instant-payments" />,
    },
    {
      title: t("features.selfcustody.title"),
      description: t("features.selfcustody.description"),
      icon: <FeatureIcon name="self-custody" />,
    },
    {
      title: t("features.privacy.title"),
      description: t("features.privacy.description"),
      icon: <FeatureIcon name="privacy" />,
    },
    {
      title: t("features.fees.title"),
      description: t("features.fees.description"),
      icon: <FeatureIcon name="low-fees" />,
    },
    {
      title: t("features.backup.title"),
      description: t("features.backup.description"),
      icon: <FeatureIcon name="recovery-phrase" />,
    },
    {
      title: t("features.integration.title"),
      description: t("features.integration.description"),
      icon: <FeatureIcon name="integration" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("features.title")}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("features.subtitle")}
            </motion.p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={StaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={AnimatedItem}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
