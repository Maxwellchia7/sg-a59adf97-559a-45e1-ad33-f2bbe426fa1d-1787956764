import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProxiedImage } from "@/components/ProxiedImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Heart, Share2, ChevronLeft, ChevronRight, Check, MessageCircle, Shield, Truck, RotateCcw } from "lucide-react";
import { products, getProductById } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { SEO } from "@/components/SEO";
import type { Product } from "@/types/product";
import type { GetStaticProps, GetStaticPaths } from "next";

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPage({ product, relatedProducts }: ProductPageProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/cart");
  };

  const whatsappMessage = `Hi, I'm interested in the ${product.brand} ${product.name} (Ref: ${product.reference})`;
  const whatsappUrl = `https://wa.me/16462440064?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <SEO 
        title={`${product.brand} ${product.name} - Maison Caldor`}
        description={product.description}
        image={product.image}
      />
      <Navigation />
      <main className="min-h-screen py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 space-y-4">
                <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                  <ProxiedImage
                    src={product.images[selectedImage]}
                    alt={`${product.brand} ${product.name}`}
                    fill
                    className="object-contain"
                    priority
                  />
                  
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImage(selectedImage - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => setSelectedImage(selectedImage + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>

                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative aspect-square bg-muted rounded overflow-hidden border-2 transition-all ${
                          idx === selectedImage
                            ? "border-primary"
                            : "border-transparent hover:border-border"
                        }`}
                      >
                        <ProxiedImage
                          src={img}
                          alt={`${product.brand} ${product.name} - View ${idx + 1}`}
                          fill
                          className="object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    {product.condition.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </Badge>
                  {product.inStock && (
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      <Check className="h-3 w-3 mr-1" />
                      In Stock
                    </Badge>
                  )}
                </div>
                <p className="text-5xl font-light text-primary mb-6">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-semibold mb-3 text-foreground">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3 text-foreground">Specifications</h2>
                <div className="space-y-2">
                  {product.year && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Year</span>
                      <span className="text-foreground font-medium">{product.year}</span>
                    </div>
                  )}
                  {product.reference && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Reference</span>
                      <span className="text-foreground font-medium">{product.reference}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Condition</span>
                    <span className="text-foreground font-medium capitalize">
                      {product.condition.split("-").join(" ")}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3 text-foreground">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleBuyNow}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Buy Now
                  </Button>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full hover:bg-accent/10"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Inquire via WhatsApp
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">5-Year Warranty</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-serif font-light mb-8 text-foreground">
                Similar Timepieces
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                      <ProxiedImage
                        src={relatedProduct.image}
                        alt={`${relatedProduct.brand} ${relatedProduct.name}`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {relatedProduct.brand}
                    </p>
                    <h4 className="font-serif font-light group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-lg text-primary mt-2">
                      ${relatedProduct.price.toLocaleString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(product => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const productId = params?.id as string;
  const product = getProductById(productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  const relatedProducts = products
    .filter(p => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  return {
    props: {
      product,
      relatedProducts,
    },
    revalidate: 60,
  };
};