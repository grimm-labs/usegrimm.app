"use client";

import Link from "next/link";
import { Modal } from "./modal";
import { Donation } from "./donation";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import googlePlayButton from "@/app/assets/googlePlay.png";

export default function Footer() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      {isDonationModalOpen && (
        <Modal
          isOpen={isDonationModalOpen}
          content={<Donation />}
          onClose={() => setIsDonationModalOpen(false)}
        />
      )}

      <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <Link href={"/"} className="block text-green-600">
                    <span className="sr-only">Home</span>
                    <Image src={logo} alt="Grimm App" style={{ width: 45 }} />
                  </Link>
                </div>
                <span className="text-xl font-bold text-gray-800">
                  Grimm App
                </span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                The best mobile Bitcoin wallet of all time
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://x.com/useGrimmApp"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://linkedin.com/company/grimm-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/grimm-labs/usegrimm.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-4">Download</h3>
              <a
                href="https://play.google.com/store/apps/details?id=com.grimm.app"
                target="_blank"
                rel="noreferrer"
                className="inline-block mb-3"
              >
                <Image
                  src={googlePlayButton}
                  alt="Get it on Google Play"
                  className="h-12 w-auto hover:opacity-90 transition-opacity"
                  width={180}
                  height={54}
                />
              </a>
              <p className="text-sm text-gray-500">Available on Android</p>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left order-2 md:order-1">
                &copy; {new Date().getFullYear()} Grimm App. All rights
                reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm order-1 md:order-2 mb-4 md:mb-0">
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  Privacy
                </Link>
                <a
                  href="mailto:contact@usegrimm.app"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
