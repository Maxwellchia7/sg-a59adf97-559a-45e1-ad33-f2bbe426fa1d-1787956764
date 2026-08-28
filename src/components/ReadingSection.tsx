import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Art of Complications",
    excerpt: "Understanding the intricate mechanisms behind luxury timepieces",
    image: "/magazine/editorial-1.png",
    category: "Technical",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Collector's Guide 2024",
    excerpt: "Investment-grade watches that define this decade",
    image: "/magazine/editorial-2.png",
    category: "Market Insights",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Heritage & Innovation",
    excerpt: "How traditional brands are embracing modern design",
    image: "/complications/chronograph.png",
    category: "Industry News",
    readTime: "6 min read",
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
            <div
              key={article.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/magazine#article-${article.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-xs text-primary uppercase tracking-wider mb-2">
                  {article.category}
                </p>
                <Link href={`/magazine#article-${article.id}`}>
                  <h3 className="text-xl font-serif font-light mb-3 text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">{article.readTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}