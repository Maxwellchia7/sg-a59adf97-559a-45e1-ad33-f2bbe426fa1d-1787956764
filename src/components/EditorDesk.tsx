import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

export function EditorDesk() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-primary mb-2 tracking-wider uppercase">Editor's Desk</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-accent">
              Featured this week
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              A masterpiece of haute horlogerie that exemplifies the pinnacle of Swiss watchmaking tradition.
            </p>
            <div className="space-y-2 mb-8">
              <p className="text-sm"><span className="text-muted-foreground">Reference:</span> <span className="font-mono">5711/1A-010</span></p>
              <p className="text-sm"><span className="text-muted-foreground">Year:</span> 2018</p>
              <p className="text-sm"><span className="text-muted-foreground">Condition:</span> Excellent</p>
              <p className="text-2xl font-serif text-primary mt-4">$89,500</p>
            </div>
            <Link href="/products/featured-desk">
              <Button size="lg" className="group">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div>
            <ImagePlaceholder
              src=""
              alt="Editor's desk featured watch"
              uploadPath={getPlaceholderPath("editor-desk-featured.jpg")}
              className="w-full rounded-lg"
              aspectRatio="1/1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}