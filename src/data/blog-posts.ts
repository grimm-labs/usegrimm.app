// src/data/blog-posts.ts
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function getBlogPosts() {
  return await getAllPosts();
}

export async function getBlogPost(slug: string) {
  const post = await getPostBySlug(slug);
  
  if (post && post.coverImage) {
    if (post.coverImage.startsWith('/images/')) {
    } else if (post.coverImage.startsWith('./') || post.coverImage.startsWith('../')) {
      post.coverImage = `/images/blog/${post.coverImage.split('/').pop()}`;
    }
  }
  
  return post;
}