"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Modal } from "../../components/modal";
import { DownloadContent } from "../../components/donwload-content";
import { BlogPost } from "@/types/blog";
import { useTranslations } from "@/hooks/useTranslations";

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
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header onDownloadClick={openDownloadModal} />

      <article className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        {/* Cover Image */}
        {post.coverImage && (
          <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-8 relative">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 72rem"
              className="object-cover"
              priority={true}
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <time dateTime={post.date} className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {post.author}
            </span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
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
            prose-img:rounded-xl prose-img:shadow-lg
            prose-blockquote:border-l-4 prose-blockquote:border-green-600 prose-blockquote:pl-4 prose-blockquote:italic
            prose-ul:list-disc prose-ol:list-decimal
            prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
  );
}