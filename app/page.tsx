import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { faqs, reviewImages, services, serviceAreas, site } from "@/lib/site";

export default function Home() {
  return <main>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"AutoDetailing", name: site.name, url: site.domain, telephone: site.phone, email: site.email, address: {"@type":"PostalAddress", addressLocality:"Las Vegas", addressRegion:"NV", addressCountry:"US"}, aggregateRating: {"@type":"AggregateRating", ratingValue: site.rating, reviewCount: "12"}, openingHours: "Mo-Su 07:00-19:00", areaServed: serviceAreas.map(a=>a.name), sameAs:[site.instagram, site.googleBusinessUrl] }} />

    <section className="hero cinematic-hero">
      <video className="hero-video" src="/videos/porsche-foam-hero.mp4" autoPlay muted loop playsInline preload="metadata" />
      <div className="hero-overlay" />
      <div className="hero-content hero-content-final">
        <p className="eyebrow">Las Vegas Premium Mobile Auto Detailing</p>
        <h1>Premium Detailing with Quality and Precision that Come to You.</h1>
        <p>Mobile auto detailing, ceramic coatings, interior restoration, maintenance plans, marine detailing, and premium add-ons for Las Vegas drivers who care about the finish.</p>
        <div className="hero-actions"><Link href="/quote" className="btn">Get Instant Quote</Link><Link href="/services" className="btn ghost">View Packages</Link></div>
        <div className="hero-badges"><span>★★★★★ Google Reviewed</span><span>Mobile Service</span><span>Gyeon Certified Coatings</span><span>Las Vegas, NV</span></div>
      </div>
    </section>

    <Section eyebrow="Services" title="Premium detailing packages with clean pricing and clear results">
      <div className="cards four">{services.filter(s => ["exterior-package","exterior-sio3-package","essential-detail","premium-detail","dripped-out-detail","interior-restore-detail","ceramic-coatings","add-ons"].includes(s.slug)).map(s => <Link href={`/services/${s.slug}`} className="card service-preview-card" key={s.slug}><small>{s.eyebrow}</small><h3>{s.name}</h3><p>{s.short}</p><b>{s.prices ? `Starts at $${Math.min(...Object.values(s.prices))}` : "View options"}</b></Link>)}</div>
    </Section>

    <Section eyebrow="Instant Quote" title="Build your detail and see an estimated total">
      <QuoteCalculator />
    </Section>

    <Section eyebrow="Before & After" title="Actual transformations, labeled properly">
      <div className="mini-results">
        <Link href="/gallery" className="mini-result"><img src="/gallery/IMG_2384.JPEG" alt="Mercedes engine bay before detailing" /><span>Before</span><h3>Mercedes Engine Bay</h3></Link>
        <Link href="/gallery" className="mini-result"><img src="/gallery/IMG_2380.JPEG" alt="Mercedes engine bay after detailing" /><span>After</span><h3>Engine Bay Detail</h3></Link>
        <Link href="/gallery" className="mini-result"><img src="/gallery/IMG_4664.JPEG" alt="GMC AT4 during foam wash" /><span>Foam Wash</span><h3>GMC AT4</h3></Link>
        <Link href="/gallery" className="mini-result"><img src="/gallery/IMG_4671.JPEG" alt="GMC AT4 after exterior detail" /><span>Final Finish</span><h3>Truck Detail</h3></Link>
      </div>
      <div className="center"><Link href="/gallery" className="btn ghost">View Full Gallery</Link></div>
    </Section>

    <Section eyebrow="Featured Gallery" title="Luxury vehicles, trucks, wheels, coatings, and details">
      <GalleryGrid limit={8} />
      <div className="center"><Link href="/gallery" className="btn ghost">View Full Portfolio</Link></div>
    </Section>

    <Section eyebrow="Google Reviews" title="Real Google review screenshots from real customers">
      <div className="google-review-panel">
        <div>
          <div className="google-word">Google Reviews</div>
          <strong>5.0 ★★★★★</strong>
          <p>Review screenshots are shown directly from your Google Business Profile, with a map and Google link for customers who want to verify everything.</p>
        </div>
        <a className="btn" href={site.googleBusinessUrl}>View All Google Reviews</a>
      </div>
      <div className="home-review-row">
        {reviewImages.slice(0, 5).map((img, i) => <a href="/reviews" className="home-review-card" key={img}><img src={`/reviews/${img}`} loading="lazy" alt={`Dripped Auto Detailing Google review screenshot ${i+1}`} /></a>)}
      </div>
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
