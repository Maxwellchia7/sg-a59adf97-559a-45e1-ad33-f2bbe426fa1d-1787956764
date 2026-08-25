import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Shield, Clock, Award, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us - Maison Caldor"
        description="Maison Caldor is a trusted destination for authenticated luxury timepieces, offering the finest watches from prestigious brands with a 5-year warranty."
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[500px] bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/generated/story-watchmaker.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="container relative h-full flex flex-col justify-end pb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 text-foreground">
              Our Story
            </h1>
            <p className="text-xl text-accent max-w-2xl">
              Curating excellence in luxury timepieces since inception
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="py-20 border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-light mb-8 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Maison Caldor, we are dedicated to connecting discerning collectors with the world's finest pre-owned luxury timepieces. Each watch in our collection has been meticulously authenticated and curated to meet the highest standards of quality and craftsmanship.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that a luxury watch is more than an accessory—it's an investment, a statement, and a piece of horological history. Our commitment is to provide not just exceptional timepieces, but also the trust, expertise, and service that such investments deserve.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20">
          <div className="container">
            <h2 className="text-4xl font-serif font-light mb-12 text-center text-foreground">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-serif font-light mb-3 text-foreground">
                  Authenticated
                </h3>
                <p className="text-muted-foreground">
                  Every timepiece is rigorously inspected and authenticated by our expert horologists to ensure absolute authenticity.
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-serif font-light mb-3 text-foreground">
                  5-Year Warranty
                </h3>
                <p className="text-muted-foreground">
                  We stand behind every watch with an industry-leading 5-year warranty, providing you with complete peace of mind.
                </p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-serif font-light mb-3 text-foreground">
                  Expert Curation
                </h3>
                <p className="text-muted-foreground">
                  Our collection is carefully curated to feature only the most sought-after models from prestigious brands.
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-serif font-light mb-3 text-foreground">
                  Global Service
                </h3>
                <p className="text-muted-foreground">
                  We ship worldwide with complimentary insured shipping and offer dedicated customer support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication Process */}
        <div className="py-20 bg-muted/30 border-y border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-light mb-12 text-center text-foreground">
                Our Authentication Process
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    1. Initial Inspection
                  </h3>
                  <p className="text-muted-foreground">
                    Each watch undergoes a comprehensive visual and mechanical inspection by certified watchmakers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    2. Serial Verification
                  </h3>
                  <p className="text-muted-foreground">
                    We verify all serial numbers and reference numbers against manufacturer databases to confirm authenticity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    3. Movement Analysis
                  </h3>
                  <p className="text-muted-foreground">
                    The movement is carefully examined to ensure it matches the manufacturer's specifications and is functioning perfectly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    4. Service & Certification
                  </h3>
                  <p className="text-muted-foreground">
                    If needed, the watch is serviced to factory standards before being certified and added to our collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-light mb-6 text-foreground">
                Begin Your Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're seeking your first luxury timepiece or adding to an established collection, our team is here to assist you in finding the perfect watch.
              </p>
              <a
                href="https://wa.me/16462440064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Contact Our Specialists
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}