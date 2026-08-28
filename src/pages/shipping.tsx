import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Package, Shield, Truck, Clock } from "lucide-react";

export default function ShippingPage() {
  return (
    <>
      <SEO 
        title="Shipping & Returns - Maison Caldor"
        description="Worldwide insured shipping, delivery information, and return policy for luxury watches"
      />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-serif font-light mb-6 text-foreground">
            Shipping & Returns
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Complimentary worldwide insured delivery with comprehensive protection
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-foreground">Complimentary Shipping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Free worldwide shipping on all orders. No minimum purchase required.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-foreground">Fully Insured</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every shipment is insured for the full purchase value during transit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-foreground">Express Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  2-3 business days domestic, 5-7 business days international.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2 text-foreground">30-Day Returns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full refund if returned unworn within 30 days of delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-light mb-6 text-foreground">Shipping Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">Domestic Shipping (United States)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    All US shipments are sent via FedEx Express with signature confirmation. Delivery typically occurs within 2-3 business days from order confirmation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You will receive tracking information via email once your watch ships. Signature is required for delivery to ensure secure receipt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">International Shipping</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    International deliveries are sent via FedEx International Priority with full insurance and signature confirmation. Delivery typically takes 5-7 business days depending on customs clearance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We provide all necessary documentation for customs, including commercial invoices and certificates of authenticity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Important:</strong> Buyers are responsible for any customs duties, import taxes, or fees imposed by their country. These charges are not included in the watch price or shipping cost.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">Insurance & Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every shipment is fully insured for the purchase price. In the unlikely event of loss or damage during transit, we will file the insurance claim and provide a replacement or full refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">Packaging</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Watches are packaged in secure, unmarked boxes with protective materials. If your watch includes an original box, it will be properly protected during shipping. High-value shipments may use additional security packaging.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-light mb-6 text-foreground">Returns & Refunds</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">30-Day Return Period</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return your watch within 30 days of delivery for a full refund.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The watch must be returned unworn and in the exact condition received, with all included accessories, documentation, and packaging.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">Return Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>Contact us via WhatsApp or email to initiate a return</li>
                    <li>We will provide return shipping instructions and address</li>
                    <li>Package the watch securely with all included items</li>
                    <li>Ship via insured carrier with tracking and signature confirmation</li>
                    <li>We inspect the returned watch upon receipt</li>
                    <li>Refund is processed within 5-7 business days after inspection</li>
                  </ol>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Return shipping costs are the buyer's responsibility unless the return is due to our error or product misrepresentation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">Refund Method</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds are issued to the original payment method. Bank wire refunds may take additional time depending on your financial institution.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">Non-Returnable Items</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Watches showing signs of wear, damage, or alteration cannot be accepted for return. The return privilege does not apply to watches that have been sized, engraved, or modified after delivery.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-light mb-6 text-foreground">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For specific questions about shipping to your location or our return policy, please contact our team:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: <a href="mailto:support@maisoncaldor.com" className="text-primary hover:underline">support@maisoncaldor.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/16462440064" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+1 (646) 244-0064</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}