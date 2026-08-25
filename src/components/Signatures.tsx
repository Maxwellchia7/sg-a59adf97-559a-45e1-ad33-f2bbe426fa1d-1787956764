import Link from "next/link";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const signatures = [
  { name: "Datejust", brand: "Rolex", slug: "datejust", imagePath: "signature-datejust.jpg" },
  { name: "Submariner", brand: "Rolex", slug: "submariner", imagePath: "signature-submariner.jpg" },
  { name: "Daytona", brand: "Rolex", slug: "daytona", imagePath: "signature-daytona.jpg" },
  { name: "Nautilus", brand: "Patek Philippe", slug: "nautilus", imagePath: "signature-nautilus.jpg" },
];

export function Signatures() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center text-accent">
          Signatures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatures.map((signature) => (
            <Link
              key={signature.slug}
              href={`/collections/${signature.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <ImagePlaceholder
                  src=""
                  alt={`${signature.brand} ${signature.name}`}
                  uploadPath={getPlaceholderPath(signature.imagePath)}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  aspectRatio="1/1"
                />
              </div>
              <h3 className="text-lg font-serif text-accent group-hover:text-primary transition-colors">
                {signature.name}
              </h3>
              <p className="text-sm text-muted-foreground">{signature.brand}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}