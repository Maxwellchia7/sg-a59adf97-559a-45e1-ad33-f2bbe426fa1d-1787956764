import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Patterson",
    location: "New York, NY",
    text: "Exceptional service from start to finish. My Patek Philippe arrived exactly as described, beautifully presented. The authentication documentation gave me complete confidence.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    location: "Singapore",
    text: "I've purchased three watches from Maison Caldor. Each time, the experience has been flawless. The 5-year warranty is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    location: "London, UK",
    text: "As a collector, authenticity is everything. Maison Caldor's verification process is thorough and transparent. Highly recommend for serious buyers.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
            Trusted by Collectors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our clients say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}