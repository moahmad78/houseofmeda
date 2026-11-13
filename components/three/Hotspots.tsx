'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '@/lib/store';
import { HOTSPOTS_DATA } from '@/lib/scenes/config';

export function Hotspots() {
  const { scrollProgress, setActiveHotspot, activeHotspot } = useAppStore();
  const groupRef = useRef<THREE.Group>(null);

  // Visible strictly around Chapter 6 (0.58 to 0.82)
  const isVisible = scrollProgress >= 0.58 && scrollProgress <= 0.84;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    // Gentle floating breathing animation
    groupRef.current.position.y = Math.sin(t * 2) * 0.04;
  });

  if (!isVisible) return null;

  return (
    <group ref={groupRef}>
      {HOTSPOTS_DATA.map((spot) => {
        const isSelected = activeHotspot?.id === spot.id;

        return (
          <group key={spot.id} position={spot.position}>
            {/* 3D Invisible Raycasting Hit Sphere for direct Canvas tap/click/hover */}
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(spot);
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                setActiveHotspot(spot);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
                setActiveHotspot(spot);
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
              }}
            >
              <sphereGeometry args={[1.2, 16, 16]} />
              <meshBasicMaterial transparent opacity={0} depthWrite={false} />
            </mesh>

            {/* HTML Overlay Marker for crisp UI, visual ring, and direct DOM tap/hover */}
            <Html
              center
              distanceFactor={10}
              zIndexRange={[100, 0]}
              style={{ pointerEvents: 'auto' }}
            >
              <button
                type="button"
                style={{ pointerEvents: 'auto' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(spot);
                }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(spot);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(spot);
                }}
                onMouseEnter={() => {
                  setActiveHotspot(spot);
                }}
                onPointerEnter={() => {
                  setActiveHotspot(spot);
                }}
                className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 pointer-events-auto cursor-pointer ${
                  isSelected ? 'scale-125' : 'hover:scale-115'
                }`}
                aria-label={`Inspect ${spot.title}`}
              >
                {/* Outer Pulsing Ring */}
                <span
                  className={`absolute -inset-1.5 rounded-full border-2 animate-ping pointer-events-none ${
                    isSelected ? 'border-walnut opacity-90' : 'border-moss/80 opacity-70'
                  }`}
                />
                
                {/* Middle Ring with 3D Depth */}
                <span
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full bg-ivory-linen shadow-floating border-2 text-charcoal transition-all ${
                    isSelected
                      ? 'border-walnut ring-4 ring-walnut/25 scale-110'
                      : 'border-moss/60 group-hover:scale-110'
                  }`}
                >
                  <span
                    className={`h-3 w-3 rounded-full transition-colors animate-pulse ${
                      isSelected ? 'bg-walnut' : 'bg-moss group-hover:bg-walnut'
                    }`}
                  />
                </span>

                {/* Hover Tooltip Label */}
                <span className="absolute left-10 whitespace-nowrap rounded-subtle bg-charcoal text-ivory px-3 py-1.5 text-xs font-sans font-medium tracking-wide opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                  {spot.title} (Tap to inspect)
                </span>
              </button>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

