import Link from "next/link";

const complications = [
  {
    title: "Chronographs",
    description: "Racing heritage meets precision timing",
    image: "/complications/chronograph.png",
    href: "/collections?complication=chronograph",
  },
  {
    title: "Dive watches",
    description: "Professional instruments for the depths",
    image: "/complications/dive.png",
    href: "/collections?complication=dive",
  },
  {
    title: "Dress watches",
    description: "Refined elegance for formal occasions",
    image: "/complications/dress.png",
    href: "/collections?complication=dress",
  },
];

export function ByComplication() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-primary mb-2 tracking-wider uppercase">By complication</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
            Find your function
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complications.map((comp) => (
            <Link
              key={comp.title}
              href={comp.href}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif text-accent group-hover:text-primary transition-colors mb-2">
                {comp.title}
              </h3>
              <p className="text-sm text-muted-foreground">{comp.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}