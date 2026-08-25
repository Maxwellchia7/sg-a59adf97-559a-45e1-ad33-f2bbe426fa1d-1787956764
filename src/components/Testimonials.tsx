import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    location: "Hong Kong",
    rating: 5,
    text: "The authentication process gave me complete confidence. My Nautilus arrived exactly as described, with impeccable documentation. A truly white-glove experience.",
    purchase: "Patek Philippe Nautilus 5711",
  },
  {
    name: "Sarah Morrison",
    location: "London",
    rating: 5,
    text: "I've purchased three watches from Maison Caldor now. The expertise and professionalism are unmatched. They understand collectors.",
    purchase: "Rolex Daytona, AP Royal Oak, Omega Speedmaster",
  },
  {
    name: "David Hoffmann",
    location: "Zurich",
    rating: 5,
    text: "Outstanding service from inquiry to delivery. The watch arrived in pristine condition, and the 5-year warranty provides invaluable peace of mind.",
    purchase: "Audemars Piguet Royal Oak 15400",
  },
  {
    name: "James Patterson",
    location: "New York",
    rating: 5,
    text: "After years of collecting, I've found my go-to source. The selection is carefully curated, and every piece tells a story. Exceptional in every way.",
    purchase: "Vacheron Constantin Overseas",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-16 text-center text-accent">
          What collectors say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm text-accent">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{testimonial.location}</p>
                <p className="text-xs text-muted-foreground italic">Purchased: {testimonial.purchase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}