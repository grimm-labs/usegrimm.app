"use client"

import Link from "next/link";
import { Modal } from "./modal";
import { Donation } from "./donation";
import { useState } from "react";

export default function Footer() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <footer className="border-t border-gray-100">
      {isDonationModalOpen && (
        <Modal
          isOpen={isDonationModalOpen}
          content={<Donation />}
          onClose={() => setIsDonationModalOpen(false)}
        />
      )}

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* 
          On empile d'abord la liste <ul>, puis le paragraphe <p> dans le code.
          Ensuite, on ajuste leur ordre en CSS avec les classes `order-*`.
        */}
        <div className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between">
          {/* --- LISTE DE LIENS --- */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm order-1 sm:order-2">
            <li>
              <Link href="/terms" className="text-gray-500 transition hover:opacity-75">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-500 transition hover:opacity-75">
                Privacy
              </Link>
            </li>
            <li>
              <a href="mailto:contact@usegrimm.app" className="text-gray-500 transition hover:opacity-75">
                Contact Us
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="text-gray-500 transition hover:opacity-75"
              >
                Donate
              </button>
            </li>
          </ul>

          {/* --- PARAGRAPHE COPYRIGHT --- */}
          <p className="text-sm text-gray-500 text-center sm:text-left order-2 sm:order-1">
            &copy; 2022. Grimm Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
