import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
      <img
        src="/hero-watch.jpg"
        alt="Luxury timepiece"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="container relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-accent mb-6 tracking-tight">
          Fine watches, reserved<br />from one desk
        </h1>
        <p className="text-lg md:text-xl text-accent/80 mb-12 max-w-2xl mx-auto">
          Authenticated luxury timepieces, curated for discerning collectors
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/shop">
            <Button size="lg" className="min-w-[200px]">
              Discover watches
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Our story
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-sm text-accent">100% Authentic</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-sm text-accent">5-Year Warranty</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-primary" />
            <span className="text-sm text-accent">Worldwide Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}