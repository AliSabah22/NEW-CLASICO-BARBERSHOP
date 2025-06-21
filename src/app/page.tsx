"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/sections/Footer";
import ErrorBoundary from '@/components/ErrorBoundary';

export default function HomePage() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
        <Footer />
      </main>
    </ErrorBoundary>
  );
} 