"use client";

import React from "react";
import { BlogPost } from "@/types/blog";

interface JsonLdProps {
  post?: BlogPost;
  url: string;
  type?: "article" | "website" | "organization";
}

export const JsonLd: React.FC<JsonLdProps> = ({ post, url, type = "website" }) => {
  let jsonLd = {};

  if (type === "article" && post) {
    // Schéma pour les articles de blog
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": post.coverImage 
        ? `https://usegrimm.app${post.coverImage}`
        : "https://usegrimm.app/og-image.png",
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": "https://usegrimm.app",
        "sameAs": [
          "https://twitter.com/useGrimmApp",
          "https://github.com/grimm-labs"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Grimm Technologies",
        "logo": {
          "@type": "ImageObject",
          "url": "https://usegrimm.app/logo.png",
          "width": 200,
          "height": 60
        },
        "url": "https://usegrimm.app",
        "sameAs": [
          "https://twitter.com/useGrimmApp",
          "https://www.linkedin.com/company/grimm-technologies/",
          "https://github.com/grimm-labs"
        ]
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "url": url,
      "keywords": post.tags?.join(", ") || "Bitcoin, Lightning Network, Cryptocurrency, Self-custody, Privacy",
      "articleBody": post.content.replace(/<[^>]*>/g, "").substring(0, 5000),
      "inLanguage": "fr-FR",
      "wordCount": post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
      "commentCount": 0,
      "comment": []
    };
  } else if (type === "website") {
    // Schéma pour le site web principal
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Grimm App",
      "alternateName": "Grimm Bitcoin Superapp",
      "url": "https://usegrimm.app",
      "description": "Next-generation self-custodial Bitcoin Superapp for seamless everyday payments via the Lightning Network.",
      "publisher": {
        "@type": "Organization",
        "name": "Grimm Technologies",
        "logo": {
          "@type": "ImageObject",
          "url": "https://usegrimm.app/logo.png",
          "width": 200,
          "height": 60
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://usegrimm.app/blog?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  } else if (type === "organization") {
    // Schéma pour l'organisation
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Grimm Technologies",
      "url": "https://usegrimm.app",
      "logo": "https://usegrimm.app/logo.png",
      "description": "Building self-custodial Bitcoin solutions for everyday use.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Cameroon",
        "addressLocality": "Yaoundé"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@usegrimm.app",
        "availableLanguage": ["English", "French"]
      },
      "sameAs": [
        "https://twitter.com/useGrimmApp",
        "https://www.linkedin.com/company/grimm-technologies/",
        "https://github.com/grimm-labs"
      ]
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key={`json-ld-${type}`}
    />
  );
};