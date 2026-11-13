'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '@/lib/store';
import { CHAPTERS } from '@/lib/scenes/config';

export function CameraRig() {
  const { scrollProgress } = useAppStore();
  const { camera, scene } = useThree();

  // Mouse parallax state
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isTouchDevice = useRef(false);

  // Directional sun light & ambient light refs
  const sunLightRef = useRef<THREE.DirectionalLight>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);

  // Reusable vectors for performance
  const currentPos = useRef(new THREE.Vector3());
  const currentLookAt = useRef(new THREE.Vector3());
  const targetPos = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());

  useEffect(() => {
    // Detect touch
    if (typeof window !== 'undefined') {
      isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      const handleMouseMove = (e: MouseEvent) => {
        if (isTouchDevice.current) return;
        // Normalize mouse coordinates from -1 to 1
        mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useFrame((_, delta) => {
    const p = THREE.MathUtils.clamp(scrollProgress, 0, 1);

    // Smooth mouse lerp
    mouse.current.x = THREE.MathUtils.damp(mouse.current.x, mouse.current.targetX, 4, delta);
    mouse.current.y = THREE.MathUtils.damp(mouse.current.y, mouse.current.targetY, 4, delta);

    // Calculate interpolated camera position and lookAt across the 8 chapters
    // Find the current active segment
    let startChapter = CHAPTERS[0];
    let endChapter = CHAPTERS[1];
    let segmentProgress = 0;

    for (let i = 0; i < CHAPTERS.length - 1; i++) {
      const c1 = CHAPTERS[i];
      const c2 = CHAPTERS[i + 1];
      if (p >= c1.range[0] && p <= c2.range[0]) {
        startChapter = c1;
        endChapter = c2;
        const segmentDuration = c2.range[0] - c1.range[0];
        segmentProgress = segmentDuration > 0 ? (p - c1.range[0]) / segmentDuration : 0;
        break;
      }
    }

    if (p > CHAPTERS[CHAPTERS.length - 1].range[0]) {
      startChapter = CHAPTERS[CHAPTERS.length - 2];
      endChapter = CHAPTERS[CHAPTERS.length - 1];
      const segmentDuration = 1 - startChapter.range[0];
      segmentProgress = segmentDuration > 0 ? (p - startChapter.range[0]) / segmentDuration : 1;
    }

    // Apply smoothstep easing to segment
    const easedP = THREE.MathUtils.smoothstep(segmentProgress, 0, 1);

    // Interpolate positions
    targetPos.current.set(
      THREE.MathUtils.lerp(startChapter.camera.pos[0], endChapter.camera.pos[0], easedP),
      THREE.MathUtils.lerp(startChapter.camera.pos[1], endChapter.camera.pos[1], easedP),
      THREE.MathUtils.lerp(startChapter.camera.pos[2], endChapter.camera.pos[2], easedP)
    );

    targetLookAt.current.set(
      THREE.MathUtils.lerp(startChapter.camera.lookAt[0], endChapter.camera.lookAt[0], easedP),
      THREE.MathUtils.lerp(startChapter.camera.lookAt[1], endChapter.camera.lookAt[1], easedP),
      THREE.MathUtils.lerp(startChapter.camera.lookAt[2], endChapter.camera.lookAt[2], easedP)
    );

    // Desktop pointer parallax: subtle +/- 2.5 degrees (0.04 radians)
    if (!isTouchDevice.current) {
      const parallaxFactor = p > 0.45 && p < 0.85 ? 0.4 : 0.7;
      targetPos.current.x += mouse.current.x * parallaxFactor;
      targetPos.current.y += mouse.current.y * (parallaxFactor * 0.5);
    }

    // Damp camera position for soft easing
    currentPos.current.lerp(targetPos.current, 0.08);
    currentLookAt.current.lerp(targetLookAt.current, 0.08);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);

    // Dynamic Lighting & Atmosphere Transition (Chapter 7: 0.80 to 0.92)
    // Day: Warm sun from top-left, Ivory background
    // Evening: Dusk Umber (#3A332C), warm amber glow
    if (sunLightRef.current && ambientLightRef.current) {
      if (p >= 0.78 && p <= 0.94) {
        const duskP = THREE.MathUtils.smoothstep((p - 0.78) / 0.14, 0, 1);
        sunLightRef.current.intensity = THREE.MathUtils.lerp(1.8, 0.2, duskP);
        sunLightRef.current.color.set(duskP > 0.5 ? '#F39C12' : '#FFF9EE');
        ambientLightRef.current.intensity = THREE.MathUtils.lerp(1.1, 0.35, duskP);
        ambientLightRef.current.color.set(duskP > 0.5 ? '#D35400' : '#F6F1E9');

        // Scene background transition
        if (scene.background instanceof THREE.Color) {
          scene.background.lerpColors(
            new THREE.Color('#F6F1E9'),
            new THREE.Color('#3A332C'),
            duskP
          );
        }
      } else if (p > 0.94) {
        // Return to Ivory for plinth miniature
        const returnP = THREE.MathUtils.smoothstep((p - 0.94) / 0.06, 0, 1);
        sunLightRef.current.intensity = THREE.MathUtils.lerp(0.2, 1.8, returnP);
        sunLightRef.current.color.set('#FFF9EE');
        ambientLightRef.current.intensity = THREE.MathUtils.lerp(0.35, 1.1, returnP);
        ambientLightRef.current.color.set('#F6F1E9');

        if (scene.background instanceof THREE.Color) {
          scene.background.lerpColors(
            new THREE.Color('#3A332C'),
            new THREE.Color('#F6F1E9'),
            returnP
          );
        }
      } else {
        // Daytime full calm clarity
        sunLightRef.current.intensity = 1.8;
        sunLightRef.current.color.set('#FFF9EE');
        ambientLightRef.current.intensity = 1.1;
        ambientLightRef.current.color.set('#F6F1E9');
        if (scene.background instanceof THREE.Color) {
          scene.background.set('#F6F1E9');
        }
      }
    }
  });

  return (
    <>
      {/* Daylight Sun: Warm top-left architectural angle */}
      <directionalLight
        ref={sunLightRef}
        position={[-8, 14, 8]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={35}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-bottom={-7}
        shadow-bias={-0.0005}
      />

      {/* Soft Fill Light from opposite side */}
      <directionalLight position={[8, 6, -6]} intensity={0.4} color="#E9E0D1" />

      {/* Ambient Diffuse Bounce */}
      <ambientLight ref={ambientLightRef} intensity={1.1} color="#F6F1E9" />
    </>
  );
}

