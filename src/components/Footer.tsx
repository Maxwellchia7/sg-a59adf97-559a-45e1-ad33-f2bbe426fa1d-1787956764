import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Footer() {
  const footerSections = {
    buy: [
      { label: "All Watches", href: "/shop" },
      { label: "Rolex", href: "/collections/rolex" },
      { label: "Patek Philippe", href: "/collections/patek-philippe" },
      { label: "Audemars Piguet", href: "/collections/audemars-piguet" },
      { label: "Omega", href: "/collections/omega" },
      { label: "Cartier", href: "/collections/cartier" },
    ],
    house: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about#story" },
      { label: "Authentication", href: "/about#authentication" },
      { label: "5-Year Warranty", href: "/about#warranty" },
    ],
    help: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-light mb-6 text-primary">Maison Caldor</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Authenticated luxury timepieces with a 5-year warranty. Worldwide shipping.
            </p>
            <a
              href="https://wa.me/16462440064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              +1 (646) 244-0064
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Buy</h4>
            <ul className="space-y-2">
              {footerSections.buy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">The House</h4>
            <ul className="space-y-2">
              {footerSections.house.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Help</h4>
            <ul className="space-y-2">
              {footerSections.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Maison Caldor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}