import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/site";
export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about Dripped Auto Detailing mobile car detailing, ceramic coatings, maintenance plans, boat detailing, and pricing in Las Vegas." };
export default function FAQPage(){return <main className="page"><JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}}/><section className="page-hero"><p className="eyebrow">FAQ</p><h1>Frequently asked questions</h1><p>Answers about booking, mobile service, pricing, maintenance, ceramic coatings, and detailing in Las Vegas.</p></section><section className="faq-grid">{faqs.map(f=><div className="faq" key={f.q}><h2>{f.q}</h2><p>{f.a}</p></div>)}</section></main>}
