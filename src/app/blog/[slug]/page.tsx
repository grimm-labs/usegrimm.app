import { notFound } from "next/navigation";
import { getBlogPost } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";
import { getAllPostSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostClient post={post} />;
}

export const revalidate = 3600;