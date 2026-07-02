import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { beforeAfterPairs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Dripped Auto Detailing Las Vegas",
  description: "View real Dripped Auto Detailing gallery photos with properly labeled exterior details, trucks, luxury vehicles, engine bay detailing, and before-and-after results."
};

export default function GalleryPage() {
  return <main className="page">
    <section className="page-hero">
      <p className="eyebrow">Gallery</p>
      <h1>Real results from Dripped Auto Detailing</h1>
      <p>Every photo below is labeled by vehicle type, service style, and result so customers can clearly see the level of work before booking.</p>
    </section>

    <section className="gallery-section">
      <div className="section-head"><span>Before & After</span><h2>Actual transformations</h2><p>These pairings show the process from foam wash or dirty engine bay to finished detail.</p></div>
      <div className="before-after-grid">
        {beforeAfterPairs.map(pair => <article className="ba-card" key={pair.title}>
          <h3>{pair.title}</h3>
          <p>{pair.description}</p>
          <div className="ba-images">
            <div><img src={`/gallery/${pair.before}`} alt={`${pair.title} ${pair.beforeLabel}`} loading="lazy" /><span>{pair.beforeLabel}</span></div>
            <div><img src={`/gallery/${pair.after}`} alt={`${pair.title} ${pair.afterLabel}`} loading="lazy" /><span>{pair.afterLabel}</span></div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="gallery-section">
      <div className="section-head"><span>Portfolio</span><h2>Luxury vehicles, trucks, SUVs, wheels, and details</h2><p>Browse examples from exterior details, performance vehicles, luxury SUVs, engine bay details, wheels, and truck details.</p></div>
      <GalleryGrid />
    </section>
  </main>;
}
