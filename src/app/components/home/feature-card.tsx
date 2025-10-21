"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="p-4 bg-green-100 rounded-xl text-green-600"
          whileHover={{
            rotate: 5,
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
    </motion.div>
  );
};
