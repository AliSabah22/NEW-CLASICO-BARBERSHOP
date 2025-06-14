import 'react';

declare module 'react' {
  export * from 'react';
  export const useState: typeof import('react').useState;
  export const useEffect: typeof import('react').useEffect;
}

declare module 'react-dom' {
  export * from 'react-dom';
} 