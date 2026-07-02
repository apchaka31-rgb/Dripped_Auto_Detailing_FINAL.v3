import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { services, site, vehicleTypes } from "@/lib/site";

const protectionHighlights = [
  "UV protection for Las Vegas sun",
  "Deep gloss and slick paint feel",
  "Hydrophobic water behavior",
  "Easier maintenance washes",
  "Professional prep before coating"
];

const ceramicPackages = [
  {
    name: "36-Month Gyeon Certified",
    sedan: "$650",
    suv: "$850",
    bestFor: "Newer vehicles and owners who want strong long-term protection without overcomplicating the package.",
    includes: ["100% foam hand wash", "Iron and clay decontamination", "Wheels and tires cleaned", "Streak-free windows and mirrors", "1-step light paint correction and polish", "Gyeon ceramic coating application"]
  },
  {
    name: "60-Month Gyeon Certified",
    sedan: "$900",
    suv: "$1,100",
    bestFor: "Drivers who want longer protection, stronger gloss retention, and easier maintenance over multiple years.",
    includes: ["100% foam hand wash", "Iron and clay decontamination", "Wheels and tires cleaned", "Streak-free windows and mirrors", "1-step light paint correction and polish", "Gyeon ceramic coating application"]
  }
];

const maintenancePackages = [
  { name: "Bi-weekly Maintenance", price: "$100 flat rate per car", note: "Best for vehicles that need a consistently clean look every other week." },
  { name: "Monthly Maintenance", price: "$120 flat rate per car", note: "Best for garage-kept vehicles or drivers who want routine upkeep once per month." }
];

const marinePackages = [
  { name: "Boat Exterior Package", price: "$12/ft", note: "Exterior foam wash and hand dry for a clean marine finish." },
  { name: "Boat Essential Package", price: "$15/ft", note: "Exterior wash plus basic interior cleaning and wipe-down." },
  { name: "Boat Premium Package", price: "$20/ft", note: "A deeper marine detail with vinyl, plastic, rubber, upholstery, and carpet cleaning options." },
  { name: "Paint Correction / Enhancement & Ceramic Coating", price: "$35/ft", note: "Premium protection and enhancement for gelcoat, gloss, UV exposure, and easier maintenance." }
];

const addOnPackages = [
  { name: "Pet Hair Removal", price: "$30", note: "Focused removal for embedded pet hair that requires extra time beyond a standard vacuum." },
  { name: "Engine Bay Detail", price: "$50", note: "Careful cleaning and dressing for a cleaner, more presentable engine bay." },
  { name: "Mat Shampooing & Interior Sanitizing w/ Ozone Treatment", price: "$50", note: "Great for odor control, floor mats, and a deeper interior reset." },
  { name: "Ceramic SiO2 Sealant", price: "$100", note: "Includes iron decontamination, clay treatment, and SiO2 sealant protection." },
  { name: "Interior Fabric/Leather Ceramic Coating", price: "$100", note: "Adds protection to interior fabric or leather surfaces for easier cleanup and stronger resistance." }
];

function PriceCards({ s }: { s: NonNullable<(typeof services)[number]> }) {
  if (s.prices) {
    return <div className="pricing-stack">
      {vehicleTypes.map(v => <div className="pricing-tile" key={v.id}>
        <span>{v.label}</span>
        <strong>${s.prices![v.id]}</strong>
      </div>)}
    </div>;
  }

  if (s.slug === "ceramic-coatings") {
    return <div className="package-grid two">{ceramicPackages.map(pkg => <article className="package-card featured" key={pkg.name}>
      <p className="eyebrow">Gyeon Certified</p>
      <h3>{pkg.name}</h3>
      <div className="dual-price"><div><span>Sedan / Coupe</span><strong>{pkg.sedan}</strong></div><div><span>SUV / Truck</span><strong>{pkg.suv}</strong></div></div>
      <p>{pkg.bestFor}</p>
      <ul>{pkg.includes.map(item => <li key={item}>{item}</li>)}</ul>
    </article>)}</div>;
  }

  if (s.slug === "maintenance-plans") {
    return <div className="package-grid two">{maintenancePackages.map(pkg => <article className="package-card" key={pkg.name}><h3>{pkg.name}</h3><strong>{pkg.price}</strong><p>{pkg.note}</p></article>)}</div>;
  }

  if (s.slug === "boat-detailing") {
    return <div className="package-grid two">{marinePackages.map(pkg => <article className="package-card" key={pkg.name}><h3>{pkg.name}</h3><strong>{pkg.price}</strong><p>{pkg.note}</p></article>)}</div>;
  }

  if (s.slug === "add-ons") {
    return <div className="package-grid two">{addOnPackages.map(pkg => <article className="package-card" key={pkg.name}><h3>{pkg.name}</h3><strong>{pkg.price}</strong><p>{pkg.note}</p></article>)}</div>;
  }

  return <div className="package-card"><p>{s.priceNote}</p></div>;
}

function IncludedList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return <div className="included-block"><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>;
}

export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) return {};
  return { title: s.seoTitle, description: s.seoDescription, alternates: { canonical: `/services/${s.slug}` }, openGraph: { title: s.seoTitle, description: s.seoDescription } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find(x => x.slug === slug);
  if (!s) notFound();
  const bullets = s.bullets?.length ? s.bullets : undefined;

  return <main className="page service-page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone }, areaServed: "Las Vegas, NV", description: s.seoDescription }} />

    <section className="service-hero split">
      <div>
        <p className="eyebrow">{s.eyebrow}</p>
        <h1>{s.name}</h1>
        <p>{s.description}</p>
        <div className="hero-actions left"><a className="btn" href={site.smsHref}>Book / Text Quote</a><Link className="btn ghost" href="/quote">Estimate Price</Link></div>
      </div>
      <div className="hero-stat-card">
        <span>Mobile Service</span>
        <strong>Las Vegas</strong>
        <p>Premium detailing brought to your driveway, workplace, or approved service location.</p>
      </div>
    </section>

    <section className="service-section">
      <div className="section-head"><span>Pricing</span><h2>Choose your package</h2><p>Compare pricing by vehicle size and package level. Each option is organized clearly so you can choose the right service without guessing.</p></div>
      <PriceCards s={s} />
      {s.slug === "ceramic-coatings" && <div className="info-callouts"><div><h3>Vehicles older than 6 months</h3><p>Vehicles that need heavier paint correction may require a <strong>$250 additional correction fee</strong>.</p></div><div><h3>Interior add-on</h3><p>Add an Interior Detail to your ceramic coating appointment for <strong>$50 additional</strong>.</p></div></div>}
      {s.slug === "maintenance-plans" && <div className="info-callouts"><div><h3>Enrollment requirement</h3><p>Maintenance plans require a minimum purchase of at least the Essential Detail before enrolling.</p></div></div>}
    </section>

    <section className="service-section content-grid improved">
      <div className="content-card premium-list-card">
        <h2>What&apos;s included</h2>
        <IncludedList title="Exterior" items={s.exterior} />
        <IncludedList title="Interior" items={s.interior} />
        <IncludedList title="Included Service Items" items={bullets} />
      </div>
      <div className="content-card premium-list-card">
        <h2>Why book this service?</h2>
        <ul className="check-list">
          <li>Designed around Las Vegas heat, dust, road film, and UV exposure.</li>
          <li>Built for clean presentation, premium protection, and mobile convenience.</li>
          <li>Easy to customize with add-ons like pet hair removal, engine bay detailing, mat shampooing, ozone treatment, and ceramic protection.</li>
          <li>Strong option for daily drivers, luxury vehicles, SUVs, trucks, and client-ready vehicles.</li>
        </ul>
        {s.slug === "ceramic-coatings" && <><h3>Protection benefits</h3><ul>{protectionHighlights.map(item => <li key={item}>{item}</li>)}</ul></>}
      </div>
    </section>

    <section className="service-section"><h2>Estimate this service</h2><QuoteCalculator /></section>
    <section className="cta"><h2>Ready to book {s.name}?</h2><p>Text us your vehicle year, make, model, location, and photos if needed.</p><a className="btn" href={site.smsHref}>Text {site.phone}</a></section>
  </main>;
}
