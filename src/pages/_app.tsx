import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { CompareProvider } from "@/contexts/CompareContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { CompareDrawer } from "@/components/CompareDrawer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrencyProvider>
      <CartProvider>
        <WishlistProvider>
          <CompareProvider>
            <Component {...pageProps} />
            <CompareDrawer />
          </CompareProvider>
        </WishlistProvider>
      </CartProvider>
    </CurrencyProvider>
  );
}