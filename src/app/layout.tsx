import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "./context/CartContext"; // ⬅️ добавьте это

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourmet Haven",
  description: "Ресторан Gourmet Haven - изысканная кухня и уютная атмосфера",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <CartProvider> {/* ⬅️ оборачиваем все содержимое */}
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
