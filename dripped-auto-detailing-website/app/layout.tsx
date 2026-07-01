import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: `${site.name} | Premium Mobile Detailing Las Vegas`, template: `%s | ${site.name}` },
  description: "Premium mobile auto detailing in Las Vegas with exterior details, full details, ceramic coatings, maintenance plans, boat detailing, and add-ons.",
  openGraph: { title: `${site.name} | Premium Mobile Detailing Las Vegas`, description: "Mobile detailing with quality and precision that comes to you.", url: site.domain, siteName: site.name, locale: "en_US", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
