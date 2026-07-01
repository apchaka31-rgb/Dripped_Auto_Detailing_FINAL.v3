import type { MetadataRoute } from "next";
import { blogPosts, services, serviceAreas, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/services", "/gallery", "/reviews", "/faq", "/service-areas", "/contact", "/quote", "/blog"];
  return [
    ...routes.map(r => ({ url: `${site.domain}${r}`, lastModified: now })),
    ...services.map(s => ({ url: `${site.domain}/services/${s.slug}`, lastModified: now })),
    ...serviceAreas.map(a => ({ url: `${site.domain}/service-areas/${a.slug}`, lastModified: now })),
    ...blogPosts.map(p => ({ url: `${site.domain}/blog/${p.slug}`, lastModified: now }))
  ];
}
