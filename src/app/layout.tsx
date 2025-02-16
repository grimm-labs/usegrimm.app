import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grimm App - Your Bitcoin Superapp",
  description: "Grimm App is a next-generation self-custodial Bitcoin Superapp, designed for seamless everyday payments via the Lightning Network.",
  openGraph: {
    title: "Grimm App - Your Bitcoin Superapp",
    description: "Grimm App is a next-generation self-custodial Bitcoin Superapp, designed for seamless everyday payments via the Lightning Network.",
    url: 'https://usegrimm.app',
    siteName: 'Grimm App',
    images: [
      {
        url: 'https://usegrimm.app/og-image.png',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://usegrimm.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grimm App - Your Bitcoin Superapp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="main-page">
          {children}
        </div>
      </body>
    </html>
  );
}
