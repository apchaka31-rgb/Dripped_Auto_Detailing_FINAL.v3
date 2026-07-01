import type { Metadata } from "next";
import { site } from "./site";

export function meta(title: string, description: string, path = ""): Metadata {
  const url = `${site.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
    metadataBase: new URL(site.domain)
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: site.name,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: "US" },
    areaServed: ["Las Vegas", "Summerlin", "Centennial Hills", "North Las Vegas", "Aliante", "Henderson"],
    sameAs: [site.instagram, site.googleBusinessUrl]
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })) };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
}
