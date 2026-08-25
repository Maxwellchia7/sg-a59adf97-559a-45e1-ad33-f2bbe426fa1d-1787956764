import Link from "next/link";

const manufactures = [
  { name: "Rolex", count: "50,147", slug: "rolex" },
  { name: "Patek Philippe", count: "19,688", slug: "patek-philippe" },
  { name: "Audemars Piguet", count: "12,403", slug: "audemars-piguet" },
  { name: "Omega", count: "45,234", slug: "omega" },
  { name: "Cartier", count: "18,976", slug: "cartier" },
  { name: "IWC", count: "15,432", slug: "iwc" },
  { name: "Jaeger-LeCoultre", count: "9,876", slug: "jaeger-lecoultre" },
  { name: "Vacheron Constantin", count: "7,234", slug: "vacheron-constantin" },
  { name: "A. Lange & Söhne", count: "4,567", slug: "a-lange-sohne" },
  { name: "Breguet", count: "6,789", slug: "breguet" },
  { name: "Chopard", count: "8,234", slug: "chopard" },
  { name: "Hublot", count: "11,432", slug: "hublot" },
  { name: "Panerai", count: "13,567", slug: "panerai" },
  { name: "TAG Heuer", count: "28,976", slug: "tag-heuer" },
  { name: "Breitling", count: "24,567", slug: "breitling" },
  { name: "Tudor", count: "32,145", slug: "tudor" },
  { name: "Longines", count: "21,789", slug: "longines" },
  { name: "Zenith", count: "7,432", slug: "zenith" },
  { name: "Bell & Ross", count: "9,123", slug: "bell-ross" },
  { name: "Glashütte Original", count: "5,876", slug: "glashutte-original" },
  { name: "Blancpain", count: "6,234", slug: "blancpain" },
  { name: "Oris", count: "14,567", slug: "oris" },
  { name: "Maurice Lacroix", count: "8,976", slug: "maurice-lacroix" },
  { name: "Montblanc", count: "11,234", slug: "montblanc" },
  { name: "Baume & Mercier", count: "9,876", slug: "baume-mercier" },
  { name: "Tissot", count: "18,432", slug: "tissot" },
];

export function ManufacturesGrid() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center text-accent">
          Manufactures
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {manufactures.map((brand) => (
            <Link
              key={brand.slug}
              href={`/collections/${brand.slug}`}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <p className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {brand.name}
              </p>
              <p className="text-xs text-muted-foreground">{brand.count} watches</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}