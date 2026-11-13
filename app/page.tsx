'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MobileHero } from '@/components/sections/MobileHero';
import { ScrollJourneyOverlay } from '@/components/sections/ScrollJourneyOverlay';
import { HomeSections } from '@/components/sections/HomeSections';

// Dynamic import with ssr: false for Three.js Canvas to ensure zero hydration mismatch
const SceneContainer = dynamic(
  () => import('@/components/three/SceneContainer').then((mod) => mod.SceneContainer),
  { ssr: false }
);

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* PHONE & TABLET VIEW (< 1024px): Fast, Editorial Architectural Hero */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>

      {/* DESKTOP VIEW (>= 1024px): 3D Architectural Scene Canvas + 800vh Scroll Journey */}
      <div className="hidden lg:block">
        {isDesktop && <SceneContainer />}
        <ScrollJourneyOverlay />
      </div>

      {/* Main Content: Portfolio, Services, Why Choose Us, Journal, Lead Consultation */}
      <HomeSections />
    </div>
  );
}
