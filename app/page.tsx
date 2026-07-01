import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { faqs, services, serviceAreas, site } from "@/lib/site";

export default function Home() {
  return <main>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"AutoDetailing", name: site.name, url: site.domain, telephone: site.phone, email: site.email, address: {"@type":"PostalAddress", addressLocality:"Las Vegas", addressRegion:"NV", addressCountry:"US"}, aggregateRating: {"@type":"AggregateRating", ratingValue: site.rating, reviewCount: "12"}, areaServed: serviceAreas.map(a=>a.name), sameAs:[site.instagram, site.googleBusinessUrl] }} />
    <section className="hero">
      <video className="hero-video" src="/videos/porsche-foam-hero.mp4" autoPlay muted loop playsInline />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Las Vegas Premium Mobile Auto Detailing</p>
        <h1>Premium Detailing with Quality and Precision that Come to You.</h1>
        <p>Luxury mobile detailing, ceramic coatings, interior restoration, maintenance plans, and boat detailing for Las Vegas drivers who want the job done right.</p>
        <div className="hero-actions"><Link href="/quote" className="btn">Get Instant Quote</Link><Link href="/services" className="btn ghost">View Services</Link></div>
        <div className="hero-badges"><span>★★★★★ Google Rated</span><span>Mobile Service</span><span>Gyeon Certified Coatings</span></div>
      </div>
    </section>

    <Section eyebrow="Services" title="Detailing packages built for Las Vegas heat, dust, and premium vehicles">
      <div className="cards four">{services.slice(0,8).map(s => <Link href={`/services/${s.slug}`} className="card" key={s.slug}><small>{s.eyebrow}</small><h3>{s.name}</h3><p>{s.short}</p><b>{s.prices ? `Starts at $${Math.min(...Object.values(s.prices))}` : "View pricing"}</b></Link>)}</div>
    </Section>

    <Section eyebrow="Instant Quote" title="Estimate your detail before you text">
      <QuoteCalculator />
    </Section>

    <Section eyebrow="Featured Results" title="Real vehicles. Real work. Real gloss.">
      <GalleryGrid limit={8} />
      <div className="center"><Link href="/gallery" className="btn ghost">View Full Gallery</Link></div>
    </Section>

    <Section eyebrow="Google Reviews" title="Trusted by drivers across Las Vegas">
      <div className="review-strip"><div><strong>★★★★★</strong><h3>Real Google Reviews</h3><p>See customer screenshots and visit our Google Business Profile to read more.</p></div><a className="btn" href={site.googleBusinessUrl}>View on Google</a></div>
    </Section>

    <Section eyebrow="Service Areas" title="Mobile detailing where you need it">
      <div className="area-grid">{serviceAreas.map(a => <Link href={`/service-areas/${a.slug}`} key={a.slug} className="area-card"><h3>{a.name}</h3><p>{a.intro}</p></Link>)}</div>
      <iframe className="map" src={site.mapsEmbed} loading="lazy" title="Dripped Auto Detailing Google Map" />
    </Section>

    <Section eyebrow="FAQ" title="Questions customers ask before booking">
      <div className="faq-grid">{faqs.slice(0,6).map(f => <div className="faq" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}</div>
      <div className="center"><Link href="/faq" className="btn ghost">Read All FAQs</Link></div>
    </Section>
  </main>
}
