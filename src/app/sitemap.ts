import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://mundodigitalsolucoes.com.br";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/metodo-mds", changeFrequency: "monthly", priority: 0.9 },
  { path: "/trafego", changeFrequency: "monthly", priority: 0.8 },
  { path: "/social-media", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sites-inteligentes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/crm", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contato", changeFrequency: "monthly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date("2026-09-01"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: post.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...blogPages];
}
