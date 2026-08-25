import Link from "next/link";

const signatures = [
  {
    name: "Datejust",
    brand: "Rolex",
    description: "The quintessential dress watch",
    image: "/signatures/datejust.jpg",
    href: "/collections/rolex?model=datejust",
  },
  {
    name: "Submariner",
    brand: "Rolex",
    description: "Dive watch icon since 1953",
    image: "/signatures/submariner.jpg",
    href: "/collections/rolex?model=submariner",
  },
  {
    name: "Daytona",
    brand: "Rolex",
    description: "Racing chronograph legend",
    image: "/signatures/daytona.jpg",
    href: "/collections/rolex?model=daytona",
  },
  {
    name: "Nautilus",
    brand: "Patek Philippe",
    description: "Sports elegance redefined",
    image: "/signatures/nautilus.jpg",
    href: "/collections/patek-philippe?model=nautilus",
  },
];

export function Signatures() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-primary mb-2 tracking-wider uppercase">Signature models</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
            Icons of horology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatures.map((sig) => (
            <Link
              key={`${sig.brand}-${sig.name}`}
              href={sig.href}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={sig.image}
                  alt={`${sig.brand} ${sig.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-serif text-accent group-hover:text-primary transition-colors mb-1">
                {sig.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{sig.brand}</p>
              <p className="text-xs text-accent/60">{sig.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}