"use client"

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import Footer from "./components/footer";
import Header from "./components/header";
import { Modal } from "./components/modal";

import React from "react";
import { FaGooglePlay, FaAppStoreIos, FaDownload } from "react-icons/fa";

const DownloadContent = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section - Text */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get Grimm App Now!
          </h2>
          <p className="text-gray-600 text-lg">
            Scan the QR code to directly install Grimm App on your device.
          </p>
        </div>

        {/* Middle Section - QR Code */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl">
            <QRCodeSVG
              size={200}
              value="https://onelink.to/455hxv"
            />
          </div>
        </div>

        {/* Right Section - Download Options */}
        <div className="flex-1 space-y-4">
          <button className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition-colors">
            <FaGooglePlay className="text-xl" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition-colors">
            <FaAppStoreIos className="text-xl" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg px-6 py-3 hover:opacity-90 transition-opacity">
            <FaDownload className="text-xl" />
            <div className="text-left">
              <div className="text-xs">Download</div>
              <div className="text-sm font-semibold">APK File</div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Text - Optional */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        Join millions of users already enjoying Grimm App
      </div>
    </div>
  );
};

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex flex-col items-center space-y-8">
        <span className="text-orange-600 px-4 py-2 rounded-full font-thin bg-orange-50 border border-orange-600">
          <span className="font-semibold text-sm text-white bg-orange-600 py-1 px-2 rounded-full">Grimm App</span> - The Bitcoin superapp for Financial Freedom
        </span>
        <div className="text-6xl text-center w-2/3 leading-tight">
          The <span className="font-semibold text-green-600">next generation</span> of Bitcoin use cases design from <span className="font-semibold text-orange-600">Africa</span> ✌️
        </div>
        <div>
          <button onClick={() => setIsDownloadModalOpen(true)} className="border bg-green-600 px-4 py-2 rounded-full text-white">Download Grimm App</button>
        </div>
        <span className="text-base font-thin w-1/3 text-center">
          “Bitcoin is the most important invention in the history of the world since the Internet.” — <span><span className="font-semibold">Roger Ver</span> • Bitcoin angel investor, and evangelist</span>
        </span>
      </div>
      {isDownloadModalOpen && <Modal isOpen={isDownloadModalOpen} content={<DownloadContent />} onClose={() => setIsDownloadModalOpen(false)} size="xl" />}
      <Footer />
    </div>
  );
}
