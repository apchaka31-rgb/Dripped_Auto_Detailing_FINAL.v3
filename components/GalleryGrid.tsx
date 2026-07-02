import { galleryItems } from "@/lib/site";

export function GalleryGrid({ limit }: { limit?: number }) {
  const imgs = limit ? galleryItems.slice(0, limit) : galleryItems;
  return <div className="gallery-grid detailed-gallery">
    {imgs.map(item => <a key={item.file} href={`/gallery/${item.file}`} className="gallery-card detailed-card">
      <img loading="lazy" src={`/gallery/${item.file}`} alt={`${item.title} - ${item.vehicle} by Dripped Auto Detailing Las Vegas`} />
      <div className="gallery-caption">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.label}</p>
      </div>
    </a>)}
  </div>;
}
