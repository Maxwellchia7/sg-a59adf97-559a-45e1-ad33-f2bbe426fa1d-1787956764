import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO 
        title="Terms of Service - Maison Caldor"
        description="Terms and conditions for purchasing luxury watches from Maison Caldor"
      />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-serif font-light mb-6 text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Maison Caldor's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">2. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All watches are pre-owned unless explicitly stated otherwise. We make every effort to accurately describe condition, specifications, and included accessories. Product descriptions, photographs, and specifications are provided in good faith based on our professional assessment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Maison Caldor is an independent seller of pre-owned luxury watches. We are not affiliated with, endorsed by, or authorized dealers for Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier, or any other watch manufacturer unless explicitly stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">3. Pricing and Availability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All prices are in USD unless otherwise stated. Prices are subject to change without notice. We reserve the right to modify pricing, correct errors, or update availability information at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Listed items are subject to prior sale. Availability is confirmed upon order placement. We will notify you immediately if a reserved item becomes unavailable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">4. Reservation and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adding items to your bag creates a reservation request, not a binding purchase. Reservations are confirmed via WhatsApp communication with our team. Payment is required before shipment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We accept bank wire transfers and other payment methods as agreed during the reservation process. Full payment is due within 48 hours of reservation confirmation unless alternative arrangements are made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">5. Authentication Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every watch undergoes professional authentication by experienced horologists. We guarantee the authenticity of all timepieces sold. If any watch is determined to be inauthentic by an authorized manufacturer service center, we will provide a full refund including return shipping costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">6. Shipping and Insurance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complimentary worldwide insured shipping is included. All shipments are fully insured for the purchase price. Title and risk of loss transfer to the buyer upon delivery confirmation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                International customers are responsible for any customs duties, import taxes, or fees imposed by their country. We provide all necessary documentation for customs clearance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">7. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer a 30-day return period from delivery date. Returned watches must be unworn and in the exact condition received, with all included accessories and documentation. Return shipping is the buyer's responsibility unless the return is due to our error or misrepresentation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Refunds are processed within 5-7 business days after receiving and inspecting the returned watch. Refunds are issued via the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">8. Warranty</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All watches include our five-year mechanical warranty covering movement performance under normal use. This warranty does not cover damage from misuse, accidents, unauthorized service, water damage (unless specifically tested and warranted), or normal wear of straps and bracelets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Warranty service is performed by authorized service centers. The warranty is non-transferable and applies only to the original purchaser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Maison Caldor's liability is limited to the purchase price of the watch. We are not liable for indirect, incidental, consequential, or special damages. Some jurisdictions do not allow limitations on liability, so these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of New York, United States. Any disputes shall be resolved in the courts of New York.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, contact us at support@maisoncaldor.com or via WhatsApp at +1 (646) 244-0064.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}