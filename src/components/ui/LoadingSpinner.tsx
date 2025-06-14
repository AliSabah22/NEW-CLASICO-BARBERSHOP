"use client";

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'accent';
}

export default function LoadingSpinner({
  size = 'md',
  color = 'white',
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colors = {
    white: 'border-white',
    accent: 'border-accent',
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} ${colors[color]} border-2 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
} 