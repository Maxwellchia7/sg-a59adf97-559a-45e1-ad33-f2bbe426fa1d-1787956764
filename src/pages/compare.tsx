import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProxiedImage } from "@/components/ProxiedImage";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useCompare } from "@/contexts/CompareContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { ArrowLeft, X, ShoppingBag } from "lucide-react";

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  if (compareList.length === 0) {
    return (
      <>
        <SEO title="Compare Watches - Maison Caldor" description="Compare luxury watches side-by-side" />
        <Navigation />
        <main className="min-h-screen pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl mb-6">Compare Watches</h1>
            <p className="text-muted-foreground mb-8">
              You haven&apos;t selected any watches to compare yet.
            </p>
            <Link href="/shop">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Browse Watches
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <SEO title="Compare Watches - Maison Caldor" description="Compare luxury watches side-by-side" />
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link href="/shop" className="text-primary hover:underline mb-4 inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Shop
              </Link>
              <h1 className="font-serif text-4xl">Compare Watches</h1>
            </div>
            <Button variant="outline" onClick={clearCompare}>
              Clear All
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${compareList.length}, 1fr)` }}>
                {compareList.map((product) => (
                  <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden">
                    <div className="relative">
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-destructive hover:text-destructive-foreground transition-colors z-10"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="relative aspect-square bg-muted">
                        <ProxiedImage
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          {product.brand}
                        </p>
                        <Link href={`/products/${product.id}`}>
                          <h3 className="font-serif text-xl font-light hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price</span>
                          <span className="text-primary font-medium text-lg">{formatPrice(product.price)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Reference</span>
                          <span className="font-mono">{product.reference}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Condition</span>
                          <span className="capitalize">{product.condition.split("-").join(" ")}</span>
                        </div>
                        {product.year && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Year</span>
                            <span>{product.year}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-border space-y-2">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Features</p>
                        <ul className="space-y-1 text-sm">
                          {product.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="text-muted-foreground">• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 pt-4">
                        <Link href={`/products/${product.id}`} className="block">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="default"
                          className="w-full"
                          onClick={() => addToCart(product, 1)}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Add to Bag
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}