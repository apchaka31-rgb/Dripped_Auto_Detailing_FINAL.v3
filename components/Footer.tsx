import Link from "next/link";
import { addOns, services, serviceAreas, site } from "@/lib/site";

export function Footer() {
  const serviceLinks = services.filter(s => ["exterior-package", "exterior-sio3-package", "essential-detail", "premium-detail", "dripped-out-detail", "interior-restore-detail", "ceramic-coatings", "maintenance-plans"].includes(s.slug));
  return <footer className="footer luxury-footer">
    <div className="footer-stripe" />
    <div className="footer-grid">
      <div>
        <Link href="/" className="footer-logo" aria-label="Dripped Auto Detailing home"><img src="/brand/dripped-logo.png" alt="Dripped Auto Detailing logo" className="footer-brand-logo" /></Link>
        <p><strong>Premium Detailing with Quality and Precision that Come to You.</strong></p>
        <p>Mobile auto detailing, ceramic coatings, maintenance plans, marine detailing, and premium add-ons across Las Vegas.</p>
        <div className="footer-actions"><a className="btn" href={site.smsHref}>Get Quote</a><Link className="btn ghost" href="/services">View Services</Link></div>
      </div>
      <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/reviews">Google Reviews</Link><Link href="/quote">Quote Calculator</Link><Link href="/contact">Contact</Link></div>
      <div><h4>Our Services</h4>{serviceLinks.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}<Link href="/services/boat-detailing">Marine Detailing</Link></div>
      <div><h4>Add-Ons</h4>{addOns.map(a => <Link key={a.id} href="/services/add-ons">{a.name}</Link>)}<h4 className="footer-spaced">Service Areas</h4>{serviceAreas.slice(0,4).map(a => <Link key={a.slug} href={`/service-areas/${a.slug}`}>{a.name}</Link>)}</div>
      <div><h4>Hours & Contact</h4><p>{site.hours[0]}<br />{site.hours[1]}<br />{site.hours[2]}</p><p><a href={site.phoneHref}>{site.phone}</a></p><p><a href={`mailto:${site.email}`}>{site.email}</a></p><div className="social-row"><a href={site.instagram}>Instagram</a><a href={site.googleBusinessUrl}>Google</a></div><iframe className="footer-map" src={site.mapsEmbed} loading="lazy" title="Dripped Auto Detailing footer map" /></div>
    </div>
    <div className="subfooter">© {new Date().getFullYear()} Dripped Auto Detailing. Las Vegas, Nevada. Built for premium mobile detailing.</div>
  </footer>
}
