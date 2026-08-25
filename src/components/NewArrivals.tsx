import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Submariner Date",
    brand: "Rolex",
    price: 14500,
    image: "/generated/product-rolex-sub.png",
  },
  {
    id: "2",
    name: "Nautilus 5711",
    brand: "Patek Philippe",
    price: 89500,
    image: "/generated/product-patek-nautilus.png",
  },
  {
    id: "3",
    name: "Royal Oak 15400",
    brand: "Audemars Piguet",
    price: 32500,
    image: "/generated/product-ap-royaloak.png",
  },
  {
    id: "4",
    name: "Speedmaster Professional",
    brand: "Omega",
    price: 6200,
    image: "/generated/product-omega-speedmaster.png",
  },
  {
    id: "5",
    name: "Daytona Platinum",
    brand: "Rolex",
    price: 75000,
    image: "/generated/product-rolex-daytona.png",
  },
  {
    id: "6",
    name: "Santos de Cartier",
    brand: "Cartier",
    price: 7800,
    image: "/generated/product-cartier-santos.png",
  },
];

export function NewArrivals() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
            New Arrivals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recently authenticated timepieces, ready for their next collector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square bg-muted overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-xl font-serif font-light mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-light text-primary">
                    ${product.price.toLocaleString()}
                  </p>
                  <Button size="sm" variant="outline" className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Watches
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}