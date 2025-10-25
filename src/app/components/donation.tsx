"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useTranslations } from "@/hooks/useTranslations";

export const Donation = () => {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 text-center max-w-md mx-auto">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {t("donation.title")}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6">{t("donation.description")}</p>

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
      <p className="text-xs text-gray-500">{t("donation.footer")}</p>
    </div>
  );
};
