const items = [
  "Reformas Integrales",
  "Baños & Cocinas",
  "Albañilería",
  "Fontanería",
  "Electricidad",
  "Pavimentos",
  "Cerramientos",
  "Obras Exteriores",
  "Plasencia · Cáceres · Extremadura",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/10 py-4 bg-surface">
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-sm font-medium tracking-widest uppercase text-stone whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
