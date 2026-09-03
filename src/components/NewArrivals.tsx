import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, GitCompare } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCompare } from "@/contexts/CompareContext";
import { useCurrency } from "@/contexts/CurrencyContext";

// Use first 6 products from products.ts
const newProducts = products.slice(0, 6);

export function NewArrivals() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCompare, removeFromCompare, isInCompare, compareCount } = useCompare();
  const { formatPrice } = useCurrency();

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
              New arrivals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover the latest additions to our collection. Each timepiece has been authenticated and prepared for your consideration.
            </p>
          </div>
          <Link href="/shop">
            <Button variant="outline" size="lg">
              View all watches
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const inCompare = isInCompare(product.id);

            return (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.name}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (inWishlist) {
                            removeFromWishlist(product.id);
                          } else {
                            addToWishlist(product);
                          }
                        }}
                        className={`bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border hover:bg-background transition-all ${
                          inWishlist ? "text-red-500" : ""
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (inCompare) {
                            removeFromCompare(product.id);
                          } else if (compareCount < 4) {
                            addToCompare(product);
                          }
                        }}
                        className={`bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border hover:bg-background transition-all ${
                          inCompare ? "text-primary" : ""
                        }`}
                        disabled={!inCompare && compareCount >= 4}
                      >
                        <GitCompare className={`h-5 w-5 ${inCompare ? "fill-current" : ""}`} />
                      </button>
                    </div>
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
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-2xl font-light text-primary">
                      {formatPrice(product.price)}
                    </p>
                    {product.year && (
                      <span className="text-sm text-muted-foreground">
                        {product.year}
                      </span>
                    )}
                  </div>
                  {product.condition && (
                    <p className="text-sm text-muted-foreground mb-3 capitalize">
                      {product.condition.split("-").join(" ")}
                    </p>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => addToCart(product, 1)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to bag
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}