import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    name: "Rolex",
    slug: "rolex",
    description: "The crown jewel of horology",
    image: "/generated/collection-rolex.png",
  },
  {
    name: "Patek Philippe",
    slug: "patek-philippe",
    description: "Timeless elegance since 1839",
    image: "/generated/collection-patek.png",
  },
  {
    name: "Audemars Piguet",
    slug: "audemars-piguet",
    description: "Swiss craftsmanship redefined",
    image: "/generated/collection-ap.png",
  },
  {
    name: "Omega",
    slug: "omega",
    description: "Precision and innovation",
    image: "/generated/collection-omega.png",
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
            Featured Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection from the world's most prestigious watchmakers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${collection.image}')` }}
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-background via-background/95 to-transparent absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl font-serif font-light mb-2 text-foreground group-hover:text-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {collection.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Collection
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}