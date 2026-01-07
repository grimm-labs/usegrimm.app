import { notFound } from "next/navigation";
import { getBlogPost } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";
import { getAllPostSlugs } from "@/lib/blog";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Article non trouvé | Grimm App",
      description: "L'article que vous recherchez n'existe pas ou a été supprimé.",
    };
  }

  const pageTitle = post.title.length < 50 
    ? `${post.title} | Grimm App Blog - Bitcoin & Lightning Network` 
    : post.title;

  const plainTextContent = post.content.replace(/<[^>]*>/g, "").substring(0, 160);
  const description = post.description || plainTextContent + "...";

  const coverImage = post.coverImage 
    ? `https://usegrimm.app${post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}`
    : "https://usegrimm.app/og-image.png";

  return {
    title: pageTitle,
    description,
    openGraph: {
      type: "article",
      url: `https://usegrimm.app/blog/${slug}`,
      title: pageTitle,
      description,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostClient post={post} />;
}

export const revalidate = 3600;