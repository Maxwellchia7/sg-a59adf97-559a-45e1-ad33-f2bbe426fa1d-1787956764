import Link from "next/link";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const complications = [
  { name: "Chronographs", slug: "chronographs", imagePath: "complication-chronograph.jpg" },
  { name: "Dive Watches", slug: "dive", imagePath: "complication-dive.jpg" },
  { name: "Dress Watches", slug: "dress", imagePath: "complication-dress.jpg" },
];

export function ByComplication() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center text-accent">
          By complication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complications.map((complication) => (
            <Link
              key={complication.slug}
              href={`/collections/${complication.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <ImagePlaceholder
                src=""
                alt={complication.name}
                uploadPath={getPlaceholderPath(complication.imagePath)}
                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                aspectRatio="4/3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-serif text-accent">{complication.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}