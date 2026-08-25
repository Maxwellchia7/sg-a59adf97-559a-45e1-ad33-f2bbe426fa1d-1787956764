import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Product, CartItem, Cart } from "@/types/product";

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  useEffect(() => {
    const savedCart = localStorage.getItem("maison-caldor-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("maison-caldor-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existingItem = prev.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        const updatedItems = prev.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        const total = updatedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        return { items: updatedItems, total };
      } else {
        const newItems = [...prev.items, { product, quantity }];
        const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        return { items: newItems, total };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newItems = prev.items.filter(item => item.product.id !== productId);
      const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      return { items: newItems, total };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev => {
      const updatedItems = prev.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );
      const total = updatedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      return { items: updatedItems, total };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}