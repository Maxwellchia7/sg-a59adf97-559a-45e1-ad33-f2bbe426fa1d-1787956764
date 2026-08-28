import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/generated/story-watchmaker.png"
              alt="Master watchmaker at work"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              Crafted with passion, delivered with care
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every timepiece in our collection has been carefully selected and authenticated by our team of experts. We believe in transparency, quality, and the timeless art of fine watchmaking.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From Geneva to your wrist, we handle each watch with the respect it deserves, ensuring you receive not just a timepiece, but a piece of horological history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}