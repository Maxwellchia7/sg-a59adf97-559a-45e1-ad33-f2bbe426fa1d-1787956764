import Link from "next/link";
import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Maison Caldor"
                width={32}
                height={32}
                unoptimized
                className="h-8 w-8"
              />
              <span className="font-serif text-xl font-light tracking-wider">
                Maison Caldor
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Curating exceptional timepieces for discerning collectors worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
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