import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas, site } from "@/lib/site";
export const metadata: Metadata = { title: "Service Areas", description: "Dripped Auto Detailing provides mobile detailing in Las Vegas, Summerlin, Centennial Hills, North Las Vegas, Aliante, and Henderson." };
export default function AreasPage(){return <main className="page"><section className="page-hero"><p className="eyebrow">Service Areas</p><h1>Mobile detailing across Las Vegas</h1><p>We bring premium detailing, ceramic coatings, and maintenance service to customers across the Las Vegas area.</p></section><iframe className="map tall" src={site.mapsEmbed} loading="lazy" title="Dripped Auto Detailing Google Map"/><section className="area-grid">{serviceAreas.map(a=><Link className="area-card" href={`/service-areas/${a.slug}`} key={a.slug}><h2>{a.name}</h2><p>{a.intro}</p></Link>)}</section></main>}
