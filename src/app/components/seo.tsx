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

const getAbsoluteUrl = (url: string | undefined, siteUrl: string): string => {
  if (!url) return `${siteUrl}/og-image.png`;
  if (url.startsWith('http')) return url;
  if (url.startsWith('/')) return `${siteUrl}${url}`;
  return `${siteUrl}/${url}`;
};

export const SEO: React.FC<SEOProps> = ({
  title = "Grimm App - Your Bitcoin Superapp",
  description = "Grimm App is a next-generation self-custodial Bitcoin Superapp, designed for seamless everyday payments via the Lightning Network.",
  canonicalUrl,
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  article,
}) => {
  const pathname = usePathname();
  const siteUrl = "https://usegrimm.app";
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${pathname}`;
  
  const fullOgImage = getAbsoluteUrl(ogImage, siteUrl);
  
  // Calcul de la longueur du titre pour optimisation
  const titleLength = title.length;
  const optimalTitleLength = titleLength >= 50 && titleLength <= 60;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Grimm App" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@useGrimmApp" />
      <meta name="twitter:creator" content="@useGrimmApp" />
      
      {article && ogType === "article" && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      <meta name="robots" content="index, follow" />
      {!optimalTitleLength && (
        <meta name="title-length" content={`${titleLength} (${titleLength < 50 ? 'trop court' : 'trop long'})`} />
      )}
      
      {ogType === "article" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": title,
              "description": description,
              "image": fullOgImage,
              "datePublished": article?.publishedTime,
              "dateModified": article?.modifiedTime,
              "author": {
                "@type": "Person",
                "name": article?.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Grimm App",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://usegrimm.app/logo.png"
                }
              }
            })
          }}
        />
      )}
    </Head>
  );
};