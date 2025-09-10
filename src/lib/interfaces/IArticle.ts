export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  coverImage?: string;
  tags?: string[];
  author?: string;
}

export interface ArticleMetadata {
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
}
