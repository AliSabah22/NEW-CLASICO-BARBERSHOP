"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gold/20 shadow-sm ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <div className="container-custom">
        <div className="relative flex items-center justify-between py-4 md:py-6">
          {/* Left: Barbershop Name */}
          <div className="flex-1 flex items-center min-w-0">
            <Link href="/" className="text-2xl md:text-3xl font-display text-gold tracking-wide z-10 pl-2 md:pl-4 whitespace-nowrap">
              Clasico Barbershop
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">
            <Link href="/">
              <Image
                src="/images/navbar/Logo GD-Photoroom.png"
                alt="Clasico Barbershop Logo"
                width={180}
                height={180}
                priority
                className="object-contain h-16 md:h-20 w-auto drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-x-10 pr-2 md:pr-4 z-10">
            <Link href="/services" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gold hover:text-gold/80 transition-colors hover:underline hover:underline-offset-8 hover:decoration-gold text-lg font-medium">
              Contact
            </Link>
            <Button 
              variant="default" 
              className="ml-2 bg-white text-black hover:bg-gold hover:text-white px-6 py-2 rounded-md font-semibold shadow-gold transition-all"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-7 w-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="container-custom py-4 space-y-4">
              <Link
                href="/services"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gold hover:text-gold/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="default" 
                className="w-full bg-white text-black hover:bg-gold hover:text-white"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 