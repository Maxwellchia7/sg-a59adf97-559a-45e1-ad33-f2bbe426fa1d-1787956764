import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Maison Caldor",
    "description": "Authenticated pre-owned luxury watches from Rolex, Patek Philippe, Audemars Piguet, Omega, and more. 5-year warranty, worldwide shipping.",
    "url": "https://maisoncaldor.com",
    "telephone": "+1-646-244-0064",
    "email": "support@maisoncaldor.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "NY",
      "addressLocality": "New York"
    },
    "priceRange": "$$$$",
    "paymentAccepted": "Wire Transfer",
    "currenciesAccepted": "USD, EUR, GBP"
  };

  return (
    <Html lang="en">
      <Head>
        <SEOElements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
