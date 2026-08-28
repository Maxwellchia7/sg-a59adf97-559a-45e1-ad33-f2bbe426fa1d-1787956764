import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    name: "Rolex",
    description: "The crown of horology. Explore our authenticated Rolex collection.",
    image: "/generated/collection-rolex.png",
    href: "/collections/rolex",
    count: "15+ timepieces",
  },
  {
    name: "Patek Philippe",
    description: "Geneva's finest. Rare complications and investment pieces.",
    image: "/generated/collection-patek.png",
    href: "/collections/patek-philippe",
    count: "8+ timepieces",
  },
  {
    name: "Audemars Piguet",
    description: "Revolutionary design. Royal Oak and beyond.",
    image: "/generated/collection-ap.png",
    href: "/collections/audemars-piguet",
    count: "6+ timepieces",
  },
  {
    name: "Omega",
    description: "Precision heritage. Speedmaster, Seamaster legends.",
    image: "/generated/collection-omega.png",
    href: "/collections/omega",
    count: "10+ timepieces",
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
            Featured collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of the world's most prestigious watch manufactures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-light mb-2 text-foreground group-hover:text-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary uppercase tracking-wider">
                    {collection.count}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections">
            <Button size="lg" variant="outline">
              View all collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}