import { Shield, Award, Clock, CheckCircle, Truck } from "lucide-react";

const assurances = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Comprehensive coverage on all timepieces",
  },
  {
    icon: Award,
    title: "100% Authentic",
    description: "Certified by master horologists",
  },
  {
    icon: Clock,
    title: "Expert Servicing",
    description: "Full in-house restoration capabilities",
  },
  {
    icon: CheckCircle,
    title: "Rigorous Inspection",
    description: "87-point authentication process",
  },
  {
    icon: Truck,
    title: "Insured Shipping",
    description: "Worldwide delivery with full coverage",
  },
];

export function Assurance() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-16 text-center text-accent">
          Your assurance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {assurances.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-2 text-accent">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}