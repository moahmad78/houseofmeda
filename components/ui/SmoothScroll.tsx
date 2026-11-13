'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useAppStore } from '@/lib/store';
import { CHAPTERS } from '@/lib/scenes/config';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { setScrollProgress, setCurrentChapter } = useAppStore();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global scroll listener for 3D progress tracking
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const journeyEl = document.getElementById('scroll-journey-container');

      if (journeyEl) {
        const rect = journeyEl.getBoundingClientRect();
        const containerTop = journeyEl.offsetTop;
        const containerHeight = journeyEl.offsetHeight - window.innerHeight;

        if (containerHeight > 0) {
          const progress = Math.max(0, Math.min(1, (scrollY - containerTop) / containerHeight));
          setScrollProgress(progress);

          // Update active chapter index
          const activeIndex = CHAPTERS.findIndex(
            (c) => progress >= c.range[0] && progress <= c.range[1]
          );
          if (activeIndex !== -1) {
            setCurrentChapter(activeIndex);
          }
        }
      } else {
        // Normal page (e.g. About, Services, Contact): reset 3D progress to 0
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    // Attach lenis to window for programmatic scrolling from ChapterIndicator
    // @ts-ignore
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, [setScrollProgress, setCurrentChapter]);

  return <>{children}</>;
}

