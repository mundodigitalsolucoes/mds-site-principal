import blogPosts from "@/content/blog";
import type { BlogPost } from "@/types/blog";

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  return getAllPosts().find((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category?: string,
  limit = 3
): BlogPost[] {
  const posts = getAllPosts().filter((post) => post.slug !== currentSlug);

  if (category) {
    const sameCategory = posts.filter((post) => post.category === category);
    if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  }

  return posts.slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((post) => post.category)));
}