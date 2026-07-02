import type { Metadata } from "next";
import { reviewImages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Reviews | Dripped Auto Detailing Las Vegas",
  description: "View real Google review screenshots for Dripped Auto Detailing in Las Vegas, plus our Google Business Profile and map."
};

export default function ReviewsPage(){
  return <main className="page reviews-page">
    <section className="page-hero split reviews-hero">
      <div>
        <p className="eyebrow">Google Reviews</p>
        <h1>Real reviews from Las Vegas customers</h1>
        <p>Instead of fake testimonial cards, this page uses your actual Google review screenshots and links directly to your Google Business Profile.</p>
        <div className="hero-actions left"><a className="btn" href={site.googleBusinessUrl}>View All Reviews on Google</a><a className="btn ghost" href={site.smsHref}>Text for a Quote</a></div>
      </div>
      <div className="google-score-card">
        <span>Google Rating</span>
        <strong>5.0</strong>
        <div>★★★★★</div>
        <p>Real customer screenshots below</p>
      </div>
    </section>

    <section className="review-screenshot-wall">
      {reviewImages.map((img,i)=><a key={img} href={`/reviews/${img}`} className="review-img premium-review-img"><img src={`/reviews/${img}`} loading="lazy" alt={`Dripped Auto Detailing Google review screenshot ${i+1}`} /></a>)}
    </section>

    <section className="section map-section"><div className="section-head"><span>Find Us On Google</span><h2>Google Business Profile & map</h2><p>Open our Google Business Profile to view directions, business details, and more customer reviews.</p></div><iframe className="map tall" src={site.mapsEmbed} loading="lazy" title="Dripped Auto Detailing Google Map" /><div className="center"><a className="btn" href={site.googleBusinessUrl}>Open Google Business Profile</a></div></section>
  </main>
}
