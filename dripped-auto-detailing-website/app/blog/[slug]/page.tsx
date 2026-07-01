import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site";
export function generateStaticParams(){return blogPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const p=blogPosts.find(x=>x.slug===slug); if(!p)return {}; return {title:p.title, description:p.excerpt}}
export default async function BlogPost({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const p=blogPosts.find(x=>x.slug===slug); if(!p) notFound(); return <main className="page article"><section className="page-hero"><p className="eyebrow">Detailing Education</p><h1>{p.title}</h1><p>{p.excerpt}</p></section><article className="content-card"><p>{p.body}</p><p>For personalized recommendations, text Dripped Auto Detailing with your vehicle details and current condition.</p></article></main>}
