"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import logo from "@/app/assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={"/"} className="block text-green-600">
              <span className="sr-only">Home</span>
              <Image
                src={logo}
                alt="Grimm App"
                style={{ width: 50 }}
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://tally.so/r/3lYBrV"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <button className="bg-green-600 px-3 py-2 rounded-full text-white text-sm transition-colors transition-all hover:bg-green-700">
                Join waitlist
              </button>
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close Menu" : "Open Menu"}
              </span>
              {isMenuOpen ? (
                /* Icône Croix */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Icône Hamburger */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 right-0 z-50 w-full border-t border-gray-200
            md:static md:block md:border-0 md:w-auto`}
          >
            <ul
              className="
                flex 
                flex-col items-center justify-center text-center
                p-4 
                md:flex-row md:items-center md:justify-start md:gap-6 md:p-0 
                text-sm
              "
            >
              <li>
                <Link
                  href="/faq"
                  className="block px-2 py-1 text-gray-500 transition hover:opacity-75"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com/useGrimmApp"
                  target="_blank"
                  className="block px-2 py-1 text-gray-500 transition hover:opacity-75"
                  rel="noreferrer"
                >
                  X (Formerly Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/grimm-app"
                  target="_blank"
                  className="block px-2 py-1 text-gray-500 transition hover:opacity-75"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  href="https://tally.so/r/3lYBrV"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-2 py-1"
                >
                  <button className="bg-green-600 px-3 py-2 rounded-full text-white transition-colors transition-all hover:bg-green-700 w-full md:w-auto">
                    Join waitlist
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
