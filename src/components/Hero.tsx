import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/generated/hero-luxury-watch.png')",
        }}
      />
      
      <div className="container relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 text-foreground tracking-tight">
          Authenticated Luxury<br />Timepieces
        </h1>
        <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-8 font-light">
          Discover pre-owned watches from the world's most prestigious brands. 
          Every piece authenticated, every purchase protected by our 5-year warranty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}