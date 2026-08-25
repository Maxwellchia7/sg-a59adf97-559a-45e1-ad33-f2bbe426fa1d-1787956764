import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/router";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const itemsList = cart.items
      .map(item => `${item.quantity}x ${item.product.brand} ${item.product.name} ($${item.product.price.toLocaleString()})`)
      .join("%0A");
    
    const message = `*New Order Inquiry*%0A%0A*Customer Details:*%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A*Shipping Address:*%0A${formData.address}%0A${formData.city}, ${formData.postalCode}%0A${formData.country}%0A%0A*Order Items:*%0A${itemsList}%0A%0A*Total: $${cart.total.toLocaleString()}*`;
    
    window.open(`https://wa.me/16462440064?text=${message}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (cart.items.length === 0) {
    router.push("/cart");
    return null;
  }

  return (
    <>
      <SEO title="Checkout - Maison Caldor" />
      <Navigation />
      <main className="min-h-screen py-12">
        <div className="container">
          <h1 className="text-5xl font-serif font-light mb-12 text-foreground">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-serif font-light mb-6 text-foreground">
                  Contact & Shipping Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Separator />

                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code *</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Separator />

                  <div className="bg-accent/10 border border-primary/20 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Complete Your Order via WhatsApp
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          To finalize your purchase, we'll send your order details to our team via WhatsApp. 
                          A specialist will contact you to arrange secure payment and delivery.
                        </p>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Send Order via WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-serif font-light mb-6 text-foreground">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {cart.items.map(item => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${item.product.image}')` }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">
                          {item.product.brand} {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm text-primary">
                          ${item.product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
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

                <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
                  <p className="mb-2">✓ 5-Year Warranty</p>
                  <p className="mb-2">✓ Free Worldwide Shipping</p>
                  <p className="mb-2">✓ 30-Day Returns</p>
                  <p>✓ Authenticated & Certified</p>
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