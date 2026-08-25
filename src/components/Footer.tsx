import Link from "next/link";
import { MessageCircle } from "lucide-react";

const buyLinks = [
  { label: "Men's Watches", href: "/collections/mens" },
  { label: "Women's Watches", href: "/collections/womens" },
  { label: "Pre-owned Watches", href: "/collections/pre-owned" },
  { label: "Pocket Watches", href: "/collections/pocket" },
  { label: "Watch Brands", href: "/collections" },
  { label: "Best Deals", href: "/best-deals" },
  { label: "New Arrivals", href: "/new-arrivals" },
];

const houseLinks = [
  { label: "About Maison Caldor", href: "/about" },
  { label: "Magazine", href: "/magazine" },
  { label: "News", href: "/news" },
  { label: "Reviews", href: "/reviews" },
  { label: "Private Clients", href: "/private-clients" },
  { label: "The Salon", href: "/salon" },
  { label: "Careers", href: "/careers" },
];

const helpLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
  { label: "Certificate of Authenticity", href: "/certificate" },
  { label: "Buying Guide", href: "/buying-guide" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Contact Us", href: "/contact" },
  { label: "WhatsApp Support", href: "https://wa.me/16462440064", external: true },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-xl mb-6 text-accent">Maison Caldor</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fine watches, reserved from one desk. Authentic luxury timepieces with a 5-year warranty and worldwide insured shipping.
            </p>
            <a
              href="https://wa.me/16462440064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp +1 (646) 244-0064
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Buy</h4>
            <ul className="space-y-3">
              {buyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">The House</h4>
            <ul className="space-y-3">
              {houseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Maison Caldor. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}