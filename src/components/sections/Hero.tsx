"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BookingCTA from '@/components/ui/BookingCTA';
import { devConfig } from '@/lib/dev-config';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (devConfig.disableHeavyFeatures) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Luxury Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <OptimizedImage
          src="/images/hero-bg.jpg"
          alt="Luxury barbershop interior"
          fill
          className="object-cover"
          priority
          quality={devConfig.optimizeImages ? 60 : 95}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+OjU1O0FBRkZGRkZGRkZGRkZGRkZGRkb/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Luxury Gradient Overlay */}
        <div className={`absolute inset-0 ${devConfig.useSimpleGradients ? 'bg-black/70' : 'bg-gradient-to-br from-black/70 via-black/50 to-black/80'}`} />
        
        {/* Animated Luxury Elements - Disabled in development */}
        {!devConfig.disableLuxuryEffects && !devConfig.disableHeavyFeatures && (
          <div className="absolute inset-0">
            {/* Floating Particles - Reduced count */}
            {[...Array(devConfig.particleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={devConfig.reducedAnimations ? {} : {
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={devConfig.reducedAnimations ? {} : {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Luxury Light Rays - Disabled in development */}
            {!devConfig.disableComplexAnimations && (
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
                }}
              />
            )}
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: devConfig.reducedAnimations ? 0.3 : 1.2, delay: 0.3 }}
          className="space-y-10"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: devConfig.reducedAnimations ? 0.2 : 0.8, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-md rounded-full text-gold text-sm font-medium border border-gold/30 shadow-2xl"
          >
            <motion.span 
              className="w-3 h-3 bg-gold rounded-full mr-3"
              animate={devConfig.reducedAnimations ? {} : { 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={devConfig.reducedAnimations ? {} : { duration: 2, repeat: Infinity }}
            />
            <span className="font-semibold tracking-wide">PREMIUM BARBERSHOP EXPERIENCE</span>
            <motion.span 
              className="w-3 h-3 bg-gold rounded-full ml-3"
              animate={devConfig.reducedAnimations ? {} : { 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={devConfig.reducedAnimations ? {} : { duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Main Title with Luxury Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: devConfig.reducedAnimations ? 0.3 : 1, delay: 0.9 }}
            className="space-y-4"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: devConfig.reducedAnimations ? 0.4 : 1.2, delay: 1.2 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: devConfig.reducedAnimations ? 0.3 : 1, delay: 1.4 }}
              >
                CLASICO
              </motion.span>
              <motion.span 
                className={`block ${devConfig.useSimpleGradients ? 'text-gold' : 'bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent'}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: devConfig.reducedAnimations ? 0.3 : 1, delay: 1.6 }}
              >
                BARBERSHOP
              </motion.span>
            </motion.h1>
            
            {/* Luxury Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: devConfig.reducedAnimations ? 0.2 : 0.8, delay: 1.8 }}
              className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Where <span className="text-gold font-semibold">precision</span> meets <span className="text-gold font-semibold">luxury</span>, 
              and every cut tells a story of <span className="text-gold font-semibold">excellence</span>.
            </motion.p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: devConfig.reducedAnimations ? 0.2 : 0.8, delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <div>
              <BookingCTA size="lg" variant="primary" className="px-12 py-5 text-lg font-semibold shadow-2xl">
                <span className="mr-2">✨</span>
                Book Your Experience
                <span className="ml-2">✨</span>
              </BookingCTA>
            </div>
            
            <div>
              <BookingCTA size="lg" variant="outline" className="px-12 py-5 text-lg font-semibold border-2">
                Discover Our Services
              </BookingCTA>
            </div>
          </motion.div>

          {/* Luxury Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: devConfig.reducedAnimations ? 0.2 : 0.8, delay: 2.4 }}
            className="flex justify-center space-x-12 mt-16"
          >
            {[
              { number: '1000+', label: 'Elite Clients', icon: '👑' },
              { number: '5★', label: 'Luxury Rating', icon: '⭐' },
              { number: '15+', label: 'Years of Excellence', icon: '🏆' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: devConfig.reducedAnimations ? 0.2 : 0.6, delay: 2.7 + index * 0.2 }}
                className="text-center group"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Scroll Indicator - Simplified in development */}
      {!devConfig.disableComplexAnimations && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: devConfig.reducedAnimations ? 0.3 : 1, delay: 3 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={devConfig.reducedAnimations ? {} : { y: [0, 15, 0] }}
            transition={devConfig.reducedAnimations ? {} : { duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-white/60 text-sm font-medium tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-8 h-12 border-2 border-gold/40 rounded-full flex justify-center relative">
              <motion.div
                animate={devConfig.reducedAnimations ? {} : { y: [0, 20, 0] }}
                transition={devConfig.reducedAnimations ? {} : { duration: 2.5, repeat: Infinity }}
                className="w-1 h-3 bg-gold rounded-full mt-3"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Luxury Corner Decorations - Simplified in development */}
      {!devConfig.disableHeavyFeatures && (
        <>
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/30" />
        </>
      )}
    </section>
  );
} 