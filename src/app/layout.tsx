import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GroceryMart - Online Grocery Ordering",
  description: "Your one-stop shop for fresh groceries and household essentials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
