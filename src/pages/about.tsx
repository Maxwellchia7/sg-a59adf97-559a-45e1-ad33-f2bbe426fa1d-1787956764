import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SEO } from "@/components/SEO";
import { Shield, Award, Clock, Users } from "lucide-react";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const values = [
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "Every timepiece is meticulously authenticated by our expert horologists before joining our collection."
  },
  {
    icon: Award,
    title: "Exceptional Quality",
    description: "We only reserve watches that meet our stringent standards for condition and provenance."
  },
  {
    icon: Clock,
    title: "Five-Year Warranty",
    description: "Each watch comes with our comprehensive five-year warranty covering mechanical performance."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "From discovery to delivery, our team provides white-glove service tailored to collectors."
  }
];

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Maison Caldor - Fine Watches Reserved from One Desk"
        description="Maison Caldor curates exceptional pre-owned luxury timepieces with guaranteed authenticity and personalized service for discerning collectors."
      />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] bg-muted">
          <ImagePlaceholder
            src=""
            alt="Maison Caldor - The House"
            uploadPath={getPlaceholderPath("about-hero.jpg")}
            className="absolute inset-0 w-full h-full object-cover"
            aspectRatio="21/9"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="container relative h-full flex flex-col justify-end pb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 text-accent">
              The House
            </h1>
            <p className="text-xl text-accent/80 max-w-2xl">
              Fine watches, reserved from one desk
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="py-24 border-b border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-center text-accent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
                Maison Caldor exists to connect discerning collectors with exceptional pre-owned luxury timepieces. 
                We believe that every watch has a story, and we are privileged to be part of that narrative as these 
                extraordinary objects find new custodians.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Our approach is simple: authenticate rigorously, present beautifully, and serve personally. We treat 
                each timepiece as the work of art it is, and each collector as the individual they are.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-24 bg-card">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-16 text-center text-accent">
              Our Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif mb-4 text-accent">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Authentication Process */}
        <div className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-accent">
                  The Authentication Process
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif mb-3 text-accent">1. Initial Inspection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every timepiece undergoes a comprehensive visual inspection by our certified horologists. 
                      We examine case, dial, hands, and movement for authenticity markers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-3 text-accent">2. Movement Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The movement is opened, photographed, and compared against manufacturer specifications. 
                      We verify serial numbers and check for any non-original components.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-3 text-accent">3. Performance Testing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Each watch is tested on precision timing equipment to ensure it meets chronometric standards. 
                      Water resistance is verified for diving watches.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-3 text-accent">4. Documentation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Upon authentication, we provide a detailed condition report and certificate. Your watch 
                      comes with our five-year mechanical warranty.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4]">
                <ImagePlaceholder
                  src=""
                  alt="Master watchmaker authenticating timepiece"
                  uploadPath={getPlaceholderPath("authentication-process.jpg")}
                  className="w-full h-full object-cover rounded-lg"
                  aspectRatio="3/4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Desk Philosophy */}
        <div className="py-24 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-accent">
                Reserved from One Desk
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Unlike traditional dealers, we operate from a singular point of contact—our desk. This isn't 
                a retail space; it's a curator's atelier where exceptional timepieces are researched, authenticated, 
                and presented to collectors who appreciate them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every inquiry receives personal attention. Every watch is individually photographed and described. 
                We believe that acquiring a significant timepiece should be an experience as refined as the object itself.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}