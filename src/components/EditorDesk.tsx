import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EditorDesk() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-primary mb-2 tracking-wider uppercase">From the editor's desk</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
            This week's featured timepiece
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src="/generated/product-rolex-daytona.png"
              alt="Featured watch"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-accent mb-4">
              Rolex Daytona Ref. 116500LN
            </h3>
            <p className="text-lg text-accent/80 mb-6 leading-relaxed">
              The crown jewel of sports chronographs. This steel Daytona with ceramic bezel represents the
              pinnacle of Rolex's racing heritage. Impossibly rare, eternally desirable.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Reference</span>
                <span className="text-accent font-mono">116500LN</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Movement</span>
                <span className="text-accent">Automatic Cal. 4130</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Case</span>
                <span className="text-accent">40mm Steel</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Condition</span>
                <span className="text-accent">Excellent</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-3xl font-serif text-primary">$35,800</p>
              <Link href="/products/rolex-daytona-116500ln">
                <Button size="lg">
                  Reserve now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}