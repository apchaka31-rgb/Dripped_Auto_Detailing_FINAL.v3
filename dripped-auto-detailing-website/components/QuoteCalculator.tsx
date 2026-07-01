"use client";
import { useMemo, useState } from "react";
import { addOns, services, vehicleTypes, site, type VehicleId } from "@/lib/site";

export function QuoteCalculator() {
  const priced = services.filter(s => s.prices);
  const [vehicle, setVehicle] = useState<VehicleId>("sedan");
  const [service, setService] = useState(priced[0].slug);
  const [selected, setSelected] = useState<string[]>([]);
  const active = priced.find(s => s.slug === service) || priced[0];
  const total = useMemo(() => {
    const base = active.prices?.[vehicle] || 0;
    const extras = selected.reduce((sum, id) => sum + (addOns.find(a => a.id === id)?.price || 0), 0);
    return base + extras;
  }, [active, vehicle, selected]);
  const msg = encodeURIComponent(`Hi, I want a quote. Vehicle type: ${vehicleTypes.find(v=>v.id===vehicle)?.label}. Package: ${active.name}. Add-ons: ${selected.join(", ") || "none"}. Estimated total: $${total}.`);
  return <div className="calculator">
    <div><label>Vehicle type</label><select value={vehicle} onChange={e=>setVehicle(e.target.value as VehicleId)}>{vehicleTypes.map(v => <option key={v.id} value={v.id}>{v.label}</option>)}</select></div>
    <div><label>Package</label><select value={service} onChange={e=>setService(e.target.value)}>{priced.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select></div>
    <div className="calc-addons"><label>Add-ons</label>{addOns.map(a => <button key={a.id} type="button" onClick={()=>setSelected(prev => prev.includes(a.id) ? prev.filter(x=>x!==a.id) : [...prev, a.id])} className={selected.includes(a.id) ? "active" : ""}>{a.name} <span>${a.price}{"max" in a ? `-$${a.max}` : ""}</span></button>)}</div>
    <div className="calc-total"><span>Estimated Total</span><strong>${total}</strong><small>Final quote may vary by condition, size, stains, pet hair, water spots, or correction needs.</small><a className="btn" href={`${site.smsHref}?body=${msg}`}>Text This Quote</a></div>
  </div>
}
