import type { Metadata } from "next";
import Link from "next/link";
import { services, vehicleTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Full Detail Packages Las Vegas | Dripped Auto Detailing",
  description: "Compare full detail packages from Dripped Auto Detailing including Essential Detail, Premium Detail, Dripped Out Detail, and Interior Restore Detail."
};

const fullDetailSlugs = ["essential-detail", "premium-detail", "dripped-out-detail", "interior-restore-detail"];

export default function FullDetailsPage() {
  const packages = fullDetailSlugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as typeof services;

  return <main className="page service-group-page">
    <section className="page-hero">
      <p className="eyebrow">Full Detail Packages</p>
      <h1>Interior and exterior detail packages</h1>
      <p>Choose the level of detail that fits your vehicle. Essential is a clean reset, Premium adds extra protection and leather care, Dripped Out is the signature full-service package, and Interior Restore is for deep interior recovery.</p>
    </section>

    <section className="package-grid group-packages">
      {packages.map(pkg => <article className="package-card full-package-card" key={pkg.slug}>
        <p className="eyebrow">{pkg.eyebrow}</p>
        <h2>{pkg.name}</h2>
        <p>{pkg.short}</p>
        {pkg.prices && <div className="pricing-stack compact">
          {vehicleTypes.map(v => <div className="pricing-tile" key={v.id}><span>{v.label}</span><strong>${pkg.prices![v.id]}</strong></div>)}
        </div>}
        <div className="included-columns">
          {pkg.exterior?.length ? <div><h3>Exterior</h3><ul>{pkg.exterior.map(item => <li key={item}>{item}</li>)}</ul></div> : null}
          {pkg.interior?.length ? <div><h3>Interior</h3><ul>{pkg.interior.map(item => <li key={item}>{item}</li>)}</ul></div> : null}
          {pkg.bullets?.length ? <div><h3>Included</h3><ul>{pkg.bullets.map(item => <li key={item}>{item}</li>)}</ul></div> : null}
        </div>
        <Link className="btn" href={`/services/${pkg.slug}`}>View {pkg.name}</Link>
      </article>)}
    </section>
  </main>;
}
