import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import Link from "next/link";
import { Clock } from "lucide-react";

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
  {
    slug: "audemars-piguet-royaloak-history",
    title: "The Royal Oak revolution: 50 years of iconic design",
    excerpt: "How Gérald Genta's revolutionary 1972 design changed luxury sports watches forever.",
    image: "/magazine/royaloak-history.jpg",
    category: "History",
    readTime: "15 min read",
  },
  {
    slug: "omega-moonwatch-legacy",
    title: "From moon to wrist: The Speedmaster story",
    excerpt: "The only watch certified for EVA by NASA, and why it remains relevant today.",
    image: "/magazine/moonwatch-legacy.jpg",
    category: "Heritage",
    readTime: "10 min read",
  },
  {
    slug: "collecting-vintage-watches",
    title: "Starting a vintage watch collection: Expert advice",
    excerpt: "What to look for, what to avoid, and how to build a meaningful collection.",
    image: "/magazine/vintage-collecting.jpg",
    category: "Guides",
    readTime: "14 min read",
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