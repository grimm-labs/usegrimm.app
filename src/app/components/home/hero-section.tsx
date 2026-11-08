"use client";
import React from "react";
import Image from "next/image";

import phoneImage from "@/app/assets/screenshot.png";
import googlePlayButton from "@/app/assets/GetItOnGooglePlay.png";
import appStoreButton from "@/app/assets/appStore_resized.png";
import { useTranslations } from "@/hooks/useTranslations";
import { BitcoinPrice } from "../bitcoin-price";

export const HeroSection = () => {
  const t = useTranslations();

  return (
    <section className="pt-4 pb-8 md:py-12">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 space-y-5 md:space-y-6 text-center lg:text-left">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>
          <p className="text-base md:text-lg text-gray-500">
            {t("hero.startUsing")}
          </p>
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.grimm.labs.app"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Image
                src={googlePlayButton}
                alt="Get it on Google Play"
                className="w-full max-w-[180px] sm:max-w-[210px] hover:opacity-90 transition-opacity cursor-pointer"
                width={180}
                height={78}
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/grimm-app-bitcoin-wallet/id6754340143"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Image
                src={appStoreButton}
                alt="Download on the App Store"
                className="w-full max-w-[180px] sm:max-w-[210px] hover:opacity-90 transition-opacity cursor-pointer"
                width={180}
                height={78}
              />
            </a>
          </div>
          {/* Bitcoin Price Widget */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <BitcoinPrice />
          </div>
        </div>
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] flex-shrink-0 mx-auto lg:mx-0 mt-6 lg:mt-0">
          <div className="relative z-10 rounded-3xl">
            <div className="relative w-full max-h-[420px] sm:max-h-[450px] md:max-h-[480px] transition-all duration-500 ease-in-out">
              <Image
                src={phoneImage}
                alt="Grimm App mobile interface"
                className="object-contain w-full h-auto max-h-[420px] sm:max-h-[450px] md:max-h-[480px]"
                width={1419}
                height={2796}
                priority
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-5 -right-5 w-40 h-40 md:w-52 md:h-52 bg-green-600/10 rounded-full blur-lg animate-pulse-slow" />
            <div className="absolute -bottom-5 -left-5 w-40 h-40 md:w-52 md:h-52 bg-orange-600/10 rounded-full blur-lg animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-64 md:h-64 border-2 border-green-600/90 rounded-full animate-ping-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 border border-green-600/80 rounded-full animate-ping-slower" />
          </div>
        </div>
      </div>
    </section>
  );
};
