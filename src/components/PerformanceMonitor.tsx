'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export function PerformanceMonitor() {
  useReportWebVitals((metric) => {
    // You can send metrics to your analytics service here
    console.log(metric);
  });

  return null;
} 