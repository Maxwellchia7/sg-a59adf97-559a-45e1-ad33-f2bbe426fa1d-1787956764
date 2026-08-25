import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { NewArrivals } from "@/components/NewArrivals";
import { PromoBanner } from "@/components/PromoBanner";
import { BrandStory } from "@/components/BrandStory";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Maison Caldor - Authenticated Luxury Timepieces"
        description="Discover pre-owned watches from Rolex, Patek Philippe, Audemars Piguet, and more. Every piece authenticated with a 5-year warranty. Worldwide shipping."
      />
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollections />
        <NewArrivals />
        <PromoBanner />
        <BrandStory />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}