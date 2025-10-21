"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";

export const Donation = () => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 text-center max-w-md mx-auto">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Support Grimm App with a Bitcoin Donation 💛
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6">
        Support Grimm App by donating Bitcoin — scan the QR code or copy the
        address below.
      </p>

      {/* QR Code */}
      <div className="flex justify-center items-center mb-6">
        <div className="p-4 border-2 border-green-500 rounded-md">
          <QRCodeSVG
            size={200}
            value="bc1qh5flgxstwg07mcuphxw0g8avnr2ecmtx4susyg"
          />
        </div>
      </div>

      {/* Bitcoin Address */}
      <div
        className="bg-green-500 text-white text-sm font-mono px-4 py-2 rounded-md mb-4 cursor-pointer hover:bg-green-600"
        onClick={() =>
          navigator.clipboard.writeText(
            "bc1qh5flgxstwg07mcuphxw0g8avnr2ecmtx4susyg",
          )
        }
        title="Click to copy"
      >
        bc1qh5flgxstwg07mcuphxw0g8avnr2ecmtx4susyg
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500">
        All donations will be used exclusively for the development and
        improvement of Grimm App. Thank you for your support!
      </p>
    </div>
  );
};
