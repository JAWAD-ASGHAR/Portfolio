"use client";

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor navigation performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation Performance:', {
            loadEventEnd: entry.loadEventEnd - entry.loadEventStart,
            domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            firstPaint: entry.loadEventEnd - entry.fetchStart,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor route changes
    const handleRouteChange = () => {
      const startTime = performance.now();
      
      return () => {
        const endTime = performance.now();
        console.log(`Route change took: ${endTime - startTime}ms`);
      };
    };

    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
          console.warn('High memory usage detected:', {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
          });
        }
      }, 10000); // Check every 10 seconds
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
