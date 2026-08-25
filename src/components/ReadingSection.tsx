import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    slug: "guide-to-rolex-submariner",
    title: "The complete guide to Rolex Submariner collecting",
    excerpt: "From vintage references to modern iterations, explore the evolution of the world's most iconic dive watch.",
    image: "/magazine/submariner-guide.jpg",
    category: "Guides",
    readTime: "12 min read",
  },
  {
    slug: "patek-philippe-investment",
    title: "Why Patek Philippe watches hold their value",
    excerpt: "Understanding the market dynamics that make certain complications and references investment-grade timepieces.",
    image: "/magazine/patek-investment.jpg",
    category: "Market insights",
    readTime: "8 min read",
  },
  {
    slug: "authentication-process",
    title: "Inside our authentication laboratory",
    excerpt: "See how our master watchmakers verify authenticity through microscopic examination and technical analysis.",
    image: "/magazine/authentication.jpg",
    category: "Behind the scenes",
    readTime: "10 min read",
  },
];

export function ReadingSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-primary mb-2 tracking-wider uppercase">Reading</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
              The magazine
            </h2>
          </div>
          <Link href="/magazine">
            <Button variant="outline">View all articles</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/magazine/${article.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex items-center gap-2 text-xs text-primary mb-3">
                <span>{article.category}</span>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-serif text-accent group-hover:text-primary transition-colors mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}