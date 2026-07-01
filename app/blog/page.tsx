import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/site";
export const metadata: Metadata = { title: "Blog", description: "Auto detailing tips for Las Vegas drivers from Dripped Auto Detailing." };
export default function BlogPage(){return <main className="page"><section className="page-hero"><p className="eyebrow">Blog</p><h1>Detailing tips for Las Vegas drivers</h1><p>Helpful articles about paint protection, ceramic coating, interior care, and detailing schedules in Nevada heat.</p></section><section className="cards three">{blogPosts.map(p=><Link className="card" key={p.slug} href={`/blog/${p.slug}`}><h2>{p.title}</h2><p>{p.excerpt}</p></Link>)}</section></main>}
