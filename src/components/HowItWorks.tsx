import { Search, CheckCircle, Truck, Award } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse our curated collection of authenticated luxury timepieces from the world's finest manufactures.",
  },
  {
    icon: CheckCircle,
    title: "Authenticate",
    description: "Every watch undergoes rigorous inspection and authentication by certified horologists before listing.",
  },
  {
    icon: Truck,
    title: "Deliver",
    description: "Worldwide insured shipping with full tracking. Your timepiece arrives secure and ready to wear.",
  },
  {
    icon: Award,
    title: "Protect",
    description: "Backed by our comprehensive 5-year warranty and lifetime authentication guarantee.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-16 text-center text-accent">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3 text-accent">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}