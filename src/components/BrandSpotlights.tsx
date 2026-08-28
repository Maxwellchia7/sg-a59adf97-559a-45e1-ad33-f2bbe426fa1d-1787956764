import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const brands = [
  {
    name: "Rolex",
    slug: "rolex",
    description: "The crown of horology. Discover our collection of authenticated Rolex timepieces, from the iconic Submariner to the timeless Datejust. Each watch represents the pinnacle of Swiss watchmaking excellence.",
    image: "/brands/rolex.png",
  },
  {
    name: "Patek Philippe",
    slug: "patek-philippe",
    description: "The art of watchmaking perfected. Explore rare and sought-after Patek Philippe pieces, including the legendary Nautilus and Calatrava collections. Investment-grade timepieces for the connoisseur.",
    image: "/brands/patek-philippe.png",
  },
  {
    name: "Audemars Piguet",
    slug: "audemars-piguet",
    description: "Avant-garde haute horlogerie. From the revolutionary Royal Oak to contemporary complications, each Audemars Piguet watch pushes the boundaries of traditional watchmaking.",
    image: "/brands/audemars-piguet.png",
  },
  {
    name: "Omega",
    slug: "omega",
    description: "Precision with heritage. The Speedmaster Moonwatch, Seamaster diving legends, and more. Omega combines technical innovation with timeless design in every timepiece.",
    image: "/brands/omega.png",
  },
  {
    name: "Cartier",
    slug: "cartier",
    description: "Jeweler of kings, king of jewelers. Discover elegant dress watches including the Tank, Santos, and Ballon Bleu. Where haute joaillerie meets haute horlogerie.",
    image: "/brands/cartier.png",
  },
];

export function BrandSpotlights() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="space-y-24">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <Link href={`/collections/${brand.slug}`} className="block group">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <img
                      src={brand.image}
                      alt={`${brand.name} collection`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
                  {brand.name}
                </h2>
                <p className="text-lg text-accent/80 leading-relaxed mb-8">
                  {brand.description}
                </p>
                <Link href={`/collections/${brand.slug}`}>
                  <Button variant="outline" size="lg">
                    Explore collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}