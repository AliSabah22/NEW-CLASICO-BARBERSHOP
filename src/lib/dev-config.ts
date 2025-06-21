// Development optimizations for reliable, fast compilation
export const devConfig = {
  // Reduce animation complexity in development
  reducedAnimations: process.env.NODE_ENV === 'development',
  
  // Disable heavy features in development
  disableHeavyFeatures: process.env.NODE_ENV === 'development',
  
  // Optimize image loading
  optimizeImages: true,
  
  // Reduce particle count in development
  particleCount: process.env.NODE_ENV === 'development' ? 3 : 20,
  
  // Disable luxury effects in development for faster compilation
  disableLuxuryEffects: process.env.NODE_ENV === 'development',
  
  // Disable complex animations in development
  disableComplexAnimations: process.env.NODE_ENV === 'development',
  
  // Use simpler gradients in development
  useSimpleGradients: process.env.NODE_ENV === 'development',
  
  // Reduce motion complexity
  reduceMotion: process.env.NODE_ENV === 'development',
  
  // Disable all hover effects to eliminate flashing
  disableHoverEffects: process.env.NODE_ENV === 'development',
};

// Performance helpers
export const performanceHelpers = {
  // Debounce function for performance
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function for performance
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
}; 