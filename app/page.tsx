'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ScrollJourneyOverlay } from '@/components/sections/ScrollJourneyOverlay';
import { HomeSections } from '@/components/sections/HomeSections';

// Dynamic import with ssr: false for Three.js Canvas to ensure zero hydration mismatch
const SceneContainer = dynamic(
  () => import('@/components/three/SceneContainer').then((mod) => mod.SceneContainer),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* Pinned 3D Architectural Scene Canvas (Fixed background) */}
      <SceneContainer />

      {/* 8-Chapter Scroll-Driven Journey (800vh pinned sequence) */}
      <ScrollJourneyOverlay />

      {/* Continuation of Page: Portfolio, Services, Why Choose, Journal, Lead Consultation */}
      <HomeSections />
    </div>
  );
}

