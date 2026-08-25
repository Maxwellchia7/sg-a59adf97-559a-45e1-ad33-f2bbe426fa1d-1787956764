import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const articles = [
  {
    title: "The Evolution of the Rolex Submariner",
    excerpt: "From its 1953 debut to today's cutting-edge models, explore seven decades of the world's most iconic dive watch.",
    category: "Heritage",
    readTime: "8 min read",
    imagePath: "article-submariner-evolution.jpg",
    slug: "rolex-submariner-evolution",
  },
  {
    title: "Understanding Watch Complications",
    excerpt: "A collector's guide to the mechanical marvels that elevate timepieces from simple to extraordinary.",
    category: "Education",
    readTime: "12 min read",
    imagePath: "article-complications.jpg",
    slug: "understanding-complications",
  },
  {
    title: "Investment-Grade Timepieces",
    excerpt: "Which watches have proven their worth as alternative assets, and what makes them appreciate over time.",
    category: "Investing",
    readTime: "10 min read",
    imagePath: "article-investment.jpg",
    slug: "investment-grade-watches",
  },
];

export function ReadingSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-accent">
            Reading
          </h2>
          <Link href="/magazine">
            <Button variant="outline">View magazine</Button>
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
                <ImagePlaceholder
                  src=""
                  alt={article.title}
                  uploadPath={getPlaceholderPath(article.imagePath)}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  aspectRatio="4/3"
                />
              </div>
              <p className="text-xs text-primary mb-2 tracking-wider uppercase">{article.category}</p>
              <h3 className="text-xl font-serif text-accent group-hover:text-primary transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}