import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const newProducts = [
  {
    id: "new-1",
    name: "Submariner Date",
    brand: "Rolex",
    price: 14500,
    reference: "116610LN",
    image: "/products/rolex-submariner-116610ln.jpg",
    description: "Pre-owned Rolex Submariner Date",
    category: "mens" as const,
    images: ["/products/rolex-submariner-116610ln.jpg"],
    condition: "excellent" as const,
    features: ["Automatic movement", "40mm case", "Ceramic bezel", "300m water resistance"],
    inStock: true,
  },
  {
    id: "new-2",
    name: "Royal Oak Chronograph",
    brand: "Audemars Piguet",
    price: 52000,
    reference: "26331ST.OO.1220ST.03",
    image: "/products/ap-royaloak-chrono.jpg",
    description: "Pre-owned Audemars Piguet Royal Oak Chronograph",
    category: "mens" as const,
    images: ["/products/ap-royaloak-chrono.jpg"],
    condition: "excellent" as const,
    features: ["Automatic movement", "41mm case", "Chronograph", "Iconic design"],
    inStock: true,
  },
  {
    id: "new-3",
    name: "Speedmaster Moonwatch",
    brand: "Omega",
    price: 6200,
    reference: "311.30.42.30.01.005",
    image: "/products/omega-speedmaster.jpg",
    description: "Pre-owned Omega Speedmaster Professional Moonwatch",
    category: "mens" as const,
    images: ["/products/omega-speedmaster.jpg"],
    condition: "very-good" as const,
    features: ["Manual-wind movement", "42mm case", "Chronograph", "Hesalite crystal"],
    inStock: true,
  },
  {
    id: "new-4",
    name: "Tank Must",
    brand: "Cartier",
    price: 3800,
    reference: "WSTA0041",
    image: "/products/cartier-tank.jpg",
    description: "Pre-owned Cartier Tank Must",
    category: "womens" as const,
    images: ["/products/cartier-tank.jpg"],
    condition: "excellent" as const,
    features: ["Quartz movement", "33mm case", "Sapphire crystal"],
    inStock: true,
  },
  {
    id: "new-5",
    name: "Aquanaut",
    brand: "Patek Philippe",
    price: 42000,
    reference: "5167A-001",
    image: "/products/patek-aquanaut.jpg",
    description: "Pre-owned Patek Philippe Aquanaut",
    category: "mens" as const,
    images: ["/products/patek-aquanaut.jpg"],
    condition: "excellent" as const,
    features: ["Automatic movement", "40mm case", "120m water resistance"],
    inStock: true,
  },
  {
    id: "new-6",
    name: "Seamaster Diver 300M",
    brand: "Omega",
    price: 5400,
    reference: "210.30.42.20.01.001",
    image: "/products/omega-seamaster.jpg",
    description: "Pre-owned Omega Seamaster Diver 300M",
    category: "mens" as const,
    images: ["/products/omega-seamaster.jpg"],
    condition: "very-good" as const,
    features: ["Automatic movement", "42mm case", "300m water resistance", "Helium valve"],
    inStock: true,
  },
];

export function NewArrivals() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-primary mb-2 tracking-wider uppercase">From the atelier</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
              New arrivals
            </h2>
          </div>
          <Link href="/new-arrivals">
            <Button variant="outline">View all</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.id}`} className="block mb-4">
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-serif text-accent group-hover:text-primary transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                <p className="text-sm font-mono text-muted-foreground mb-2">{product.reference}</p>
                <p className="text-xl font-serif text-primary">
                  ${product.price.toLocaleString()}
                </p>
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