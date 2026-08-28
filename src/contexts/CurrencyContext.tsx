import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Currency = "USD" | "EUR" | "GBP";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceUSD: number) => number;
  formatPrice: (priceUSD: number) => string;
}

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    const saved = localStorage.getItem("maison-caldor-currency") as Currency;
    if (saved && exchangeRates[saved]) {
      setCurrency(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("maison-caldor-currency", currency);
  }, [currency]);

  const convertPrice = (priceUSD: number): number => {
    return Math.round(priceUSD * exchangeRates[currency]);
  };

  const formatPrice = (priceUSD: number): string => {
    const converted = convertPrice(priceUSD);
    return `${currencySymbols[currency]}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}