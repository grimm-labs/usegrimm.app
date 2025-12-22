export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  coverImage?: string;
  content: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  coverImage?: string;
}