import Link from "next/link";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const categories = [
  { name: "Men's Watches", slug: "mens", imagePath: "category-mens.jpg" },
  { name: "Women's Watches", slug: "womens", imagePath: "category-womens.jpg" },
  { name: "Pre-owned", slug: "pre-owned", imagePath: "category-preowned.jpg" },
  { name: "Pocket Watches", slug: "pocket", imagePath: "category-pocket.jpg" },
];

export function WaysIn() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center text-accent">
          Ways in
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <ImagePlaceholder
                src=""
                alt={category.name}
                uploadPath={getPlaceholderPath(category.imagePath)}
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                aspectRatio="1/1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                <h3 className="text-xl font-serif text-accent">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}