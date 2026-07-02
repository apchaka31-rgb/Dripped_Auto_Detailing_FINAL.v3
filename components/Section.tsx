export function Section({ eyebrow, title, children, center=false }: { eyebrow?: string; title?: string; children: React.ReactNode; center?: boolean }) {
  return <section className={`section ${center ? "center" : ""}`}>
    {(eyebrow || title) && <div className="section-head"><span>{eyebrow}</span>{title && <h2>{title}</h2>}</div>}
    {children}
  </section>
}
