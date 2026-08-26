import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { useCart } from "@/contexts/CartContext";
import { products, filterProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, SlidersHorizontal } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  const brands = Array.from(new Set(products.map(p => p.brand)));

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    if (priceRange === "under-10k") {
      filtered = filtered.filter(p => p.price < 10000);
    } else if (priceRange === "10k-30k") {
      filtered = filtered.filter(p => p.price >= 10000 && p.price < 30000);
    } else if (priceRange === "30k-plus") {
      filtered = filtered.filter(p => p.price >= 30000);
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "brand") {
      filtered.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    return filtered;
  }, [selectedBrands, sortBy, priceRange]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  return (
    <>
      <SEO title="Discover Watches - Maison Caldor" description="Browse our curated collection of authenticated luxury timepieces" />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif text-accent mb-12">
            Discover watches
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-semibold mb-4 text-foreground">Brand</h3>
                  <div className="space-y-3">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <Label
                          htmlFor={`brand-${brand}`}
                          className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-foreground">Price Range</h3>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                      <SelectItem value="30k-plus">$30,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {selectedBrands.length > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setSelectedBrands([])}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} watches
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="brand">Brand: A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <Link href={`/products/${product.id}`}>
                      <div className="relative aspect-square bg-muted overflow-hidden">
                        <Image
                          src={product.image}
                          alt={`${product.brand} ${product.name}`}
                          fill
                          unoptimized
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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