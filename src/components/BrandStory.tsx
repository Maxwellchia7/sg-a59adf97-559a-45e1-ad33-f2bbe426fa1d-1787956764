import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              The House of<br />Maison Caldor
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of authenticity and excellence, Maison Caldor has become 
              a trusted destination for collectors seeking the world's finest pre-owned timepieces.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each watch in our collection undergoes rigorous authentication by master horologists, 
              ensuring you receive only genuine pieces backed by our comprehensive 5-year warranty.
            </p>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Our Story
              </Button>
            </Link>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/generated/story-watchmaker.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}