import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Shield, Award, Clock, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO title="About - Maison Caldor" description="The house of authenticated luxury timepieces, reserved from one desk" />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen">
        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm text-primary mb-4 tracking-wider uppercase">The house</p>
              <h1 className="text-5xl md:text-6xl font-serif font-light text-accent mb-6">
                Reserved from one desk
              </h1>
              <p className="text-xl text-accent/80 leading-relaxed">
                We don't run a marketplace. Every timepiece in our collection passes through our atelier, 
                where master watchmakers authenticate, service, and prepare each watch for its next custodian.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/about/watchmaker.png"
                  alt="Master watchmaker"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-light text-accent mb-6">
                  Our mission
                </h2>
                <p className="text-lg text-accent/80 leading-relaxed mb-4">
                  To preserve the art of fine watchmaking by connecting authenticated luxury timepieces 
                  with discerning collectors who appreciate horological excellence.
                </p>
                <p className="text-accent/70 leading-relaxed">
                  Every watch tells a story. Our role is to ensure that story continues with integrity, 
                  authenticity, and the care these mechanical masterpieces deserve.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <div className="text-center mb-12">
                <p className="text-sm text-primary mb-2 tracking-wider uppercase">Our pillars</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
                  What defines us
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-accent mb-3">Authenticity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rigorous authentication by master watchmakers. Every timepiece verified through 
                    microscopic examination and technical analysis.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-accent mb-3">Excellence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Curated selection of prestigious manufactures. Only timepieces that represent the 
                    pinnacle of horological achievement.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-accent mb-3">Heritage</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Preserving watchmaking tradition. Each piece serviced to manufacturer specifications, 
                    maintaining its historical integrity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-accent mb-3">Assurance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    5-year warranty on every timepiece. Worldwide insured shipping. Complete documentation 
                    and certification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-12 mb-24">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-sm text-primary mb-2 tracking-wider uppercase">The process</p>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-accent mb-4">
                    Authentication & servicing
                  </h2>
                  <p className="text-accent/70">
                    Every watch undergoes a comprehensive authentication and servicing protocol before 
                    joining our collection.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-accent mb-2">Initial inspection</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Visual examination of case, dial, hands, and movement. Verification of serial 
                        numbers and reference codes against manufacturer records.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-accent mb-2">Technical analysis</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Movement examination under magnification. Verification of caliber authenticity. 
                        Testing of all complications and functions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-accent mb-2">Servicing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Complete movement service when required. Replacement of worn components with 
                        manufacturer-certified parts. Polishing and refinishing as appropriate.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-accent mb-2">Final certification</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Precision timing verification. Water resistance testing. Complete documentation 
                        package including authenticity certificate and warranty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm text-primary mb-4 tracking-wider uppercase">From one desk</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-accent mb-6">
                A personal approach
              </h2>
              <p className="text-lg text-accent/80 leading-relaxed mb-8">
                Unlike impersonal marketplaces, every interaction at Maison Caldor is handled by our team 
                of watch specialists. We're collectors ourselves, and we understand what it means to acquire 
                a piece of horological history.
              </p>
              <p className="text-accent/70 leading-relaxed">
                Whether you're seeking a specific reference, building a collection, or exploring the world 
                of fine watches for the first time, we're here to guide you with expertise and integrity.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}