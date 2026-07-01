# Dripped Auto Detailing Website

Production-ready Next.js 15 + TypeScript + Tailwind CSS + App Router project for `www.drippeddetailinglv.com`.

## What is included
- Homepage with luxury hero, CTA, services, quote calculator, gallery preview, reviews preview, before/after, why choose us, FAQ, and contact CTA.
- Service SEO routes for Exterior Detail, Essential Detail, Premium Detail, Dripped Out Detail, Ceramic Coatings, Maintenance Plans, Boat Detailing, and Add-ons.
- Service-area SEO routes for Summerlin, Centennial Hills, North Las Vegas, Aliante, Henderson, and Las Vegas.
- Quote calculator with vehicle type, package, add-ons, and estimated total.
- Gallery route with lazy loading/lightbox component scaffold.
- Reviews route for Google review screenshots, Google Business link, rating, and review count.
- Blog routes and starter SEO article slugs.
- Contact page with booking form scaffold, phone, email, Google Maps, and Instagram fields.
- Metadata, canonical URLs, Open Graph, Twitter cards, LocalBusiness schema, Breadcrumb schema, FAQ schema, robots, sitemap.

## Before deployment
Edit `lib/site.ts` and replace every `ADD_...` value with your real phone, email, Google Business URL, Maps URL, rating, review count, descriptions, FAQs, and blog content.

Add real assets:
- `/public/gallery/`
- `/public/reviews/`
- `/public/before-after/`
- `/public/brand/`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Upload this folder to GitHub.
2. Import the repo in Vercel.
3. Add the domain `www.drippeddetailinglv.com`.
4. Update DNS at Namecheap using Vercel's provided records.
5. Deploy.
