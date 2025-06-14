import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import { metadata as siteMetadata } from './metadata'
import { GoogleAnalytics } from '@/lib/analytics'
import { getStructuredData } from '@/lib/structured-data'
import Script from 'next/script'
import CookieConsent from '@/components/CookieConsent'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clásico Barbershop | Luxury Grooming Experience',
  description: 'Experience the art of premium grooming at Clásico Barbershop. Where tradition meets innovation in a sophisticated atmosphere.',
  keywords: 'barbershop, luxury grooming, premium haircuts, beard trim, shaving, men\'s grooming',
  authors: [{ name: 'Clásico Barbershop' }],
  openGraph: {
    title: 'Clásico Barbershop | Luxury Grooming Experience',
    description: 'Experience the art of premium grooming at Clásico Barbershop. Where tradition meets innovation in a sophisticated atmosphere.',
    url: 'https://clasicobarbershop.com',
    siteName: 'Clásico Barbershop',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clásico Barbershop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        
        {/* Structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
      </head>
      <body className="min-h-screen bg-white text-primary antialiased font-sans selection:bg-accent/20 selection:text-accent">
        <CustomCursor />
        <Navigation />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
        <CookieConsent />
        <PerformanceMonitor />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
} 