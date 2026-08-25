import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

const collections = [
  {
    name: "Rolex",
    slug: "rolex",
    image: "/generated/collection-rolex.png",
    description: "The crown jewel of Swiss watchmaking, representing unparalleled precision and prestige.",
  },
  {
    name: "Patek Philippe",
    slug: "patek-philippe",
    image: "/generated/collection-patek.png",
    description: "The epitome of haute horlogerie, creating timepieces of extraordinary complexity.",
  },
  {
    name: "Audemars Piguet",
    slug: "audemars-piguet",
    image: "/generated/collection-ap.png",
    description: "Revolutionary design meets traditional Swiss craftsmanship.",
  },
  {
    name: "Omega",
    slug: "omega",
    image: "/generated/collection-omega.png",
    description: "From the moon to the depths of the ocean, present at humanity's greatest achievements.",
  },
  {
    name: "Cartier",
    slug: "cartier",
    image: "/generated/product-cartier-santos.png",
    description: "Where jewelry artistry meets watchmaking excellence.",
  },
];

export default function CollectionsPage() {
  const getCollectionCount = (brand: string) => {
    return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase()).length;
  };

  return (
    <>
      <SEO 
        title="Watch Collections - Maison Caldor"
        description="Explore our curated collections of luxury watches from the world's finest watchmakers including Rolex, Patek Philippe, and Audemars Piguet."
      />
      <Navigation />
      <main className="min-h-screen py-12">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-foreground">
              Our Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover authenticated luxury timepieces from the world's most prestigious watchmakers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {collections.map(collection => {
              const count = getCollectionCount(collection.name);
              return (
                <Link
                  key={collection.slug}
                  href={`/collections/${collection.slug}`}
                  className="group relative h-[500px] rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${collection.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-4xl font-serif font-light mb-3 text-foreground group-hover:text-primary transition-colors">
                      {collection.name}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent">
                        {count} timepiece{count !== 1 ? "s" : ""} available
                      </span>
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}