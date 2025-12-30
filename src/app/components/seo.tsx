"use client";

import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export const SEO: React.FC<SEOProps> = ({
  title = "Grimm App - Your Bitcoin Superapp",
  description = "Grimm App is a next-generation self-custodial Bitcoin Superapp, designed for seamless everyday payments via the Lightning Network.",
  canonicalUrl,
  ogImage = "https://usegrimm.app/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  article,
}) => {
  const pathname = usePathname();
  const siteUrl = "https://usegrimm.app";
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${pathname}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Titre et description de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Grimm App" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@useGrimmApp" />
      <meta name="twitter:creator" content="@useGrimmApp" />
      
      {/* Balises spécifiques aux articles */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Balises supplémentaires pour SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Balises de langue */}
      <meta name="language" content="English, French" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Balises de géolocalisation */}
      <meta name="geo.region" content="CM" />
      <meta name="geo.placename" content="Yaoundé" />
      <meta name="geo.position" content="3.848;11.502" />
      <meta name="ICBM" content="3.848, 11.502" />
      
      {/* Balises pour les applications mobiles */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Grimm App" />
      
      {/* Balises pour les thèmes de couleur */}
      <meta name="theme-color" content="#16a34a" />
      <meta name="msapplication-TileColor" content="#16a34a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Balises pour les flux RSS */}
      <link rel="alternate" type="application/rss+xml" title="Grimm App Blog RSS" href="/blog/rss.xml" />
      
      {/* Balises pour les favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};