import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BrandSpotlights } from "@/components/BrandSpotlights";
import { StatsSection } from "@/components/StatsSection";
import { ManufacturesGrid } from "@/components/ManufacturesGrid";
import { EditorDesk } from "@/components/EditorDesk";
import { WaysIn } from "@/components/WaysIn";
import { ByComplication } from "@/components/ByComplication";
import { Signatures } from "@/components/Signatures";
import { NewArrivals } from "@/components/NewArrivals";
import { AccessibleLuxury } from "@/components/AccessibleLuxury";
import { Assurance } from "@/components/Assurance";
import { HowItWorks } from "@/components/HowItWorks";
import { ReadingSection } from "@/components/ReadingSection";
import { Testimonials } from "@/components/Testimonials";
import { SEOContent } from "@/components/SEOContent";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Fine Luxury Watches - Maison Caldor"
        description="Authenticated pre-owned luxury watches from Rolex, Patek Philippe, Audemars Piguet, Omega, and more. 5-year warranty, worldwide shipping."
      />
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <BrandSpotlights />
        <StatsSection />
        <ManufacturesGrid />
        <EditorDesk />
        <WaysIn />
        <ByComplication />
        <Signatures />
        <NewArrivals />
        <AccessibleLuxury />
        <Assurance />
        <HowItWorks />
        <ReadingSection />
        <Testimonials />
        <SEOContent />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}