import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Submariner Date",
    brand: "Rolex",
    price: 14500,
    description: "The iconic Rolex Submariner Date combines legendary diving functionality with timeless elegance. Features a black ceramic bezel, luminescent markers, and the reliable 3135 movement.",
    image: "/generated/product-rolex-sub.png",
    images: ["/generated/product-rolex-sub.png"],
    category: "mens",
    condition: "excellent",
    year: 2019,
    reference: "116610LN",
    features: [
      "Automatic movement",
      "300m water resistance",
      "Ceramic bezel",
      "Date display",
      "Oyster bracelet"
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Nautilus 5711",
    brand: "Patek Philippe",
    price: 89500,
    description: "The legendary Patek Philippe Nautilus 5711 with its iconic porthole design. Blue horizontal embossed dial, self-winding movement, and integrated stainless steel bracelet.",
    image: "/generated/product-patek-nautilus.png",
    images: ["/generated/product-patek-nautilus.png"],
    category: "mens",
    condition: "excellent",
    year: 2018,
    reference: "5711/1A-010",
    features: [
      "Automatic movement",
      "120m water resistance",
      "Date display",
      "Sapphire crystal",
      "Integrated bracelet"
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Royal Oak 15400",
    brand: "Audemars Piguet",
    price: 32500,
    description: "Audemars Piguet Royal Oak 15400 featuring the iconic octagonal bezel with exposed screws, tapisserie dial pattern, and integrated bracelet. A masterpiece of haute horlogerie.",
    image: "/generated/product-ap-royaloak.png",
    images: ["/generated/product-ap-royaloak.png"],
    category: "mens",
    condition: "very-good",
    year: 2017,
    reference: "15400ST.OO.1220ST.03",
    features: [
      "Automatic movement",
      "50m water resistance",
      "Tapisserie dial",
      "Date display",
      "Integrated bracelet"
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "Speedmaster Professional",
    brand: "Omega",
    price: 6200,
    description: "The legendary Omega Speedmaster Professional 'Moonwatch'. Manually-wound chronograph movement, hesalite crystal, and the classic design worn on the moon.",
    image: "/generated/product-omega-speedmaster.png",
    images: ["/generated/product-omega-speedmaster.png"],
    category: "mens",
    condition: "excellent",
    year: 2020,
    reference: "311.30.42.30.01.005",
    features: [
      "Manual-wind chronograph",
      "50m water resistance",
      "Hesalite crystal",
      "Tachymeter bezel",
      "Leather strap"
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Daytona Platinum",
    brand: "Rolex",
    price: 75000,
    description: "Rolex Cosmograph Daytona in platinum with ice blue dial. Rare and prestigious chronograph featuring the caliber 4130 movement and black ceramic bezel.",
    image: "/generated/product-rolex-daytona.png",
    images: ["/generated/product-rolex-daytona.png"],
    category: "mens",
    condition: "excellent",
    year: 2021,
    reference: "116506",
    features: [
      "Automatic chronograph",
      "100m water resistance",
      "Platinum case",
      "Ceramic bezel",
      "Oyster bracelet"
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Santos de Cartier",
    brand: "Cartier",
    price: 7800,
    description: "Cartier Santos de Cartier, the pioneering pilot's watch. Square case with exposed screws, blue hands, and the QuickSwitch bracelet system.",
    image: "/generated/product-cartier-santos.png",
    images: ["/generated/product-cartier-santos.png"],
    category: "mens",
    condition: "excellent",
    year: 2020,
    reference: "WSSA0009",
    features: [
      "Automatic movement",
      "100m water resistance",
      "Square case",
      "Roman numerals",
      "QuickSwitch system"
    ],
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}