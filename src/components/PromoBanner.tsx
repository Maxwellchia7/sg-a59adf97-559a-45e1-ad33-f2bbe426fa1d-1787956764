import { Shield, Truck, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Every timepiece protected",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "Secure, insured delivery",
  },
  {
    icon: Clock,
    title: "Authenticated",
    description: "Expert verification process",
  },
];

export function PromoBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background border-y border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-light mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}