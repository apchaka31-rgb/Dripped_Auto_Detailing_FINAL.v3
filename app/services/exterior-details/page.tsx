import type { Metadata } from "next";
import Link from "next/link";
import { services, vehicleTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exterior Detail Packages Las Vegas | Dripped Auto Detailing",
  description: "Compare exterior detail packages from Dripped Auto Detailing including the Exterior Package and Exterior SIO3 Package."
};

const exteriorSlugs = ["exterior-package", "exterior-sio3-package"];

export default function ExteriorDetailsPage() {
  const packages = exteriorSlugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as typeof services;

  return <main className="page service-group-page">
    <section className="page-hero">
      <p className="eyebrow">Exterior Details</p>
      <h1>Exterior detail packages</h1>
      <p>Choose a clean exterior reset or step up to the SIO3 package for added slickness, shine, trim dressing, and paint sealant protection.</p>
    </section>

    <section className="package-grid group-packages two">
      {packages.map(pkg => <article className="package-card full-package-card" key={pkg.slug}>
        <p className="eyebrow">{pkg.eyebrow}</p>
        <h2>{pkg.name}</h2>
        <p>{pkg.short}</p>
        {pkg.prices && <div className="pricing-stack compact">
          {vehicleTypes.map(v => <div className="pricing-tile" key={v.id}><span>{v.label}</span><strong>${pkg.prices![v.id]}</strong></div>)}
        </div>}
        <h3>Included</h3>
        <ul>{pkg.bullets.map(item => <li key={item}>{item}</li>)}</ul>
        <Link className="btn" href={`/services/${pkg.slug}`}>View {pkg.name}</Link>
      </article>)}
    </section>
  </main>;
}
