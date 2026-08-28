import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProxiedImage } from "./ProxiedImage";
import { Button } from "./ui/button";
import { useCompare } from "@/contexts/CompareContext";
import { useCurrency } from "@/contexts/CurrencyContext";

export function CompareDrawer() {
  const { compareList, removeFromCompare, clearCompare, compareCount } = useCompare();
  const { formatPrice } = useCurrency();

  if (compareCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl z-40 transition-all">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-xl">Compare Products ({compareCount}/4)</h3>
            {compareCount >= 2 && (
              <Link href="/compare">
                <Button variant="default" size="sm">
                  Compare Now <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={clearCompare}>
            Clear All
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {compareList.map((product) => (
            <div key={product.id} className="relative bg-muted rounded-lg p-3">
              <button
                onClick={() => removeFromCompare(product.id)}
                className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 hover:bg-destructive hover:text-destructive-foreground transition-colors z-10"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-square mb-2">
                <ProxiedImage
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {product.brand}
              </p>
              <p className="text-sm font-light line-clamp-2 mb-1">{product.name}</p>
              <p className="text-sm text-primary font-medium">{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}