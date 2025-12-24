import { getBlogPosts } from "@/data/blog-posts";
import BlogClient from "./BlogClient";
import { BlogPostMetadata } from "@/types/blog";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return <BlogClient posts={posts} />;
}

export const revalidate = 3600;