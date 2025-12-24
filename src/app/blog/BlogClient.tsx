"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";
import { BlogPostMetadata } from "@/types/blog";
import { useTranslations } from "@/hooks/useTranslations";

interface BlogClientProps {
  posts: BlogPostMetadata[];
}

export default function BlogClient({ posts }: BlogClientProps) {
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

  const blogTranslations = t("blogPage") as {
    title: string;
    subtitle: string;
    loading: string;
    noPosts: string;
    stayTuned: string;
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header onDownloadClick={openDownloadModal} />

      <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {blogTranslations.title}
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            {blogTranslations.subtitle}
          </p>
        </div>

        {/* Content */}
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-8">
            <p className="text-gray-600 text-lg">
              {blogTranslations.noPosts}
            </p>
            <p className="text-gray-500 mt-2">
              {blogTranslations.stayTuned}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {post.coverImage && (
                    <div className="aspect-video bg-gray-200 overflow-hidden relative">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={false}
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-1">
                      {post.description}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

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