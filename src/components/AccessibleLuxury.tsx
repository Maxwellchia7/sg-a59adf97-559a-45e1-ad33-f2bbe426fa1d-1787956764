import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const deals = [
  {
    id: "deal-1",
    name: "GMT-Master II",
    brand: "Rolex",
    price: 18500,
    originalPrice: 21000,
    reference: "116710LN",
    imagePath: "product-rolex-gmt.jpg",
    description: "Pre-owned Rolex GMT-Master II in excellent condition",
    category: "mens" as const,
    image: "",
    images: [""],
    condition: "Excellent",
    features: ["Automatic movement", "40mm case", "Ceramic bezel"],
    inStock: true,
  },
  {
    id: "deal-2",
    name: "Seamaster Planet Ocean",
    brand: "Omega",
    price: 4200,
    originalPrice: 5400,
    reference: "232.30.42.21.01.003",
    imagePath: "product-omega-planet-ocean.jpg",
    description: "Pre-owned Omega Seamaster Planet Ocean",
    category: "mens" as const,
    image: "",
    images: [""],
    condition: "Very Good",
    features: ["Automatic movement", "42mm case", "600m water resistance"],
    inStock: true,
  },
  {
    id: "deal-3",
    name: "Portugieser Chronograph",
    brand: "IWC",
    price: 8900,
    originalPrice: 11200,
    reference: "IW371605",
    imagePath: "product-iwc-portugieser.jpg",
    description: "Pre-owned IWC Portugieser Chronograph",
    category: "mens" as const,
    image: "",
    images: [""],
    condition: "Excellent",
    features: ["Automatic movement", "41mm case", "Chronograph"],
    inStock: true,
  },
  {
    id: "deal-4",
    name: "Black Bay Fifty-Eight",
    brand: "Tudor",
    price: 3400,
    originalPrice: 4100,
    reference: "79030N",
    imagePath: "product-tudor-bb58.jpg",
    description: "Pre-owned Tudor Black Bay Fifty-Eight",
    category: "mens" as const,
    image: "",
    images: [""],
    condition: "Very Good",
    features: ["Automatic movement", "39mm case", "200m water resistance"],
    inStock: true,
  },
];

export function AccessibleLuxury() {
  const { addToCart } = useCart();

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-primary mb-2 tracking-wider uppercase">Accessible luxury</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
              Best deals
            </h2>
          </div>
          <Link href="/best-deals">
            <Button variant="outline">View all deals</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Save ${(product.originalPrice - product.price).toLocaleString()}
                  </div>
                  <ImagePlaceholder
                    src=""
                    alt={`${product.brand} ${product.name}`}
                    uploadPath={getPlaceholderPath(product.imagePath)}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    aspectRatio="1/1"
                  />
                </div>
                <h3 className="text-lg font-serif text-accent group-hover:text-primary transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-xl font-serif text-primary">
                    ${product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString()}
                  </p>
                </div>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4"
                onClick={() => addToCart(product, 1)}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to bag
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}