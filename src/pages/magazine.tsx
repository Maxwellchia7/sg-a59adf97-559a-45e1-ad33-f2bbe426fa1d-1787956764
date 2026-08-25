import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder, getPlaceholderPath } from "@/lib/imagePlaceholder";

const articles = [
  {
    id: "rolex-daytona-history",
    title: "The Rolex Daytona: From Racing Tool to Cultural Icon",
    excerpt: "How a chronograph designed for motorsport enthusiasts became one of the most coveted luxury watches in the world.",
    category: "Heritage",
    readTime: "8 min read",
    imagePath: "magazine-daytona-article.jpg"
  },
  {
    id: "patek-nautilus-design",
    title: "Gerald Genta's Nautilus: The Watch That Redefined Luxury Sports",
    excerpt: "Examining the revolutionary design philosophy behind Patek Philippe's most iconic modern timepiece.",
    category: "Design",
    readTime: "10 min read",
    imagePath: "magazine-nautilus-article.jpg"
  },
  {
    id: "collecting-vintage-omega",
    title: "A Collector's Guide to Vintage Omega Speedmasters",
    excerpt: "Understanding references, dials, and provenance when building a Speedmaster collection.",
    category: "Collecting",
    readTime: "12 min read",
    imagePath: "magazine-speedmaster-article.jpg"
  },
  {
    id: "ap-royal-oak-story",
    title: "The Audacity of the Royal Oak: 1972 Revisited",
    excerpt: "How Audemars Piguet's bold gamble created the luxury steel sports watch category.",
    category: "Heritage",
    readTime: "9 min read",
    imagePath: "magazine-royaloak-article.jpg"
  },
  {
    id: "mechanical-watchmaking",
    title: "Inside the Manufacture: The Art of Mechanical Watchmaking",
    excerpt: "A detailed look at the traditional crafts that bring haute horlogerie to life.",
    category: "Craftsmanship",
    readTime: "15 min read",
    imagePath: "magazine-manufacture-article.jpg"
  },
  {
    id: "investment-watches-2024",
    title: "Investment-Grade Timepieces: Market Insights for 2024",
    excerpt: "Which references are holding value, appreciating, and worth considering for serious collectors.",
    category: "Market",
    readTime: "11 min read",
    imagePath: "magazine-investment-article.jpg"
  }
];

export default function MagazinePage() {
  return (
    <>
      <SEO 
        title="Magazine - Maison Caldor"
        description="Insights on horological heritage, collecting, design, and the art of fine watchmaking from Maison Caldor."
      />
      <AnnouncementBar />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container">
          <div className="max-w-4xl mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-accent">
              The Magazine
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights on horological heritage, collecting, design, and the art of fine watchmaking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link href={`/magazine/${article.id}`}>
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-muted">
                    <ImagePlaceholder
                      src=""
                      alt={article.title}
                      uploadPath={getPlaceholderPath(article.imagePath)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      aspectRatio="4/3"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-primary uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground ml-4">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-light mb-4 text-accent group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                    <span className="text-sm">Read article</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}