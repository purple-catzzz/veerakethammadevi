import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Sri Veerakethamma Temple, Kallumarri",
  description: "Welcome to Sri Veerakethamma Temple, Kallumarri. Find timings, upcoming events, sevas, and donation details.",
  openGraph: {
    title: "Sri Veerakethamma Temple",
    description: "Welcome to Sri Veerakethamma Temple, Kallumarri.",
    url: "https://sriveerakethamma.org",
    siteName: "Sri Veerakethamma Temple",
    images: [
      {
        url: "https://sriveerakethamma.org/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Placeholder for favicon */}
      </head>
      <body className={`${inter.variable} ${cinzel.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body >
    </html>
  );
}
