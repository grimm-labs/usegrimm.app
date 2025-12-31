export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  coverImage?: string;
  content: string;
  isPublished?: boolean;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  coverImage?: string;
  isPublished?: boolean;
}
export interface BlogPostPageTranslations {
  loading: string;
  notFound: {
    title: string;
    description: string;
    backToBlog: string;
  };
  backButton: string;
  shareTitle: string;
  shareOnTwitter: string;
  shareOnLinkedIn: string;
}