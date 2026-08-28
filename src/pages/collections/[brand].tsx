import Link from "next/link";
import { useRouter } from "next/router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProxiedImage } from "@/components/ProxiedImage";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, GitCompare } from "lucide-react";
import { products, getProductsByBrand } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCompare } from "@/contexts/CompareContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { SEO } from "@/components/SEO";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Product } from "@/types/product";

interface CollectionPageProps {
  brand: string;
  brandProducts: Product[];
}

const brandInfo: Record<string, { title: string; description: string; heritage: string }> = {
  rolex: {
    title: "Rolex Collection",
    description: "The crown jewel of Swiss watchmaking, Rolex represents unparalleled precision and prestige.",
    heritage: "Founded in 1905, Rolex has set the standard for luxury timepieces with innovations like the waterproof Oyster case and the self-winding Perpetual movement."
  },
  "patek-philippe": {
    title: "Patek Philippe Collection",
    description: "The epitome of haute horlogerie, Patek Philippe creates timepieces of extraordinary complexity and beauty.",
    heritage: "Established in 1839, Patek Philippe is renowned for creating some of the world's most complicated mechanical watches and maintaining the highest standards of Geneva craftsmanship."
  },
  "audemars-piguet": {
    title: "Audemars Piguet Collection",
    description: "Revolutionary design meets traditional Swiss craftsmanship in every Audemars Piguet timepiece.",
    heritage: "Since 1875, Audemars Piguet has remained family-owned, producing bold, innovative watches including the iconic Royal Oak."
  },
  omega: {
    title: "Omega Collection",
    description: "From the moon to the depths of the ocean, Omega has been present at humanity's greatest achievements.",
    heritage: "Founded in 1848, Omega has been the official timekeeper of the Olympics and the choice of astronauts, combining precision with elegant design."
  },
  cartier: {
    title: "Cartier Collection",
    description: "Where jewelry artistry meets watchmaking excellence, Cartier creates timepieces of timeless elegance.",
    heritage: "Since 1847, Cartier has been the jeweler and watchmaker of royalty, known for iconic designs like the Santos and Tank."
  }
};

export default function CollectionPage({ brand, brandProducts }: CollectionPageProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCompare, removeFromCompare, isInCompare, compareCount } = useCompare();
  const { formatPrice } = useCurrency();
  const brandSlug = brand.toLowerCase().replace(/ /g, "-");
  const info = brandInfo[brandSlug] || {
    title: `${brand} Collection`,
    description: `Explore our curated selection of ${brand} luxury timepieces.`,
    heritage: `Discover the finest ${brand} watches.`
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  return (
    <>
      <SEO 
        title={`${info.title} - Maison Caldor`}
        description={info.description}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Collection Hero */}
        <div className="relative h-[50vh] min-h-[400px] bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/generated/collection-${brandSlug === "patek-philippe" ? "patek" : brandSlug === "audemars-piguet" ? "ap" : brandSlug}.png')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="container relative h-full flex flex-col justify-end pb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 text-foreground">
              {info.title}
            </h1>
            <p className="text-xl text-accent max-w-2xl">
              {info.description}
            </p>
          </div>
        </div>

        {/* Heritage Section */}
        <div className="py-16 border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-light mb-6 text-foreground">Heritage</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {info.heritage}
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-light text-foreground">
                Available Timepieces
              </h2>
              <p className="text-muted-foreground">
                {brandProducts.length} watches
              </p>
            </div>

            {brandProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandProducts.map((product) => {
                  const inWishlist = isInWishlist(product.id);
                  const inCompare = isInCompare(product.id);
                  
                  return (
                    <div
                      key={product.id}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <Link href={`/products/${product.id}`}>
                        <div className="relative aspect-square bg-muted overflow-hidden">
                          <ProxiedImage
                            src={product.image}
                            alt={`${product.brand} ${product.name}`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-8">
                  No watches currently available in this collection.
                </p>
                <Link href="/shop">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View All Collections
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const brands = ["rolex", "patek-philippe", "audemars-piguet", "omega", "cartier"];
  
  return {
    paths: brands.map(brand => ({
      params: { brand }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brand = params?.brand as string;
  
  if (!brand) {
    return {
      notFound: true,
    };
  }

  const brandProducts = getProductsByBrand(brand);
  
  if (!brandProducts || brandProducts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brand,
      brandProducts,
    },
  };
};