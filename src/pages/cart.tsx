import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, Minus, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function BagPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <>
        <SEO title="Shopping Bag - Maison Caldor" description="Your shopping bag is empty" />
        <AnnouncementBar />
        <Navigation />
        <main className="min-h-screen py-24">
          <div className="container">
            <div className="text-center max-w-md mx-auto">
              <h1 className="text-4xl font-serif text-accent mb-4">Your bag is empty</h1>
              <p className="text-muted-foreground mb-8">
                Reserve your timepiece from our curated collection
              </p>
              <Link href="/shop">
                <Button>Discover watches</Button>
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
      <SEO title="Shopping Bag - Maison Caldor" description="Review items reserved from one desk" />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif text-accent mb-12">Shopping bag</h1>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cart.items.map((item) => (
                <div key={item.product.id} className="border border-border rounded-lg p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 bg-muted rounded-lg flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                        {item.product.image}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-serif text-accent mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                          {item.product.reference && (
                            <p className="text-xs font-mono text-muted-foreground mt-1">
                              {item.product.reference}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-xl font-serif text-primary mb-4">
                        ${item.product.price.toLocaleString()}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-serif text-accent mb-6">Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-accent">${cart.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-serif text-accent">Total</span>
                      <span className="font-serif text-xl text-primary">
                        ${cart.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Link href="/checkout">
                  <Button className="w-full mb-3">Proceed to checkout</Button>
                </Link>
                
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    Continue browsing
                  </Button>
                </Link>
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