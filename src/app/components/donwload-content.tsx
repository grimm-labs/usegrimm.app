"use client";

import { QRCodeSVG } from "qrcode.react";

import React from "react";
import { FaGooglePlay, FaAppStoreIos, FaDownload } from "react-icons/fa";

export const DownloadContent = () => {
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
            <QRCodeSVG size={200} value="https://onelink.to/455hxv" />
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

          <button className="w-full flex items-center justify-center gap-3 from-purple-600 to-blue-500 text-white rounded-lg px-6 py-3 hover:opacity-90 transition-opacity">
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
