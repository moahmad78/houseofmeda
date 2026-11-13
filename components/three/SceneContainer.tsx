'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { HouseModel } from './HouseModel';
import { CameraRig } from './CameraRig';
import { Hotspots } from './Hotspots';
import { useAppStore } from '@/lib/store';
import { detectDeviceTier } from '@/lib/quality';

export function SceneContainer() {
  const { qualityTier, setQualityTier } = useAppStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const tier = detectDeviceTier();
    setQualityTier(tier);
  }, [setQualityTier]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-ivory-linen">
        <div className="w-full h-full flex items-center justify-center opacity-40">
          <div className="w-24 h-24 border border-moss/30 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  const dpr = qualityTier === 'tier-a' ? [1, 2] : [1, 1.5];

  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      <Canvas
        shadows={qualityTier === 'tier-a'}
        camera={{ position: [0, 18, 0.01], fov: 35, near: 0.1, far: 80 }}
        dpr={dpr as [number, number]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor('#F6F1E9');
          // @ts-ignore
          scene.background = null;
        }}
        className="w-full h-full block pointer-events-auto"
      >
        <Suspense fallback={null}>
          <CameraRig />
          <HouseModel />
          <Hotspots />
        </Suspense>
      </Canvas>
    </div>
  );
}
