"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { Modal } from "../components/modal";
import { DownloadContent } from "../components/donwload-content";
import { BlogPostMetadata } from "@/types/blog";
import { useTranslations } from "@/hooks/useTranslations";
import { SEO } from "../components/seo";
import { JsonLd } from "../components/json-ld";

interface BlogClientProps {
  posts: BlogPostMetadata[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState<BlogPostMetadata[]>([]);
  const [displayCount, setDisplayCount] = useState(9);
  const t = useTranslations();

  useEffect(() => {
    setVisiblePosts(posts.slice(0, displayCount));
  }, [posts, displayCount]);

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  const loadMorePosts = () => {
    setDisplayCount(prev => prev + 9);
  };

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
    loadMore: string;
    showing: string;
  };

  return (
    <>
      {/* SEO pour la page du blog */}
      <SEO
        title="Blog Grimm App - Actualités Bitcoin et Lightning Network"
        description="Découvrez nos articles sur Bitcoin, le Lightning Network, la souveraineté numérique et les fonctionnalités de Grimm App. Guides pratiques et analyses approfondies."
        ogType="website"
        twitterCard="summary_large_image"
      />
      
      {/* Structured Data pour la page du blog */}
      <JsonLd 
        url="https://usegrimm.app/blog" 
        type="website"
      />
      
      {/* Structured Data pour l'organisation */}
      <JsonLd 
        url="https://usegrimm.app" 
        type="organization"
      />

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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {visiblePosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group"
                    aria-label={`Lire l'article: ${post.title}`}
                  >
                    <article 
                      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <meta itemProp="datePublished" content={post.date} />
                      <meta itemProp="author" content={post.author} />
                      
                      {post.coverImage ? (
                        <div className="aspect-video bg-gray-200 overflow-hidden relative">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            title={`Image de couverture: ${post.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={index < 3} // Prioriser le chargement des 3 premières images
                            quality={85}
                            loading={index < 3 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                          <div className="text-green-600 text-4xl">G</div>
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <time 
                            dateTime={post.date}
                            itemProp="datePublished"
                          >
                            {formatDate(post.date)}
                          </time>
                          <span aria-hidden="true">•</span>
                          <span itemProp="author">{post.author}</span>
                        </div>
                        <h2 
                          className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2"
                          itemProp="headline"
                        >
                          {post.title}
                        </h2>
                        <p 
                          className="text-gray-600 mb-4 flex-1 line-clamp-3"
                          itemProp="description"
                        >
                          {post.description}
                        </p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                                itemProp="keywords"
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{post.tags.length - 2}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {visiblePosts.length < posts.length && (
                <div className="text-center mb-12">
                  <button
                    onClick={loadMorePosts}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                    aria-label="Charger plus d'articles"
                  >
                    {blogTranslations.loadMore}
                  </button>
                  <p className="text-gray-500 text-sm mt-3">
                    {blogTranslations.showing.replace('{{current}}', visiblePosts.length.toString()).replace('{{total}}', posts.length.toString())}
                  </p>
                </div>
              )}
            </>
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
    </>
  );
}