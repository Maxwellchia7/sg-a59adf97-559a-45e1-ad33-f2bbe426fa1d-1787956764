import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-primary mb-2 tracking-wider uppercase">The house</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent mb-6">
              Reserved from one desk
            </h2>
            <p className="text-lg text-accent/80 leading-relaxed mb-6">
              Every timepiece passes through our atelier, where master watchmakers authenticate, 
              service, and prepare each watch for its next custodian. This is not a marketplace — 
              it's a curated collection reserved from one desk.
            </p>
            <p className="text-accent/70 leading-relaxed mb-8">
              Our authentication process combines traditional horological expertise with modern 
              technology. Every watch is backed by our 5-year warranty and comes with complete 
              documentation of its journey through our atelier.
            </p>
            <Link href="/about">
              <Button size="lg">Learn our story</Button>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/about/watchmaker.jpg"
                alt="Master watchmaker at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}