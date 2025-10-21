"use client";

import React from "react";
import { FeatureCard } from "./feature-card";
import {
  FaMoneyBillWave,
  FaCloudUploadAlt,
  FaGlobe,
  FaHeadset,
  FaShieldAlt,
  FaServer,
  FaBolt,
  FaInfoCircle,
  FaCode,
  FaUserSecret,
  FaMask,
  FaTags,
  FaRedoAlt,
  FaExchangeAlt,
  FaEye,
  FaLock,
} from "react-icons/fa";
import {
  AnimatedSection,
  AnimatedItem,
  StaggerContainer,
} from "./animated-section";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Instant and cheap lightning payments",
      description:
        "Lightning payments without liquidity and channel management. Send and receive payments seamlessly with one click.",
      icon: <FaBolt size={24} />,
    },
    {
      title: "Automatic cross-network swaps",
      description:
        "Seamlessly move funds between Bitcoin, Lightning, and Liquid networks using non-custodial atomic swaps.",
      icon: <FaExchangeAlt size={24} />,
    },
    {
      title: "Confidential transactions",
      description:
        "Enhanced privacy features to protect your financial information and transaction details.",
      icon: <FaUserSecret size={24} />,
    },
    {
      title: "Smart fee management",
      description:
        "Customizable mempool-based fee calculations and RBF technologies ensure you never overpay mining fees.",
      icon: <FaMoneyBillWave size={24} />,
    },
    {
      title: "Easy and secure encrypted cloud backup",
      description:
        "Secure your wallet with encrypted cloud backups that protect your funds while ensuring easy recovery.",
      icon: <FaCloudUploadAlt size={24} />,
    },
    {
      title: "Watch-only hardware wallets",
      description:
        "Receive to any offline wallet, monitor balances and transaction history of your hardware wallets.",
      icon: <FaEye size={24} />,
    },
    {
      title: "Multi-currency support",
      description:
        "Support for multiple currencies and SATS/BTC display options for international users.",
      icon: <FaGlobe size={24} />,
    },
    {
      title: "24/7 Customer support",
      description:
        "Get help from our dedicated support team through multiple channels including Telegram.",
      icon: <FaHeadset size={24} />,
    },
    {
      title: "Advanced security features",
      description:
        "Secure storage for private keys, open-source crypto libraries, screenshot prevention and secure in-app keyboard.",
      icon: <FaLock size={24} />,
    },
    {
      title: "Connect to your own node",
      description:
        "Maintain self-sovereignty by connecting to your own Bitcoin server for direct access to the Bitcoin network.",
      icon: <FaServer size={24} />,
    },
    {
      title: "Cold storage integration",
      description:
        "Secure integration with cold storage solutions without putting funds at risk.",
      icon: <FaShieldAlt size={24} />,
    },
    {
      title: "Advanced wallet details",
      description:
        "View detailed descriptions, xpubs and derivation paths of your wallet for advanced users.",
      icon: <FaInfoCircle size={24} />,
    },
    {
      title: "Fully free and open-source",
      description:
        "All our software is public and reproducible. No backdoors, no data leaks. Fully transparent.",
      icon: <FaCode size={24} />,
    },
    {
      title: "Privacy first approach",
      description:
        "No KYC, email or phone required, no data collection, no push notifications, no IP tracking. Privacy by default.",
      icon: <FaMask size={24} />,
    },
    {
      title: "Coin control and labelling",
      description:
        "Smart labelling and coin control to protect privacy and manage UTXOs effectively.",
      icon: <FaTags size={24} />,
    },
    {
      title: "Securely recover from backup",
      description:
        "Import backups, discover funds and sweep them to a new wallet with complete security.",
      icon: <FaRedoAlt size={24} />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
              Wallet Features
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Many said it couldn't be done, but we've achieved our impossible
              dream: the perfect Bitcoin wallet, for anyone.
            </motion.p>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
