"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RoutePreloader = () => {
  const router = useRouter();

  useEffect(() => {
    // Preload critical routes
    const preloadRoutes = [
      '/about',
      '/projects',
      '/skills',
      '/experience',
      '/contact'
    ];

    // Preload routes when component mounts
    preloadRoutes.forEach(route => {
      router.prefetch(route);
    });

    // Preload routes on hover
    const handleMouseEnter = (event) => {
      const link = event.target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.pathname !== window.location.pathname) {
          router.prefetch(url.pathname);
        }
      }
    };

    // Add event listeners to all navigation links
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, [router]);

  return null;
};

export default RoutePreloader;
