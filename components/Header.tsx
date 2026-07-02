import Link from "next/link";
import { addOns, site } from "@/lib/site";

export function Header() {
  const serviceMenu = [
    { label: "Full Details", href: "/services/essential-detail" },
    { label: "Exterior Details", href: "/services/exterior-package" },
    { label: "Ceramic Coatings", href: "/services/ceramic-coatings" },
    { label: "Marine Detailing", href: "/services/boat-detailing" }
  ];

  return (
    <header className="site-header">
      <Link href="/" className="brand logo-brand" aria-label="Dripped Auto Detailing home">
        <img src="/brand/dripped-logo.png" alt="Dripped Auto Detailing logo" className="header-logo" />
      </Link>
      <nav className="nav">
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
      <a href={site.smsHref} className="btn small">Text Quote</a>
    </header>
  );
}
