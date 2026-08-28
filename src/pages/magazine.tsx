import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import Link from "next/link";
import { Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Art of Complications",
    excerpt: "Dive deep into the intricate world of watch complications. From perpetual calendars to minute repeaters, discover the mechanical marvels that define haute horlogerie.",
    image: "/magazine/editorial-1.png",
    category: "Technical",
    readTime: "8 min read",
    author: "James Crawford",
    date: "December 15, 2026",
  },
  {
    id: 2,
    title: "Collector's Guide 2024",
    excerpt: "Investment-grade watches that define this decade. Expert insights on market trends, emerging brands, and timeless classics that hold their value.",
    image: "/magazine/editorial-2.png",
    category: "Market Insights",
    readTime: "12 min read",
    author: "Sophie Martin",
    date: "December 10, 2026",
  },
  {
    id: 3,
    title: "Heritage & Innovation",
    excerpt: "How traditional watchmakers are embracing modern design while respecting their legacy. A look at the future of Swiss watchmaking.",
    image: "/complications/chronograph.png",
    category: "Industry News",
    readTime: "6 min read",
    author: "Michael Torres",
    date: "December 5, 2026",
  },
  {
    id: 4,
    title: "Vintage Rolex Market",
    excerpt: "The rising value of vintage Rolex sports models. Understanding patina, originality, and what collectors are seeking in 2026.",
    image: "/complications/dive.png",
    category: "Collectibles",
    readTime: "10 min read",
    author: "Emma Richardson",
    date: "November 28, 2026",
  },
  {
    id: 5,
    title: "Independent Watchmakers",
    excerpt: "Meet the artisans creating unique timepieces outside the traditional industry. Discover F.P. Journe, Philippe Dufour, and rising stars.",
    image: "/complications/dress.png",
    category: "Profiles",
    readTime: "15 min read",
    author: "Alexandre Dubois",
    date: "November 20, 2026",
  },
  {
    id: 6,
    title: "Caring for Your Collection",
    excerpt: "Essential maintenance tips for luxury watches. From daily wear to long-term storage, protect your investment with proper care.",
    image: "/about/watchmaker.png",
    category: "Maintenance",
    readTime: "7 min read",
    author: "Robert Chen",
    date: "November 15, 2026",
  },
];

export default function MagazinePage() {
  return (
    <>
      <SEO title="Magazine - Maison Caldor" description="Articles, guides, and insights from the world of luxury watchmaking" />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-sm text-primary mb-4 tracking-wider uppercase">Reading</p>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-accent mb-6">
              The magazine
            </h1>
            <p className="text-xl text-accent/80 leading-relaxed">
              Explore the world of fine watchmaking through our curated articles, collecting guides, 
              and insights from master watchmakers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}