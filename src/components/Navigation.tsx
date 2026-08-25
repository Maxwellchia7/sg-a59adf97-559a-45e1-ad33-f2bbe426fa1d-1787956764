import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

const mainNavItems = [
  { label: "Desk", href: "/desk" },
  { label: "Install", href: "/install" },
  { label: "Best Deals", href: "/best-deals" },
  { label: "Reviews", href: "/reviews" },
  { label: "Magazine", href: "/magazine" },
  { label: "News", href: "/news" },
];

const shopNavItems = [
  { label: "Buy a watch", href: "/shop" },
  { label: "Watch Collection", href: "/collections" },
  { label: "Men's Watches", href: "/collections/mens" },
  { label: "Women's Watches", href: "/collections/womens" },
  { label: "Pre-owned Watches", href: "/collections/pre-owned" },
];

const aboutNavItems = [
  { label: "About", href: "/about" },
  { label: "Private clients", href: "/private-clients" },
  { label: "The salon", href: "/salon" },
  { label: "Buying guide", href: "/buying-guide" },
  { label: "Services", href: "/services" },
  { label: "Certificate", href: "/certificate" },
  { label: "FAQ", href: "/faq" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-serif font-semibold text-accent">Maison Caldor</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div 
                className="relative"
                onMouseEnter={() => setShowShopMenu(true)}
                onMouseLeave={() => setShowShopMenu(false)}
              >
                <button className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
                  Shop <ChevronDown className="h-3 w-3" />
                </button>
                {showShopMenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg py-2">
                    {shopNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setShowAboutMenu(true)}
                onMouseLeave={() => setShowAboutMenu(false)}
              >
                <button className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
                  More <ChevronDown className="h-3 w-3" />
                </button>
                {showAboutMenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg py-2">
                    {aboutNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/shop">
              <Button variant="ghost" size="icon" className="text-accent hover:text-primary">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/bag">
              <Button variant="ghost" size="icon" className="relative text-accent hover:text-primary">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-accent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Shop</p>
                    {shopNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-sm text-muted-foreground mb-2">More</p>
                    {aboutNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}