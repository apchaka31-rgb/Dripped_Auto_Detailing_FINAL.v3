import Link from "next/link";
import { addOns, site } from "@/lib/site";

export function Header() {
  const serviceMenu = [
    { label: "Full Details", href: "/services/full-details" },
    { label: "Exterior Details", href: "/services/exterior-details" },
    { label: "Ceramic Coatings", href: "/services/ceramic-coatings" },
    { label: "Marine Detailing", href: "/services/boat-detailing" }
  ];

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="site-header">
      <Link href="/" className="brand logo-brand" aria-label="Dripped Auto Detailing home">
        <img src="/brand/dripped-logo.png" alt="Dripped Auto Detailing logo" className="header-logo" />
      </Link>

      <nav className="nav" aria-label="Desktop navigation">
        <Link href="/">Home</Link>
        <div className="dropdown">
          <Link href="/services">Services ▾</Link>
          <div className="menu">
            {serviceMenu.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div className="dropdown">
          <Link href="/services/add-ons">Add-Ons ▾</Link>
          <div className="menu">
            {addOns.map(item => <Link key={item.id} href="/services/add-ons">{item.name}</Link>)}
          </div>
        </div>
        <Link href="/gallery">Gallery</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <a href={site.smsHref} className="btn small desktop-quote">Text Quote</a>

      <details className="mobile-menu">
        <summary>Menu</summary>
        <div className="mobile-panel">
          {mainLinks.slice(0,1).map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          <b>Services</b>
          {serviceMenu.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          <b>Add-Ons</b>
          <Link href="/services/add-ons">View Add-Ons</Link>
          {addOns.map(item => <Link key={item.id} href="/services/add-ons">{item.name}</Link>)}
          <b>Pages</b>
          {mainLinks.slice(1).map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          <a href={site.smsHref} className="btn small">Text Quote</a>
        </div>
      </details>
    </header>
  );
}
