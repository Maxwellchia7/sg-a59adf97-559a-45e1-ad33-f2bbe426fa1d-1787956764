import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Award } from "lucide-react";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      <ImagePlaceholder
        src=""
        alt="Fine watches hero background"
        uploadPath={getPlaceholderPath("hero-background.jpg")}
        className="absolute inset-0 w-full h-full object-cover"
        aspectRatio="21/9"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-accent">
            Fine watches, reserved from one desk
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Authentic luxury timepieces with a 5-year warranty and worldwide insured shipping
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/shop">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Our Story
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm">5-Year Warranty</p>
                <p className="text-xs text-muted-foreground">On all purchases</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm">Worldwide Shipping</p>
                <p className="text-xs text-muted-foreground">Fully insured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm">100% Authentic</p>
                <p className="text-xs text-muted-foreground">Certified watches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}