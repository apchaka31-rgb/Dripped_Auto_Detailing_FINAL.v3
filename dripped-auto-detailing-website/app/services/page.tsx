import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
export const metadata: Metadata = { title: "Services & Pricing", description: "Explore Dripped Auto Detailing services and pricing for exterior details, full details, ceramic coatings, maintenance plans, boat detailing, and add-ons in Las Vegas." };
export default function ServicesPage(){return <main className="page"><section className="page-hero"><p className="eyebrow">Services</p><h1>Mobile detailing services and pricing</h1><p>Choose from exterior packages, full details, interior restoration, ceramic coatings, maintenance plans, boat detailing, and add-ons.</p></section><section className="cards three">{services.map(s=><Link className="card" href={`/services/${s.slug}`} key={s.slug}><small>{s.category}</small><h2>{s.name}</h2><p>{s.description}</p><b>{s.prices ? `Sedan from $${Math.min(...Object.values(s.prices))}` : s.priceNote}</b></Link>)}</section></main>}
