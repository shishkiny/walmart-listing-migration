import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "24.online — AI Listing Migration to Walmart",
  description:
    "Expand your business to Walmart in minutes. Paste your Amazon, Shopify, or Etsy product URL and get a Walmart-ready listing — structured, compliant, and ready to publish.",
  openGraph: {
    title: "24.online — AI Listing Migration to Walmart",
    description:
      "Expand your business to Walmart in minutes using your existing product data. AI-powered listing migration built on Walmart Item Spec 5.0.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
