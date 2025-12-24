import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPost } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
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