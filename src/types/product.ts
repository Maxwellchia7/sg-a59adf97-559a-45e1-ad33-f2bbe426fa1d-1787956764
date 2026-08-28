export interface Product {
  id: string;
  name: string;
  brand: string;
  reference: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  category: "mens" | "womens" | "unisex";
  condition: "like-new" | "excellent" | "very-good" | "good";
  year?: number;
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}