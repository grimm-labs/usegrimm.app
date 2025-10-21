"use client";

import React from "react";
import Image from "next/image";

import phoneImage from "@/app/assets/screenshot.png";
import googlePlayButton from "@/app/assets/googlePlay.png";

export const HeroSection = () => {
  return (
    <section className="pt-4 pb-8 md:py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              The best mobile Bitcoin wallet
              <br />
              <span className="text-green-600">of all time</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Focused on privacy, security and usability for day-to-day Bitcoin
              transactions.
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-500">
            Start using GrimmApp
          </p>

          <div className="space-y-4 flex justify-center lg:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.grimm.app"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Image
                src={googlePlayButton}
                alt="Get it on Google Play"
                className="h-14 md:h-16 w-auto hover:opacity-90 transition-opacity cursor-pointer"
                width={220}
                height={70}
              />
            </a>
          </div>
        </div>

        <div className="flex-1 relative max-w-md mt-6 lg:mt-0">
          <div className="relative z-10 rounded-3xl overflow-hidden">
            <div className="relative w-full max-h-[500px] md:max-h-[600px] transition-all duration-500 ease-in-out">
              <Image
                src={phoneImage}
                alt="Grimm App mobile interface"
                className="object-scale-down w-full h-auto"
                style={{ height: 500 }}
              />
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-48 h-48 md:w-72 md:h-72 bg-green-600/10 rounded-full blur-lg animate-pulse-slow" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 md:w-72 md:h-72 bg-orange-600/10 rounded-full blur-lg animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border-2 border-green-600/90 rounded-full animate-ping-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 border border-green-600/80 rounded-full animate-ping-slower" />
        </div>
      </div>
    </section>
  );
};
