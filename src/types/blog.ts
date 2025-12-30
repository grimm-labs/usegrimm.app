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