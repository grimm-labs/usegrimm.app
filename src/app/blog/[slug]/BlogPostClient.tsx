"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Modal } from "../../components/modal";
import { DownloadContent } from "../../components/donwload-content";
import { DownloadInvite } from "../../components/download-invite";
import { BlogPost } from "@/types/blog";
import { useTranslations } from "@/hooks/useTranslations";
import { JsonLd } from "../../components/json-ld";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const t = useTranslations();

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    const locale = t("common.language") === "en" ? "en-US" : "fr-FR";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    
    return date.toLocaleDateString(locale, options);
  };

  const blogPostTranslations = t("blogPostPage") as {
    loading: string;
    notFound: {
      title: string;
      description: string;
      backToBlog: string;
    };
    backButton: string;
    shareTitle: string;
    shareOnTwitter: string;
    shareOnLinkedIn: string;
  };

  const canonicalUrl = `https://usegrimm.app/blog/${post.slug}`;
  const coverImage = post.coverImage || "/og-image.png";

  return (
    <>
      {/* JSON-LD Structured Data pour l'article */}
      <JsonLd 
        post={post} 
        url={canonicalUrl}
        type="article"
      />

      {/* Structured Data pour le breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": t("common.home"),
                "item": "https://usegrimm.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": t("common.blog"),
                "item": "https://usegrimm.app/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": canonicalUrl
              }
            ]
          })
        }}
      />

      <div className="flex flex-col justify-between min-h-screen">
        <Header onDownloadClick={openDownloadModal} />

        <article 
          className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link 
                  href="/" 
                  className="text-green-600 hover:text-green-700 transition-colors"
                  aria-label={t("common.home")}
                >
                  {t("common.home")}
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-green-600 hover:text-green-700 transition-colors"
                  aria-label={t("common.blog")}
                >
                  {t("common.blog")}
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li 
                className="text-gray-600 truncate max-w-xs" 
                aria-current="page"
                itemProp="name"
              >
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
            aria-label={blogPostTranslations.backButton}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {blogPostTranslations.backButton}
          </Link>

          {/* Cover Image avec priorité de chargement */}
          {coverImage && coverImage !== "/og-image.png" && (
            <div 
              className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-8 relative"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src={coverImage}
                alt={`Image de couverture pour l'article: ${post.title}`}
                title={`Image: ${post.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 72rem"
                className="object-cover"
                priority={true}
                quality={90}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              <meta itemProp="url" content={`https://usegrimm.app${coverImage}`} />
              <meta itemProp="width" content="1200" />
              <meta itemProp="height" content="630" />
            </div>
          )}

          {/* Header */}
          <header className="mb-8">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <time 
                dateTime={post.date} 
                className="flex items-center gap-2"
                itemProp="datePublished"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(post.date)}
              </time>
              <span className="flex items-center gap-2" itemProp="author">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span itemProp="name">{post.author}</span>
              </span>
              <meta itemProp="publisher" content="Grimm Technologies" />
              <meta itemProp="dateModified" content={post.date} />
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    itemProp="keywords"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-800
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-800 prose-strong:font-semibold
              prose-code:text-green-600 prose-code:bg-green-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
              prose-blockquote:border-l-4 prose-blockquote:border-green-600 prose-blockquote:pl-4 prose-blockquote:italic
              prose-ul:list-disc prose-ol:list-decimal
              prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
            itemProp="articleBody"
          />

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {blogPostTranslations.shareTitle}
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-lg hover:bg-[#1a8cd8] transition-colors"
                aria-label={blogPostTranslations.shareOnTwitter}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-lg hover:bg-[#004182] transition-colors"
                aria-label={blogPostTranslations.shareOnLinkedIn}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Download Invite Section */}
          <div className="mt-12 mb-8">
            <DownloadInvite onDownloadClick={openDownloadModal} />
          </div>
        </article>

        <Footer />

        {/* Modal */}
        {isDownloadModalOpen && (
          <Modal
            isOpen={isDownloadModalOpen}
            content={<DownloadContent />}
            onClose={closeDownloadModal}
            size="large"
          />
        )}
      </div>
    </>
  );
}