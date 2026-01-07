import { getBlogPosts } from "@/data/blog-posts";
import BlogClient from "./BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grimm App - Actualités Bitcoin et Lightning Network",
  description: "Découvrez nos articles sur Bitcoin, le Lightning Network, la souveraineté numérique et les fonctionnalités de Grimm App. Guides pratiques et analyses approfondies.",
  openGraph: {
    type: "website",
    url: "https://usegrimm.app/blog",
    title: "Blog Grimm App - Actualités Bitcoin et Lightning Network",
    description: "Découvrez nos articles sur Bitcoin, le Lightning Network, la souveraineté numérique et les fonctionnalités de Grimm App.",
    images: [
      {
        url: "https://usegrimm.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Grimm App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Grimm App - Actualités Bitcoin et Lightning Network",
    description: "Découvrez nos articles sur Bitcoin, le Lightning Network, la souveraineté numérique et les fonctionnalités de Grimm App.",
    images: ["https://usegrimm.app/og-image.png"],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return <BlogClient posts={posts} />;
}

export const revalidate = 3600;