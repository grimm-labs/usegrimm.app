"use client";

import React from "react";

export const BetaBadge: React.FC = () => {
  return (
    <>
      {/* Version mobile - Bande horizontale */}
      <div className="md:hidden w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 px-4 text-sm font-bold shadow-lg">
        BETA
      </div>

      {/* Version desktop - Badge en diagonale */}
      <div className="hidden md:block fixed top-4 -right-5 z-50 pointer-events-none">
        <div className="relative w-[150px]">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-6 shadow-lg text-center">
            <span>BETA</span>
          </div>
        </div>
      </div>
    </>
  );
};
