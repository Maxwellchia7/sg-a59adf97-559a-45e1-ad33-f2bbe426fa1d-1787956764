import Link from "next/link";

const categories = [
  {
    title: "Men's watches",
    description: "Classic and contemporary timepieces for gentlemen",
    image: "/categories/mens.jpg",
    href: "/collections?category=mens",
  },
  {
    title: "Women's watches",
    description: "Elegant complications and jeweled timepieces",
    image: "/categories/womens.jpg",
    href: "/collections?category=womens",
  },
  {
    title: "Pre-owned",
    description: "Authenticated vintage and discontinued models",
    image: "/categories/pre-owned.jpg",
    href: "/collections?category=pre-owned",
  },
  {
    title: "Pocket watches",
    description: "Historic complications and collector's pieces",
    image: "/categories/pocket.jpg",
    href: "/collections?category=pocket",
  },
];

export function WaysIn() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="mb-12">
          <p className="text-sm text-primary mb-2 tracking-wider uppercase">Ways in</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
            Explore by category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-serif text-accent group-hover:text-primary transition-colors mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}