"use client";

import { QRCodeSVG } from "qrcode.react";
import React from "react";
import Image from "next/image";
import googlePlayButton from "@/app/assets/googlePlay.png";
import appStoreButton from "@/app/assets/appStore.png";
import grimmLogo from "@/app/assets/logo_1.png";
import { useTranslations } from "@/hooks/useTranslations";

export const DownloadContent = () => {
  const t = useTranslations();

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          {t("download.title")}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          {t("download.subtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
        {/* QR Code Section */}
        <div className="flex-1 flex flex-col items-center order-2 sm:order-1">
          <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 relative">
            <QRCodeSVG
              size={160}
              value="https://onelink.to/4xc8vz"
              className="mx-auto"
              imageSettings={{
                src: grimmLogo.src,
                height: 28,
                width: 28,
                excavate: true,
              }}
            />
          </div>
          <p className="text-gray-500 text-xs mt-2 text-center max-w-xs">
            {t("download.scan")}
          </p>
        </div>

        {/* Download Options */}
        <div className="flex-1 space-y-3 sm:space-y-4 w-full order-1 sm:order-2">
          <div className="space-y-2 sm:space-y-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.grimm.labs.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Image
                src={googlePlayButton}
                alt="Get it on Google Play"
                className="w-full max-w-[180px] sm:max-w-[210px] mx-auto h-auto hover:opacity-90 transition-opacity"
                width={180}
                height={78}
              />
            </a>

            <a
              href="https://testflight.apple.com/join/kK732x9j"
              className="block transition-transform hover:scale-[1.02] active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={appStoreButton}
                alt="Download on the App Store"
                className="w-full max-w-[180px] sm:max-w-[210px] mx-auto h-auto hover:opacity-90 transition-opacity"
                width={180}
                height={78}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100"></div>

      {/* Bottom Text */}
      <div className="mt-3 text-center text-gray-400 text-xs">
        {t("download.join")}
      </div>
    </div>
  );
};
