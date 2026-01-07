"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import logo from "@/app/assets/logo_19.png";
import { useTranslations } from "@/hooks/useTranslations";

interface DownloadInviteProps {
  onDownloadClick?: () => void;
}

export const DownloadInvite: React.FC<DownloadInviteProps> = ({ 
  onDownloadClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations();

  const downloadInviteTranslations = t("downloadInvite") as {
    title: string;
    description: string;
    cta: string;
    features: {
      privacy: string;
      security: string;
      control: string;
      freedom: string;
    };
  };

  const handleDownloadClick = () => {
    if (onDownloadClick) {
      onDownloadClick();
    } else {
      console.log("Download clicked");
    }
  };

  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Decorative elements */}
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-green-600/10 rounded-full blur-lg" />
      <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-orange-600/10 rounded-full blur-lg" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Logo and Text Section - Vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
          {/* Logo with subtle animation - Centered and above on mobile */}
          <div className="relative mb-6 lg:mb-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl blur-md"></div>
            <div className="relative bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <Image 
                src={logo} 
                alt="Grimm App" 
                width={150}
                height={150}
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Text Content - Centered on mobile, left aligned on desktop */}
          <div className="max-w-xl text-center lg:text-left w-full lg:w-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {downloadInviteTranslations.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 lg:mb-0">
              {downloadInviteTranslations.description}
            </p>
            
            {/* Feature Dots - Centered on mobile, left aligned on desktop */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <div className="flex items-center gap-2 group/feature">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                <span className="text-xs font-medium text-gray-700 group-hover/feature:text-green-600 transition-colors duration-300">
                  {downloadInviteTranslations.features.privacy}
                </span>
              </div>
              <div className="flex items-center gap-2 group/feature">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                <span className="text-xs font-medium text-gray-700 group-hover/feature:text-green-600 transition-colors duration-300">
                  {downloadInviteTranslations.features.security}
                </span>
              </div>
              <div className="flex items-center gap-2 group/feature">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                <span className="text-xs font-medium text-gray-700 group-hover/feature:text-green-600 transition-colors duration-300">
                  {downloadInviteTranslations.features.control}
                </span>
              </div>
              <div className="flex items-center gap-2 group/feature">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                <span className="text-xs font-medium text-gray-700 group-hover/feature:text-green-600 transition-colors duration-300">
                  {downloadInviteTranslations.features.freedom}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Button - Centered on mobile, right on desktop */}
        <button
          onClick={handleDownloadClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0 flex items-center gap-3 group overflow-hidden w-full lg:w-auto justify-center lg:justify-start"
        >
          {/* Background animation effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
          
          {/* Icon with bounce animation */}
          <div className="relative z-10">
            <FaDownload className={`text-lg transition-all duration-300 ${isHovered ? 'scale-110 -translate-y-0.5' : ''}`} />
          </div>
          
          {/* Text */}
          <span className="relative z-10 font-semibold">{downloadInviteTranslations.cta}</span>
          
          {/* Arrow animation on hover */}
          <svg 
            className={`w-4 h-4 relative z-10 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-1'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};
