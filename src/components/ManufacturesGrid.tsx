import Link from "next/link";

const manufactures = [
  { name: "Rolex", count: "50,147", slug: "rolex" },
  { name: "Patek Philippe", count: "19,688", slug: "patek-philippe" },
  { name: "Audemars Piguet", count: "12,455", slug: "audemars-piguet" },
  { name: "Omega", count: "28,922", slug: "omega" },
  { name: "Cartier", count: "15,678", slug: "cartier" },
  { name: "IWC", count: "9,234", slug: "iwc" },
  { name: "Jaeger-LeCoultre", count: "7,890", slug: "jaeger-lecoultre" },
  { name: "Vacheron Constantin", count: "6,123", slug: "vacheron-constantin" },
  { name: "A. Lange & Söhne", count: "4,567", slug: "a-lange-sohne" },
  { name: "Breguet", count: "5,234", slug: "breguet" },
  { name: "Blancpain", count: "4,890", slug: "blancpain" },
  { name: "Girard-Perregaux", count: "3,456", slug: "girard-perregaux" },
  { name: "Panerai", count: "8,765", slug: "panerai" },
  { name: "TAG Heuer", count: "12,345", slug: "tag-heuer" },
  { name: "Breitling", count: "11,234", slug: "breitling" },
  { name: "Tudor", count: "14,567", slug: "tudor" },
  { name: "Zenith", count: "6,789", slug: "zenith" },
  { name: "Hublot", count: "7,890", slug: "hublot" },
  { name: "Bell & Ross", count: "5,678", slug: "bell-ross" },
  { name: "Chopard", count: "6,543", slug: "chopard" },
  { name: "Longines", count: "15,432", slug: "longines" },
  { name: "Oris", count: "8,901", slug: "oris" },
  { name: "Grand Seiko", count: "5,432", slug: "grand-seiko" },
  { name: "Ulysse Nardin", count: "4,321", slug: "ulysse-nardin" },
  { name: "H. Moser & Cie", count: "2,345", slug: "h-moser-cie" },
  { name: "F.P. Journe", count: "1,789", slug: "fp-journe" },
];

export function ManufacturesGrid() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-primary mb-2 tracking-wider uppercase">26 Manufactures</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
            Browse by brand
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {manufactures.map((brand) => (
            <Link
              key={brand.name}
              href={`/collections/${brand.slug}`}
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <h3 className="font-serif text-accent group-hover:text-primary transition-colors mb-2">
                {brand.name}
              </h3>
              <p className="text-xs text-muted-foreground">{brand.count} watches</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}