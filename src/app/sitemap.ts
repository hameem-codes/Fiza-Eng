import { MetadataRoute } from "next";
import { CAPABILITIES, PRODUCTS, NEWS_ARTICLES } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fiza-one.vercel.app";

  const staticRoutes = [
    "",
    "/company",
    "/capabilities",
    "/projects",
    "/products",
    "/mining",
    "/news",
    "/social",
    "/achievements",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const capabilityRoutes = CAPABILITIES.map((c) => ({
    url: `${baseUrl}/capabilities/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productRoutes = PRODUCTS.map((pr) => ({
    url: `${baseUrl}/products/${pr.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsRoutes = NEWS_ARTICLES.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...capabilityRoutes, ...projectRoutes, ...productRoutes, ...newsRoutes];
}
