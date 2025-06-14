import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  margin?: string;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: options.threshold || 0.1,
    triggerOnce: options.triggerOnce ?? true,
    margin: options.margin || "-100px",
  });

  return { ref, isInView };
} 