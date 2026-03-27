export type BlogCategory =
  | "Método MDS"
  | "Marketing e Vendas"
  | "Sites Inteligentes";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  publishedAt: string;
  readingTime: string;
  category: BlogCategory;
  tags: string[];
  coverImage: string;
  featured?: boolean;

  seoTitle: string;
  seoDescription: string;

  content: string;

  cta?: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}