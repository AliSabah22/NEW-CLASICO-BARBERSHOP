import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Clasico Barbershop | Premium Grooming Experience",
  description: "Experience luxury grooming at Clasico Barbershop. Premium haircuts, beard trims, and traditional shaves in an elegant atmosphere.",
  keywords: "barbershop, luxury grooming, haircuts, beard trim, traditional shave, premium barbershop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-sans text-black antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
