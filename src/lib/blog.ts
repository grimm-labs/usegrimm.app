import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { BlogPost, BlogPostMetadata } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Sans titre",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Grimm Team",
        tags: data.tags || [],
        coverImage: data.coverImage || "",
        isPublished: data.isPublished !== undefined ? data.isPublished : false,
      } as BlogPostMetadata;
    });

  const publishedPosts = allPostsData.filter((post) => post.isPublished !== false);

  return publishedPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();

    const post = {
      slug,
      title: data.title || "Sans titre",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Grimm Team",
      tags: data.tags || [],
      coverImage: data.coverImage || "",
      content: contentHtml,
      isPublished: data.isPublished !== undefined ? data.isPublished : true,
    };

    if (post.isPublished === false) {
      return null;
    }

    return post;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const slugs = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        
        const isPublished = data.isPublished !== undefined ? data.isPublished : true;
        
        return isPublished ? slug : null;
      })
  );

  return slugs.filter((slug): slug is string => slug !== null);
}

export async function getAllPostsIncludingUnpublished(): Promise<BlogPostMetadata[]> {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Sans titre",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Grimm Team",
        tags: data.tags || [],
        coverImage: data.coverImage || "",
        isPublished: data.isPublished !== undefined ? data.isPublished : true,
      } as BlogPostMetadata;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlugIncludingUnpublished(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || "Sans titre",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Grimm Team",
      tags: data.tags || [],
      coverImage: data.coverImage || "",
      content: contentHtml,
      isPublished: data.isPublished !== undefined ? data.isPublished : true,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}