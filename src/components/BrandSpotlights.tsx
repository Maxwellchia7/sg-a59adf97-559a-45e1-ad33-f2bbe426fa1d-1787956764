import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const brands = [
  {
    name: "Rolex",
    description: "The crown. Timeless elegance and precision engineering. From the iconic Submariner to the prestigious Day-Date, Rolex represents the pinnacle of watchmaking excellence.",
    slug: "rolex",
    imagePath: "brand-rolex.jpg",
  },
  {
    name: "Patek Philippe",
    description: "The ultimate grail. Unparalleled craftsmanship and heritage since 1839. Each timepiece is a masterpiece of haute horlogerie, cherished across generations.",
    slug: "patek-philippe",
    imagePath: "brand-patek.jpg",
  },
  {
    name: "Audemars Piguet",
    description: "Breaking conventions. The Royal Oak revolutionized luxury sports watches. Bold design meets exceptional Swiss craftsmanship in every piece.",
    slug: "audemars-piguet",
    imagePath: "brand-ap.jpg",
  },
  {
    name: "Omega",
    description: "The moonwatch. Trusted by astronauts and James Bond alike. Precision timekeeping with a legacy of adventure and innovation.",
    slug: "omega",
    imagePath: "brand-omega.jpg",
  },
  {
    name: "Cartier",
    description: "Jeweller of kings. The Santos pioneered pilot watches. Where artistry meets horology in perfect harmony.",
    slug: "cartier",
    imagePath: "brand-cartier.jpg",
  },
];

export function BrandSpotlights() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 gap-16">
          {brands.map((brand, index) => (
            <div
              key={brand.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <ImagePlaceholder
                  src=""
                  alt={`${brand.name} watches`}
                  uploadPath={getPlaceholderPath(brand.imagePath)}
                  className="w-full rounded-lg"
                  aspectRatio="4/3"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="text-4xl font-serif font-light mb-4 text-accent">
                  {brand.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {brand.description}
                </p>
                <Link href={`/collections/${brand.slug}`}>
                  <Button variant="outline" className="group">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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