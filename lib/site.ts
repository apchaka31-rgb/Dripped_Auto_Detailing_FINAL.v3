export const site = {
  name: "Dripped Auto Detailing",
  domain: "https://www.drippeddetailinglv.com",
  city: "Las Vegas",
  region: "NV",
  phone: "725-306-7008",
  phoneHref: "tel:7253067008",
  smsHref: "sms:7253067008",
  email: "drippeddetailinglv@gmail.com",
  instagram: "https://www.instagram.com/drippeddetailinglv/",
  googleBusinessUrl: "https://www.google.com/maps/place/Dripped+Auto+Detailing/data=!4m7!3m6!1s0x80c893d73f3ae61b:0x96586882a23ac7ee!8m2!3d36.2851805!4d-115.2995469!16s%2Fg%2F11lz3yvwhn!19sChIJG-Y6P9eTyIAR7sc6ooJoWJY?authuser=0&hl=en&rclk=1",
  mapsEmbed: "https://www.google.com/maps?q=Dripped%20Auto%20Detailing%20Las%20Vegas%20NV&output=embed",
  rating: "5.0",
  reviewCount: "Google reviews",
  hours: ["Monday - Sunday", "7:00 AM - 7:00 PM", "By appointment"]
} as const;

export const vehicleTypes = [
  { id: "sedan", label: "Sedan / Coupe" },
  { id: "mid", label: "Mid-size SUV / Crossover" },
  { id: "truck", label: "Full-size SUV / Truck" }
] as const;

export type VehicleId = typeof vehicleTypes[number]["id"];

export type PriceMap = Record<VehicleId, number>;

export type Service = {
  slug: string;
  category: "Exterior" | "Full Detail" | "Protection" | "Maintenance" | "Marine" | "Add-ons";
  name: string;
  eyebrow: string;
  short: string;
  description: string;
  prices?: PriceMap;
  priceNote?: string;
  bullets: string[];
  exterior?: string[];
  interior?: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "exterior-package",
    category: "Exterior",
    name: "Exterior Package",
    eyebrow: "Exterior Packages",
    short: "A clean, glossy exterior reset for daily drivers and weekend cars.",
    description: "The Exterior Package is built for vehicles that need a proper outside wash without a full interior service. It is a strong maintenance service for Las Vegas drivers dealing with dust, bugs, road film, and hard sun exposure.",
    prices: { sedan: 45, mid: 55, truck: 65 },
    bullets: ["Two bucket foam hand wash", "Hand-wash wheels and tires", "Windows cleaned streak-free", "Decontaminate paint to remove minor bugs, tar, and grime", "Apply tire dressing"],
    seoTitle: "Exterior Car Detailing Las Vegas | Dripped Auto Detailing",
    seoDescription: "Exterior car detailing in Las Vegas with foam hand washing, wheel cleaning, streak-free windows, paint decontamination, and tire dressing."
  },
  {
    slug: "exterior-sio3-package",
    category: "Exterior",
    name: "Exterior SIO3 Package",
    eyebrow: "Exterior Protection",
    short: "Exterior wash plus SIO3 paint sealant for extra slickness and protection.",
    description: "The Exterior SIO3 Package is the best option when you want a clean vehicle and extra paint protection in one visit. It includes the exterior wash process plus trim dressing and SIO3 paint sealant for a sharper finish.",
    prices: { sedan: 60, mid: 70, truck: 80 },
    bullets: ["Two bucket foam hand wash", "Hand-wash wheels and tires", "Windows cleaned streak-free", "Decontaminate paint to remove minor bugs, tar, and grime", "Apply tire dressing", "Apply exterior trim dressing", "Apply SIO3 paint sealant"],
    seoTitle: "SIO3 Paint Sealant Las Vegas | Exterior Detail Package",
    seoDescription: "Mobile exterior detailing with SIO3 paint sealant in Las Vegas. Foam wash, wheels, tires, trim dressing, windows, and paint protection."
  },
  {
    slug: "essential-detail",
    category: "Full Detail",
    name: "Essential Detail",
    eyebrow: "Full Detail Packages",
    short: "A balanced interior and exterior detail for a fresh, clean reset.",
    description: "The Essential Detail is made for customers who want their vehicle cleaned inside and out without going into heavy restoration. It covers the core areas most drivers notice every day.",
    prices: { sedan: 130, mid: 160, truck: 180 },
    exterior: ["Two bucket foam hand wash", "Windows cleaned streak-free", "Hand-wash wheels and tires", "Decontaminate paint to remove minor bugs, tar, and grime", "Apply exterior trim dressing", "Apply tire dressing"],
    interior: ["Vacuum floors and trunk area", "Wash down vinyl or plastic floor mats", "Vacuum cloth seats / clean leather seats", "Clean console, cup holders, crevices, and vents", "Clean dash and UV protect", "Clean door jambs"],
    bullets: [],
    seoTitle: "Essential Mobile Detail Las Vegas | Interior & Exterior Detailing",
    seoDescription: "Essential mobile detail package in Las Vegas with exterior washing, wheel cleaning, interior vacuuming, dash cleaning, UV protection, and door jamb cleaning."
  },
  {
    slug: "premium-detail",
    category: "Full Detail",
    name: "Premium Detail",
    eyebrow: "Full Detail Packages",
    short: "Our upgraded detail with wax protection and deeper interior care.",
    description: "The Premium Detail adds protection and refinement to the Essential service. It is ideal for clients who want the vehicle to feel cleaner, look glossier, and stay protected longer.",
    prices: { sedan: 150, mid: 180, truck: 210 },
    exterior: ["Two bucket foam hand wash", "Windows cleaned streak-free", "Hand-wash wheels and tires", "Decontaminate paint to remove minor bugs, tar, and grime", "Apply exterior trim dressing", "Apply tire dressing", "Apply wax for 2-3 months of paint protection"],
    interior: ["Vacuum floors and trunk area", "Wash down vinyl or plastic floor mats", "Vacuum cloth seats / clean leather seats", "Clean console, cup holders, crevices, and vents", "Clean dash and UV protect", "Clean door jambs", "Deep clean and condition leather seats"],
    bullets: [],
    seoTitle: "Premium Mobile Detailing Las Vegas | Dripped Auto Detailing",
    seoDescription: "Premium mobile detailing in Las Vegas with foam wash, wax protection, interior cleaning, leather conditioning, trim dressing, and wheel cleaning."
  },
  {
    slug: "dripped-out-detail",
    category: "Full Detail",
    name: "Dripped Out Detail",
    eyebrow: "Signature Package",
    short: "Our signature full detail with decontamination and SIO3 protection.",
    description: "The Dripped Out Detail is the signature package for customers who want the strongest full-service transformation before ceramic coating. It combines full interior care with iron decontamination, clay mitt treatment, and SIO3 paint sealant protection.",
    prices: { sedan: 225, mid: 255, truck: 285 },
    exterior: ["Two bucket foam hand wash", "Windows cleaned streak-free", "Hand-wash wheels and tires", "Decontaminate paint to remove minor bugs, tar, and grime", "Apply exterior trim dressing", "Apply tire dressing", "Iron decontamination, clay mitt, and SIO3 paint sealant up to 8 months of protection"],
    interior: ["Vacuum floors and trunk area", "Wash down vinyl or plastic floor mats", "Vacuum cloth seats / clean leather seats", "Clean console, cup holders, crevices, and vents", "Clean dash and UV protect", "Clean door jambs", "Deep clean and condition leather seats", "Condition and coat all vinyl/plastic interior surfaces"],
    bullets: [],
    seoTitle: "Full Detail Las Vegas | Dripped Out Detail Package",
    seoDescription: "Signature full detail in Las Vegas with interior cleaning, leather conditioning, iron decontamination, clay mitt treatment, and SIO3 paint sealant."
  },
  {
    slug: "interior-restore-detail",
    category: "Full Detail",
    name: "Interior Restore Detail",
    eyebrow: "Interior Restoration",
    short: "Deep interior shampooing, steam cleaning, deodorization, and protective treatments.",
    description: "The Interior Restore Detail is built for vehicles that need more than a basic wipe down. It is designed for deep interior cleaning, shampooing, deodorizing, and restoring the surfaces you touch every day.",
    prices: { sedan: 265, mid: 310, truck: 365 },
    bullets: ["Vacuum floors and trunk area", "Wash vinyl or plastic floor mats", "Vacuum cloth seats / clean leather seats", "Clean console, cup holders, crevices, and vents", "Clean dash and UV protect", "Condition and coat interior leather, vinyl, and plastics", "Clean windows streak-free", "Shampoo cloth floor mats", "Shampoo all carpeting", "Shampoo cloth seats", "Apply protective treatment to carpets and cloth seats for 3-4 months of protection", "Apply protective treatment to leather and vinyl for 3-4 months of protection", "Interior deodorization and ozone treatment", "Steam clean headliner, plastics, and vinyl", "Complimentary Exterior Detail included at no extra cost"],
    seoTitle: "Interior Car Detailing Las Vegas | Interior Restore Detail",
    seoDescription: "Interior restore detailing in Las Vegas with shampooing, steam cleaning, ozone treatment, leather and vinyl protection, and a complimentary exterior detail."
  },
  {
    slug: "ceramic-coatings",
    category: "Protection",
    name: "Ceramic Coatings",
    eyebrow: "Gyeon Certified Protection",
    short: "36-month and 60-month ceramic coating packages for gloss, UV protection, and easier maintenance.",
    description: "Ceramic coating is recommended for new vehicles as soon as possible to help reduce scratches, swirls, fading, and long-term paint damage. Dripped Auto Detailing offers Gyeon Certified 36-month and 60-month coating packages for Las Vegas drivers who want long-term protection.",
    priceNote: "36-Month Gyeon Certified: Sedan/Coupe $650, SUV/Truck $850. 60-Month Gyeon Certified: Sedan/Coupe $900, SUV/Truck $1,100. Vehicles older than 6 months needing heavier correction may require a $250 additional fee. Interior Detail available for $50 additional.",
    bullets: ["100% foam hand wash", "Iron and clay decontamination", "Wheels and tires cleaned", "Streak-free windows and mirrors", "1-step light paint correction and polish", "Ceramic coating applied", "36-month and 60-month options available"],
    seoTitle: "Ceramic Coating Las Vegas | Gyeon Certified Installer",
    seoDescription: "Gyeon Certified ceramic coating in Las Vegas with paint decontamination, one-step polish, and 36-month or 60-month protection options."
  },
  {
    slug: "maintenance-plans",
    category: "Maintenance",
    name: "Maintenance Plans",
    eyebrow: "Recurring Care",
    short: "Bi-weekly and monthly maintenance for vehicles already detailed by Dripped.",
    description: "Maintenance plans are for clients who want their vehicle to stay consistently clean after an initial detail. A minimum Essential Detail is required before enrolling so the vehicle starts at the right standard.",
    priceNote: "Bi-weekly: $100 flat rate per car. Monthly: $120 flat rate per car. Requires at least an Essential Detail before enrolling.",
    bullets: ["Recurring mobile maintenance", "Keeps your vehicle clean between full details", "Ideal for busy owners and premium vehicles", "Requires initial Essential Detail or higher", "Flat-rate pricing per car"],
    seoTitle: "Mobile Car Wash Maintenance Plans Las Vegas | Dripped Auto Detailing",
    seoDescription: "Bi-weekly and monthly mobile maintenance detailing plans in Las Vegas for vehicles that have already received an initial detail."
  },
  {
    slug: "boat-detailing",
    category: "Marine",
    name: "Boat Detailing",
    eyebrow: "Marine Detailing",
    short: "Mobile boat detailing, protection, and enhancement for Las Vegas and nearby lake areas.",
    description: "Boat detailing helps protect vinyl, gelcoat, interior surfaces, and exterior finishes from sun exposure, water spots, oxidation, and regular use. Dripped Auto Detailing offers mobile marine detailing options for boats in the Las Vegas area.",
    priceNote: "Exterior Package $12/ft. Essential Package $15/ft. Premium Package $20/ft. Paint Correction/Enhancement & Ceramic Coating $35/ft.",
    bullets: ["Foam wash and hand dry", "Interior vacuum and wipe down", "Vinyl, plastic, and rubber care", "Upholstery and carpet cleaning options", "Paint correction/enhancement options", "Ceramic coating options for added protection"],
    seoTitle: "Boat Detailing Las Vegas | Mobile Marine Detailing",
    seoDescription: "Mobile boat detailing in Las Vegas with exterior washing, interior cleaning, vinyl care, paint enhancement, and ceramic coating options."
  },
  {
    slug: "add-ons",
    category: "Add-ons",
    name: "Add-ons",
    eyebrow: "Premium Upgrades",
    short: "Add focused services to any package for a more complete detail.",
    description: "Add-ons let you customize your detail around the areas that need extra attention. They are a simple way to handle pet hair, engine bays, truck beds, steam cleaning, and ceramic protection upgrades.",
    priceNote: "Pet Hair Removal $30. Engine Bay Detail $50. Mat Shampooing & Interior Sanitizing with Ozone Treatment $50. Ceramic SiO2 Sealant with iron decontamination and clay $100. Interior Fabric/Leather Ceramic Coating $100.",
    bullets: ["Pet Hair Removal: $30", "Engine Bay Detail: $50", "Mat Shampooing & Interior Sanitizing with Ozone Treatment: $50", "Ceramic SiO2 Sealant including iron decontamination and clay: $100", "Interior Fabric/Leather Ceramic Coating: $100"],
    seoTitle: "Car Detailing Add-Ons Las Vegas | Pet Hair, Engine Bay, SiO2 Sealant",
    seoDescription: "Detailing add-ons in Las Vegas including pet hair removal, engine bay detail, mat shampooing, ozone treatment, SiO2 sealant, and interior ceramic coating."
  }
];

export const addOns = [
  { id: "pet-hair", name: "Pet Hair Removal", price: 30 },
  { id: "engine", name: "Engine Bay Detail", price: 50 },
  { id: "mats-ozone", name: "Mat Shampooing & Interior Sanitizing w/ Ozone Treatment", price: 50 },
  { id: "sio2-sealant", name: "Ceramic SiO2 Sealant", price: 100 },
  { id: "interior-coating", name: "Interior Fabric/Leather Ceramic Coating", price: 100 }
] as const;

export const galleryImages = [
  "IMG_0553.JPEG", "IMG_0567.JPEG", "IMG_2139.JPEG", "IMG_2150.JPEG", "IMG_2144.JPEG", "IMG_2380.JPEG", "IMG_2384.JPEG", "IMG_3489.JPEG", "IMG_3490.JPEG", "IMG_3456.JPEG", "IMG_3496.JPEG", "IMG_3740.JPEG", "IMG_3738.JPEG", "IMG_3736.JPEG", "IMG_3926.JPEG", "IMG_4635.JPEG", "IMG_4650.JPEG", "IMG_4649.JPEG", "IMG_4664.JPEG", "IMG_4671.JPEG"
];

export const galleryItems = [
  { file: "IMG_0553.JPEG", title: "Mercedes-Benz GLC Exterior Detail", category: "Exterior Details", vehicle: "Mercedes-Benz GLC", label: "Finished Exterior Detail", description: "White Mercedes SUV finished with clean paint, dressed tires, streak-free glass, and a sharp mobile detail presentation." },
  { file: "IMG_0567.JPEG", title: "Chevrolet Silverado Truck Detail", category: "Truck Details", vehicle: "Chevrolet Silverado", label: "Finished Truck Detail", description: "Full-size truck exterior wash with cleaned wheels, dressed tires, and refreshed paint." },
  { file: "IMG_2139.JPEG", title: "Black Range Rover Gloss Detail", category: "Luxury SUVs", vehicle: "Range Rover", label: "Finished Exterior Detail", description: "Black Range Rover cleaned and finished with a deep gloss look for a premium presentation." },
  { file: "IMG_2144.JPEG", title: "Mercedes-Benz GLE Exterior Detail", category: "Luxury SUVs", vehicle: "Mercedes-Benz GLE", label: "Finished Exterior Detail", description: "Mercedes SUV exterior detail with paint, trim, glass, wheels, and tires cleaned up." },
  { file: "IMG_2150.JPEG", title: "White Range Rover Exterior Detail", category: "Luxury SUVs", vehicle: "Range Rover Velar", label: "Finished Exterior Detail", description: "White Range Rover finished with clean glass, black trim contrast, and dressed tires." },
  { file: "IMG_2380.JPEG", title: "White Porsche Cabriolet Detail", category: "Performance Vehicles", vehicle: "Porsche 911 Cabriolet", label: "Luxury Vehicle Detail", description: "Porsche exterior detail showing clean paint, black wheels, and a client-ready finish." },
  { file: "IMG_2384.JPEG", title: "Porsche GT4 RS Showroom Finish", category: "Performance Vehicles", vehicle: "Porsche GT4 RS", label: "Showroom Vehicle Detail", description: "High-end Porsche finish with glossy paint, carbon accents, and premium presentation." },
  { file: "IMG_3456.JPEG", title: "Red Corvette Exterior Detail", category: "Performance Vehicles", vehicle: "Chevrolet Corvette", label: "Gloss Detail", description: "Red Corvette detailed with sharp reflections, clean glass, wheels, and performance-vehicle presentation." },
  { file: "IMG_3489.JPEG", title: "Mercedes Engine Bay After Detail", category: "Engine Bay", vehicle: "Mercedes-Benz", label: "After Engine Bay Detail", description: "Engine bay after cleaning and dressing for a cleaner, more professional look." },
  { file: "IMG_3490.JPEG", title: "Mercedes Engine Bay Before Detail", category: "Before & After", vehicle: "Mercedes-Benz", label: "Before Engine Bay Detail", description: "Engine bay before service with visible dust and buildup before cleaning." },
  { file: "IMG_3496.JPEG", title: "Mercedes-Benz S-Class Detail", category: "Luxury Vehicles", vehicle: "Mercedes-Benz S-Class", label: "Finished Luxury Detail", description: "Luxury sedan finished with clean paint, dressed tires, and a premium exterior look." },
  { file: "IMG_3736.JPEG", title: "BMW M Foam Wash", category: "Before & After", vehicle: "BMW M", label: "Foam Wash Process", description: "BMW during the foam wash stage before rinse, contact wash, and final finish." },
  { file: "IMG_3738.JPEG", title: "BMW M Exterior Detail", category: "Performance Vehicles", vehicle: "BMW M", label: "Finished Exterior Detail", description: "Black BMW finished with clean paint, bright wheels, and a deep gloss appearance." },
  { file: "IMG_3740.JPEG", title: "BMW Wheel & Tire Detail", category: "Wheels & Tires", vehicle: "BMW M", label: "Wheel Detail Close-Up", description: "Close-up wheel detail showing clean wheel faces, tire finish, and fender area." },
  { file: "IMG_3926.JPEG", title: "Rivian R1S Exterior Detail", category: "Electric Vehicles", vehicle: "Rivian R1S", label: "Finished Exterior Detail", description: "Electric SUV cleaned and finished with a crisp exterior detail presentation." },
  { file: "IMG_4635.JPEG", title: "Dodge Charger Exterior Detail", category: "Performance Vehicles", vehicle: "Dodge Charger", label: "Finished Exterior Detail", description: "White Dodge Charger exterior detail with clean paint, wheels, glass, and trim." },
  { file: "IMG_4649.JPEG", title: "GMC Sierra Foam Wash", category: "Before & After", vehicle: "GMC Sierra AT4", label: "Foam Wash Process", description: "GMC truck covered in foam during the wash process before the final detail finish." },
  { file: "IMG_4650.JPEG", title: "Black GMC Sierra AT4 Detail", category: "Truck Details", vehicle: "GMC Sierra AT4", label: "Finished Truck Detail", description: "Black GMC truck finished with clean paint, dressed tires, and refreshed exterior trim." },
  { file: "IMG_4664.JPEG", title: "White GMC Canyon AT4 Detail", category: "Truck Details", vehicle: "GMC Canyon AT4", label: "Finished Truck Detail", description: "White GMC truck detailed with clean paint, glass, tires, and a strong finished look." },
  { file: "IMG_4671.JPEG", title: "Jaguar F-PACE Exterior Detail", category: "Luxury SUVs", vehicle: "Jaguar F-PACE", label: "Finished Exterior Detail", description: "Gray Jaguar SUV cleaned and finished with dressed tires and a premium mobile detail result." }
];

export const beforeAfterPairs = [
  { title: "Mercedes Engine Bay Detail", before: "IMG_3490.JPEG", after: "IMG_3489.JPEG", beforeLabel: "Before", afterLabel: "After", description: "A dusty Mercedes engine bay cleaned and dressed for a more professional, presentable finish." },
  { title: "BMW M Foam Wash to Final Detail", before: "IMG_3736.JPEG", after: "IMG_3738.JPEG", beforeLabel: "Foam Wash", afterLabel: "Final Finish", description: "Foam wash process followed by a clean black BMW exterior detail with wheels and paint finished properly." },
  { title: "GMC Sierra Foam Wash to Final Detail", before: "IMG_4649.JPEG", after: "IMG_4650.JPEG", beforeLabel: "Foam Wash", afterLabel: "Final Finish", description: "Black GMC truck during the foam wash stage and after the completed exterior detail." }
] as const;

export const reviewImages = ["IMG_4429.JPEG", "IMG_4430.JPEG", "IMG_4431.JPEG", "IMG_4432.JPEG", "IMG_4433.JPEG", "IMG_4434.JPEG", "IMG_4435.JPEG", "IMG_4436.JPEG", "IMG_4437.JPEG", "IMG_4438.JPEG", "IMG_4439.JPEG", "IMG_4440.JPEG"];

export const serviceAreas = [
  { slug: "las-vegas", name: "Las Vegas", intro: "Premium mobile detailing for daily drivers, luxury vehicles, trucks, SUVs, and ceramic coating clients throughout Las Vegas." },
  { slug: "summerlin", name: "Summerlin", intro: "Mobile detailing in Summerlin for owners who want convenient, premium vehicle care at home or work." },
  { slug: "centennial-hills", name: "Centennial Hills", intro: "Mobile auto detailing in Centennial Hills with premium wash, interior, ceramic coating, and maintenance options." },
  { slug: "north-las-vegas", name: "North Las Vegas", intro: "Professional mobile detailing in North Las Vegas for cars, trucks, SUVs, and fleet-style maintenance needs." },
  { slug: "aliante", name: "Aliante", intro: "Convenient mobile detailing in Aliante for clean, protected vehicles without visiting a shop." },
  { slug: "henderson", name: "Henderson", intro: "Mobile detailing and ceramic coating services for Henderson drivers who want premium results with convenient service." }
];

export const faqs = [
  { q: "Do you come to me?", a: "Yes. Dripped Auto Detailing is mobile and serves Las Vegas, Summerlin, Centennial Hills, North Las Vegas, Aliante, and Henderson by appointment." },
  { q: "Do I need to provide water or power?", a: "No need to provide water or power, we bring our own supply of water and our own power generator." },
  { q: "How long does a detail take?", a: "Most details take 1.5 to 5 hours depending on the package, vehicle size, condition, and add-ons selected." },
  { q: "What is the best package for a full reset?", a: "The Dripped Out Detail is the signature full-service option, while the Interior Restore Detail is best when the inside needs deep shampooing, steam cleaning, and deodorization." },
  { q: "Is ceramic coating worth it in Las Vegas?", a: "Yes. Las Vegas heat, UV exposure, dust, and hard water can be rough on paint. Ceramic coating adds durable protection, gloss, hydrophobic behavior, and easier maintenance." },
  { q: "Are prices final?", a: "Listed prices are starting prices based on vehicle type. Excessive pet hair, heavy stains, extreme dirt, water spots, or paint correction needs may change the final quote." },
  { q: "Can I text for a quote?", a: "Yes. You can call or text 725-306-7008 with the vehicle year, make, model, location, and photos if needed." },
  { q: "Do maintenance plans require an initial detail?", a: "Yes. Maintenance plans require at least an Essential Detail before enrollment so the vehicle starts at the right standard." }
];

export const blogPosts = [
  {
    slug: "ceramic-coating-vs-wax-las-vegas",
    title: "Ceramic Coating vs Wax in Las Vegas: Which Protection Makes Sense?",
    excerpt: "A practical breakdown of wax, sealants, and ceramic coatings for Las Vegas heat, sun, dust, and daily driving.",
    body: "Las Vegas is tough on paint. Strong UV exposure, dust, wind, hard water, and frequent heat cycles can fade and dull a vehicle faster than many owners expect. Wax is a good short-term gloss booster and can add 2-3 months of protection. A sealant such as SIO3 can last longer and help the vehicle stay slick between washes. Ceramic coating is the stronger long-term option because it bonds to the paint and creates a durable layer that improves gloss, hydrophobic performance, and maintenance. For daily drivers, wax or sealant can be a smart budget choice. For new vehicles, black paint, luxury cars, and owners who want easier washing, ceramic coating is usually the better investment."
  },
  {
    slug: "how-often-should-you-detail-your-car-in-las-vegas",
    title: "How Often Should You Detail Your Car in Las Vegas?",
    excerpt: "How often Las Vegas drivers should book exterior, interior, and maintenance detailing based on heat, dust, and vehicle use.",
    body: "Most Las Vegas vehicles benefit from a proper detail every 4-8 weeks depending on use. Daily drivers that sit outside collect dust, bugs, road film, and UV damage faster than garage-kept vehicles. A monthly maintenance plan can keep the vehicle consistently clean, while a deeper full detail every few months helps protect the finish and interior. Ceramic coated vehicles are easier to maintain, but they still need safe washing to keep the coating performing well."
  },
  {
    slug: "protecting-your-car-from-las-vegas-heat",
    title: "Protecting Your Car From Las Vegas Heat",
    excerpt: "Why trim dressing, UV protection, paint sealants, and interior care matter for vehicles in Southern Nevada.",
    body: "Las Vegas heat affects paint, plastics, rubber, leather, vinyl, and interior surfaces. UV exposure can dry out trim, fade paint, and make interiors look older than they are. Regular detailing helps by removing grime before it bakes into surfaces and by applying protection to paint, trim, tires, leather, vinyl, and carpets. For the best results, combine safe washing, interior UV protection, and periodic wax, sealant, or ceramic coating protection."
  }
];
