import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Configuration de la police Satoshi
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Grimm App - Your Bitcoin Superapp",
  description:
    "Grimm App is a next-generation self-custodial Bitcoin Superapp, designed for seamless everyday payments via the Lightning Network.",
  openGraph: {
    title: "Grimm App - Your Bitcoin Superapp",
    description:
      "Grimm App is a next-generation self-custodial Bitcoin Superapp, designed for seamless everyday payments via the Lightning Network.",
    url: "https://usegrimm.app",
    siteName: "Grimm App",
    images: [
      {
        url: "https://usegrimm.app/og-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://usegrimm.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grimm App - Your Bitcoin Superapp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <LanguageProvider>
          <div className="main-page">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
