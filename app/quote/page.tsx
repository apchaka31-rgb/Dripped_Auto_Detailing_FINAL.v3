import type { Metadata } from "next";
import { QuoteCalculator } from "@/components/QuoteCalculator";
export const metadata: Metadata = { title: "Quote Calculator", description: "Estimate your Dripped Auto Detailing package total with vehicle size, detail package, and add-ons before booking in Las Vegas." };
export default function QuotePage(){return <main className="page"><section className="page-hero"><p className="eyebrow">Quote Calculator</p><h1>Estimate your detail total</h1><p>Select your vehicle size, package, and add-ons to get a quick estimate before texting to book.</p></section><QuoteCalculator /></main>}
