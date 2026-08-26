import type { Product } from "@/types/product";

// NOTE: Chrono24 URLs blocked with 403 Forbidden due to hotlink protection.
// Using local copies in public/products/ directory instead.
// See public/IMAGE-UPLOAD-INSTRUCTIONS.md for upload details.

export const products: Product[] = [
  {
    id: "rolex-submariner-116610ln",
    name: "Submariner Date",
    brand: "Rolex",
    reference: "116610LN",
    price: 14500,
    image: "/products/rolex-submariner-116610ln-main.jpg",
    images: [
      "/products/rolex-submariner-116610ln-main.jpg",
      "/products/rolex-submariner-116610ln-2.jpg",
      "/products/rolex-submariner-116610ln-3.jpg",
      "/products/rolex-submariner-116610ln-4.jpg",
      "/products/rolex-submariner-116610ln-5.jpg",
      "/products/rolex-submariner-116610ln-6.jpg",
      "/products/rolex-submariner-116610ln-7.jpg",
      "/products/rolex-submariner-116610ln-8.jpg"
    ],
    description: "The iconic Rolex Submariner Date in stainless steel with black ceramic bezel. The reference 116610LN is the culmination of decades of dive watch evolution.",
    category: "mens",
    condition: "excellent",
    features: [
      "Oyster Perpetual automatic movement",
      "40mm case diameter",
      "Ceramic Cerachrom bezel",
      "300m water resistance",
      "Glidelock clasp extension",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "patek-nautilus-5711",
    name: "Nautilus",
    brand: "Patek Philippe",
    reference: "5711/1A-010",
    price: 89500,
    image: "/products/patek-nautilus-5711.jpg",
    images: [
      "/products/patek-nautilus-5711.jpg"
    ],
    description: "The legendary Patek Philippe Nautilus in stainless steel. One of the most sought-after luxury sports watches in the world.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 26-330 S C",
      "40mm case diameter",
      "Blue dial with horizontal embossing",
      "120m water resistance",
      "Date display",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "ap-royaloak-15400st",
    name: "Royal Oak",
    brand: "Audemars Piguet",
    reference: "15400ST.OO.1220ST.03",
    price: 42500,
    image: "/products/ap-royaloak-15400st.jpg",
    images: [
      "/products/ap-royaloak-15400st.jpg"
    ],
    description: "The Audemars Piguet Royal Oak in stainless steel with silver-toned 'Grande Tapisserie' dial. An icon of luxury sports watch design.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 3120",
      "41mm case diameter",
      "Grande Tapisserie dial",
      "50m water resistance",
      "Date display",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "omega-speedmaster-moonwatch",
    name: "Speedmaster Professional Moonwatch",
    brand: "Omega",
    reference: "311.30.42.30.01.005",
    price: 6200,
    image: "/products/omega-speedmaster.jpg",
    images: [
      "/products/omega-speedmaster.jpg"
    ],
    description: "The legendary Omega Speedmaster Professional, the first watch worn on the moon. Hesalite crystal and manual-wound movement.",
    category: "mens",
    condition: "excellent",
    features: [
      "Manual-wound Caliber 1861",
      "42mm case diameter",
      "Hesalite crystal",
      "50m water resistance",
      "Tachymeter bezel",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "cartier-santos-wssa0009",
    name: "Santos de Cartier",
    brand: "Cartier",
    reference: "WSSA0009",
    price: 7100,
    image: "/products/cartier-santos.jpg",
    images: [
      "/products/cartier-santos.jpg"
    ],
    description: "The Cartier Santos in stainless steel with iconic square case and blue hands. A timeless dress watch with aviation heritage.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 1847 MC",
      "39.8mm case diameter",
      "Sapphire crystal",
      "100m water resistance",
      "Date display",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "rolex-daytona-116500ln",
    name: "Cosmograph Daytona 'Panda'",
    brand: "Rolex",
    reference: "116500LN",
    price: 35800,
    image: "/products/rolex-daytona-panda.jpg",
    images: [
      "/products/rolex-daytona-panda.jpg"
    ],
    description: "The Rolex Cosmograph Daytona with white dial and black sub-dials, known as the 'Panda' configuration. Ceramic bezel and Oystersteel case.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 4130",
      "40mm case diameter",
      "Ceramic Cerachrom bezel",
      "100m water resistance",
      "Chronograph function",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "patek-aquanaut-5167a",
    name: "Aquanaut",
    brand: "Patek Philippe",
    reference: "5167A-001",
    price: 42500,
    image: "/products/patek-aquanaut.jpg",
    images: [
      "/products/patek-aquanaut.jpg"
    ],
    description: "The Patek Philippe Aquanaut in stainless steel with black embossed dial and tropical composite strap.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 26-330 S C",
      "40mm case diameter",
      "Black embossed dial",
      "120m water resistance",
      "Date display",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "omega-seamaster-300m",
    name: "Seamaster Diver 300M",
    brand: "Omega",
    reference: "210.30.42.20.01.001",
    price: 5400,
    image: "/products/omega-seamaster-300m.jpg",
    images: [
      "/products/omega-seamaster-300m.jpg"
    ],
    description: "The Omega Seamaster Professional Diver 300M with black ceramic dial and wave pattern. Master Chronometer certified.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 8800",
      "42mm case diameter",
      "Ceramic dial with wave pattern",
      "300m water resistance",
      "Helium escape valve",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "iwc-portugieser-iw371605",
    name: "Portugieser Chronograph",
    brand: "IWC",
    reference: "IW371605",
    price: 8900,
    image: "/products/iwc-portugieser.jpg",
    images: [
      "/products/iwc-portugieser.jpg"
    ],
    description: "The IWC Portugieser Chronograph with silver-plated dial and leaf-shaped hands. Classic dress chronograph design.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 79350",
      "41mm case diameter",
      "Silver-plated dial",
      "30m water resistance",
      "Chronograph function",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "rolex-gmt-master-ii-126710blnr",
    name: "GMT-Master II 'Batgirl'",
    brand: "Rolex",
    reference: "126710BLNR",
    price: 18900,
    image: "/products/rolex-gmt-master-ii.jpg",
    images: [
      "/products/rolex-gmt-master-ii.jpg"
    ],
    description: "The Rolex GMT-Master II with blue and black ceramic bezel, nicknamed 'Batgirl'. Jubilee bracelet and GMT function.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 3285",
      "40mm case diameter",
      "Ceramic Cerachrom bezel",
      "100m water resistance",
      "GMT function",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "cartier-tank-must-wsta0041",
    name: "Tank Must",
    brand: "Cartier",
    reference: "WSTA0041",
    price: 3200,
    image: "/products/11.jpg",
    images: ["/products/11.jpg"],
    description: "The Cartier Tank Must in stainless steel with silver-toned dial. A timeless rectangular dress watch with Roman numerals.",
    category: "mens",
    condition: "excellent",
    features: [
      "Quartz movement",
      "33.7mm x 25.5mm case",
      "Sapphire crystal",
      "30m water resistance",
      "Blue synthetic spinel cabochon",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "tudor-bb58-79030n",
    name: "Black Bay Fifty-Eight",
    brand: "Tudor",
    reference: "79030N",
    price: 3900,
    image: "/products/12.jpg",
    images: ["/products/12.jpg"],
    description: "The Tudor Black Bay Fifty-Eight with gilt details and black dial. Vintage-inspired dive watch with modern reliability.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber MT5402",
      "39mm case diameter",
      "Aluminum bezel insert",
      "200m water resistance",
      "Gilt details",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "ap-royaloak-chrono-26331st",
    name: "Royal Oak Chronograph",
    brand: "Audemars Piguet",
    reference: "26331ST.OO.1220ST.03",
    price: 54900,
    image: "/products/13.jpg",
    images: ["/products/13.jpg"],
    description: "The Audemars Piguet Royal Oak Chronograph with silver dial and integrated chronograph pushers.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 2385",
      "41mm case diameter",
      "Integrated chronograph",
      "50m water resistance",
      "Date display",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "omega-planet-ocean-215.30.44.21.01.001",
    name: "Seamaster Planet Ocean",
    brand: "Omega",
    reference: "215.30.44.21.01.001",
    price: 6700,
    image: "/products/14.jpg",
    images: ["/products/14.jpg"],
    description: "The Omega Seamaster Planet Ocean with black ceramic bezel and orange accents. Professional dive watch with Co-Axial movement.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 8500",
      "43.5mm case diameter",
      "Ceramic bezel",
      "600m water resistance",
      "Helium escape valve",
      "Box and papers"
    ],
    inStock: true,
  },
  {
    id: "rolex-datejust-36-126234",
    name: "Datejust 36",
    brand: "Rolex",
    reference: "126234",
    price: 11200,
    image: "/products/15.jpg",
    images: ["/products/15.jpg"],
    description: "The Rolex Datejust 36 with white dial and fluted bezel. Classic dress watch with timeless design.",
    category: "mens",
    condition: "excellent",
    features: [
      "Automatic Caliber 3235",
      "36mm case diameter",
      "Fluted bezel",
      "100m water resistance",
      "Date display with Cyclops",
      "Box and papers"
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