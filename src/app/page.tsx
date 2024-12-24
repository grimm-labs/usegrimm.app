"use client"

import React, { useState } from "react";
import Image from 'next/image'
import Footer from "./components/footer";
import Header from "./components/header";
import { Modal } from "./components/modal";
import { DownloadContent } from "./components/donwload-content";

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E...%22)`
      }} />

      <Header />

      <main className="container flex-1 flex mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full md:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-10 max-w-xl">
            {/* <div>
              <span className="inline-flex items-center gap-2 text-orange-600 px-6 py-3 rounded-full font-thin bg-orange-50/80 border border-orange-200 shadow-sm">
                <span className="font-semibold text-sm text-white bg-orange-600 py-1 px-3 sm:px-1 rounded-full">
                  Grimm App
                </span>
                <span className="text-sm">Bitcoin superapp for Financial Freedom</span>
              </span>
            </div> */}

            <h1 className="text-5xl md:text-4xl font-bold leading-tight tracking-tight">
              Bitcoin superapp for Financial Freedom
            </h1>

            <blockquote className="text-lg text-gray-600 italic border-l-4 border-orange-600 pl-6 py-2">
              "Bitcoin is the most important invention in the history of the world since the Internet."
              <footer className="mt-3 font-s  emibold text-gray-800 text-base">
                — Roger Ver • Bitcoin angel investor and evangelist
              </footer>
            </blockquote>

            <div className="space-y-6">
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="bg-green-600 px-8 py-4 rounded-full text-white font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Download Grimm App
              </button>
              <p className="text-sm text-gray-500 pl-2">
                Available on iOS, Android, and as direct APK download
              </p>
            </div>
          </div>

          {/* Right Content - App Screenshot */}
          <div className="flex-1 relative max-w-md">
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <div className="relative w-full max-h-[600px]">
                <Image
                  src={require("@/app/assets/screenshot.png")}
                  alt="Grimm App Interface"
                  className="object-scale-down w-full h-auto"
                  style={{height: 600}}
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-600/10 rounded-full blur-lg" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-green-600/10 rounded-full blur-lg" />
          </div>
        </div>
      </main>

      {isDownloadModalOpen && (
        <Modal
          isOpen={isDownloadModalOpen}
          content={<DownloadContent />}
          onClose={() => setIsDownloadModalOpen(false)}
          size="xl"
        />
      )}

      <Footer />
    </div>
  );
}