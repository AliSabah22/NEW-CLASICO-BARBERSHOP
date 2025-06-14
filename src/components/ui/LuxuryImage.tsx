"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface LuxuryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function LuxuryImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
}: LuxuryImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          >
            <LoadingSpinner size="lg" color="accent" />
          </motion.div>
        )}
      </AnimatePresence>

      {isError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <p className="text-white/60">Failed to load image</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`
            transition-opacity duration-500
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${className}
          `}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setIsError(true);
          }}
          priority={priority}
          sizes={sizes}
          quality={90}
        />
      )}
    </div>
  );
} 