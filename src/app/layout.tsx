import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourmet Haven",
  description: 'Меню ресторана "Gourmet Haven"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
