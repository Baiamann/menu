import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/app/context/CartContext";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "La Dolce Vita - Итальянский ресторан",
  description: "Лучший итальянский ресторан в городе",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main style={{ paddingTop: "80px" }}>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
