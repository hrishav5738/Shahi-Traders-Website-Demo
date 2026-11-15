import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "M/S SHAHI TRADERS | Powering India's Infrastructure",
  description:
    "Premium UI demo for M/S SHAHI TRADERS, specialists in electrical pole installation, highway lighting, street lighting, and power infrastructure projects.",
  keywords: [
    "M/S SHAHI TRADERS",
    "infrastructure construction",
    "electrical pole installation",
    "highway lighting",
    "street lighting",
    "power infrastructure"
  ],
  openGraph: {
    title: "M/S SHAHI TRADERS",
    description: "Powering India's Infrastructure with modern electrical and civil execution.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
