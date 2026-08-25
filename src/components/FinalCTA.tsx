import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-accent">
            How Maison Caldor works
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We've simplified the process of acquiring authenticated luxury timepieces. Browse our curated collection, reserve your watch, and receive it with full authentication documentation and our 5-year warranty.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="group">
                Browse collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}