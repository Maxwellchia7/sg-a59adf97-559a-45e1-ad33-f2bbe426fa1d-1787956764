import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = cart.items.find(i => i.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + delta);
    }
  };

  if (cart.items.length === 0) {
    return (
      <>
        <SEO title="Shopping Cart - Maison Caldor" />
        <Navigation />
        <main className="min-h-screen py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
              <h1 className="text-4xl font-serif font-light mb-4 text-foreground">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our collection of authenticated luxury timepieces
              </p>
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse Collection
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <SEO title="Shopping Cart - Maison Caldor" />
      <Navigation />
      <main className="min-h-screen py-12">
        <div className="container">
          <h1 className="text-5xl font-serif font-light mb-12 text-foreground">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.items.map(item => (
                <div
                  key={item.product.id}
                  className="bg-card border border-border rounded-lg p-6 flex gap-6"
                >
                  <Link href={`/products/${item.product.id}`} className="flex-shrink-0">
                    <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url('${item.product.image}')` }}
                      />
                    </div>
                  </Link>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {item.product.brand}
                        </p>
                        <Link href={`/products/${item.product.id}`}>
                          <h3 className="text-xl font-serif font-light text-foreground hover:text-primary transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    <p className="text-2xl font-light text-primary mb-4">
                      ${item.product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">Quantity:</span>
                      <div className="flex items-center border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQuantityChange(item.product.id, -1)}
                          disabled={item.quantity <= 1}
                          className="h-9 w-9"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 text-foreground font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQuantityChange(item.product.id, 1)}
                          className="h-9 w-9"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-serif font-light mb-6 text-foreground">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${cart.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-light text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${cart.total.toLocaleString()}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link href="/shop">
                  <Button size="lg" variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
                  <p className="mb-2">• 5-Year Warranty Included</p>
                  <p className="mb-2">• Free Worldwide Shipping</p>
                  <p>• 30-Day Returns</p>
                </div>
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