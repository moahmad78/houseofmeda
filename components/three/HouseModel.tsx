'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '@/lib/store';
import { MOOD_PALETTES } from '@/lib/scenes/config';

export function HouseModel() {
  const { scrollProgress, currentMood } = useAppStore();

  // References for animating layers and objects
  const rootGroupRef = useRef<THREE.Group>(null);
  const ceilingLayerRef = useRef<THREE.Group>(null);
  const wallsLayerRef = useRef<THREE.Group>(null);
  const furnitureLayerRef = useRef<THREE.Group>(null);
  const floorLayerRef = useRef<THREE.Group>(null);
  const blueprintLinesRef = useRef<THREE.Group>(null);
  const eveningLampsRef = useRef<THREE.Group>(null);

  // Materials with dynamic mood updates
  const activePalette = MOOD_PALETTES[currentMood] || MOOD_PALETTES['meda-classic'];

  const wallMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.wallColor),
      roughness: 0.85,
      metalness: 0.05,
    });
  }, [activePalette.wallColor]);

  const floorMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.floorColor),
      roughness: 0.6,
      metalness: 0.1,
    });
  }, [activePalette.floorColor]);

  const accentMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.accentColor),
      roughness: 0.7,
      metalness: 0.1,
    });
  }, [activePalette.accentColor]);

  const furnitureMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(activePalette.furnitureColor),
      roughness: 0.8,
      metalness: 0.05,
    });
  }, [activePalette.furnitureColor]);

  const woodMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#8B6B4E'),
      roughness: 0.55,
      metalness: 0.08,
    });
  }, []);

  const stoneMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#D4C8B5'),
      roughness: 0.9,
      metalness: 0.05,
    });
  }, []);

  const glassMat = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      transmission: 0.85,
      ior: 1.45,
    });
  }, []);

  const plinthMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E9E0D1'),
      roughness: 0.9,
      metalness: 0.02,
    });
  }, []);

  // Blueprint wireframe lines
  const blueprintLineMat = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#4F5B4A'),
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
    });
  }, []);

  // Blueprint geometry lines created once
  const blueprintLinesGeo = useMemo(() => {
    const points: THREE.Vector3[] = [
      // Outer perimeter
      new THREE.Vector3(-4.5, 0.02, -3.5),
      new THREE.Vector3(4.5, 0.02, -3.5),
      new THREE.Vector3(4.5, 0.02, 3.5),
      new THREE.Vector3(-4.5, 0.02, 3.5),
      new THREE.Vector3(-4.5, 0.02, -3.5),

      // Internal dividing lines
      new THREE.Vector3(0.5, 0.02, -3.5),
      new THREE.Vector3(0.5, 0.02, 3.5),

      new THREE.Vector3(-4.5, 0.02, 0.0),
      new THREE.Vector3(0.5, 0.02, 0.0),

      new THREE.Vector3(0.5, 0.02, 1.2),
      new THREE.Vector3(4.5, 0.02, 1.2),
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  // Per-frame scrub animation based on scroll progress
  useFrame(() => {
    const p = THREE.MathUtils.clamp(scrollProgress, 0, 1);

    // 1. Chapter 1 (0 to 0.08): Blueprint sketch appearance
    if (blueprintLinesRef.current) {
      if (p < 0.08) {
        const opacity = THREE.MathUtils.lerp(0, 0.9, p / 0.08);
        blueprintLineMat.opacity = opacity;
        blueprintLinesRef.current.visible = true;
      } else if (p < 0.3) {
        blueprintLineMat.opacity = THREE.MathUtils.lerp(0.9, 0, (p - 0.08) / 0.15);
        blueprintLinesRef.current.visible = blueprintLineMat.opacity > 0.01;
      } else {
        blueprintLinesRef.current.visible = false;
      }
    }

    // 2. Chapter 2 (0.08 to 0.22): Walls rise & extrude from floor plate
    if (wallsLayerRef.current) {
      if (p < 0.08) {
        wallsLayerRef.current.scale.set(1, 0.001, 1);
        wallsLayerRef.current.position.y = 0;
      } else if (p >= 0.08 && p < 0.22) {
        const progress = (p - 0.08) / (0.22 - 0.08);
        const ease = THREE.MathUtils.smoothstep(progress, 0, 1);
        wallsLayerRef.current.scale.set(1, ease, 1);
        wallsLayerRef.current.position.y = 0;
      } else if (p >= 0.22 && p < 0.36) {
        // Chapter 3: Exploded view - walls stay at y=0 or rise slightly
        const explodeP = (p - 0.22) / (0.36 - 0.22);
        const easeExplode = Math.sin(explodeP * Math.PI);
        wallsLayerRef.current.scale.set(1, 1, 1);
        wallsLayerRef.current.position.y = easeExplode * 0.4;
      } else {
        wallsLayerRef.current.scale.set(1, 1, 1);
        wallsLayerRef.current.position.y = 0;
      }
    }

    // 3. Chapter 3 (0.22 to 0.36): Axonometric exploded layers
    if (ceilingLayerRef.current) {
      if (p < 0.22) {
        ceilingLayerRef.current.position.y = 2.4;
        ceilingLayerRef.current.visible = p > 0.15;
      } else if (p >= 0.22 && p < 0.36) {
        const explodeP = (p - 0.22) / (0.36 - 0.22);
        // Explode upward to 5.0 and reassemble
        const h = Math.sin(explodeP * Math.PI) * 2.8;
        ceilingLayerRef.current.position.y = 2.4 + h;
        ceilingLayerRef.current.visible = true;
      } else {
        // Kept transparent or hidden during interior walkthrough
        ceilingLayerRef.current.position.y = 2.4;
        ceilingLayerRef.current.visible = p > 0.88; // Becomes visible again for miniature plinth view!
      }
    }

    // Furniture explosion / assembly
    if (furnitureLayerRef.current) {
      if (p < 0.22) {
        // Hidden or at floor
        furnitureLayerRef.current.position.y = p < 0.1 ? -1 : 0;
        furnitureLayerRef.current.visible = p >= 0.1;
      } else if (p >= 0.22 && p < 0.36) {
        const explodeP = (p - 0.22) / (0.36 - 0.22);
        const h = Math.sin(explodeP * Math.PI) * 1.2;
        furnitureLayerRef.current.position.y = h;
        furnitureLayerRef.current.visible = true;
      } else if (p >= 0.36 && p < 0.48) {
        // Settle smoothly for mood selection
        furnitureLayerRef.current.position.y = 0;
        furnitureLayerRef.current.visible = true;
      } else if (p >= 0.48 && p < 0.62) {
        // Chapter 5: Furniture gently drops into place with stagger
        const dropP = THREE.MathUtils.smoothstep((p - 0.48) / (0.62 - 0.48), 0, 1);
        furnitureLayerRef.current.position.y = (1 - dropP) * 0.8;
        furnitureLayerRef.current.visible = true;
      } else {
        furnitureLayerRef.current.position.y = 0;
        furnitureLayerRef.current.visible = true;
      }
    }

    // 4. Chapter 7 (0.80 to 0.92): Evening lamps glow
    if (eveningLampsRef.current) {
      if (p >= 0.78 && p <= 0.96) {
        const eveningP = THREE.MathUtils.smoothstep((p - 0.78) / 0.1, 0, 1);
        eveningLampsRef.current.visible = true;
        eveningLampsRef.current.children.forEach((child) => {
          if ((child as THREE.PointLight).isPointLight) {
            (child as THREE.PointLight).intensity = eveningP * 2.5;
          }
        });
      } else {
        eveningLampsRef.current.visible = false;
      }
    }

    // 5. Chapter 8 (0.92 to 1.0): Plinth miniature model presentation
    if (rootGroupRef.current) {
      if (p >= 0.92) {
        const plinthP = THREE.MathUtils.smoothstep((p - 0.92) / 0.08, 0, 1);
        // Slight gentle rotation for exhibition feel
        rootGroupRef.current.rotation.y = plinthP * 0.15;
      } else {
        rootGroupRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, 0, 0]}>
      {/* 1. Architectural Plinth Base */}
      <mesh position={[0, -0.25, 0]} material={plinthMat} receiveShadow>
        <boxGeometry args={[10.5, 0.4, 8.5]} />
      </mesh>

      {/* Plinth Shadow Accent */}
      <mesh position={[0, -0.46, 0]}>
        <boxGeometry args={[11, 0.02, 9]} />
        <meshBasicMaterial color="#DDD3C4" />
      </mesh>

      {/* 2. Blueprint 2D Lines (Chapter 1) */}
      <group ref={blueprintLinesRef}>
        {/* @ts-ignore */}
        <lineSegments geometry={blueprintLinesGeo} material={blueprintLineMat} />
        {/* Secondary Grid Lines */}
        <gridHelper
          args={[8.5, 17, '#4F5B4A', '#8A9A83']}
          position={[0, 0.01, 0]}
        />
      </group>

      {/* 3. Floor Plate Layer */}
      <group ref={floorLayerRef} position={[0, 0.02, 0]}>
        {/* Living & Dining Parquet Floor */}
        <mesh position={[-1.8, 0, 0]} material={floorMat} receiveShadow>
          <boxGeometry args={[5.2, 0.04, 6.8]} />
        </mesh>
        {/* Bedroom Timber Floor */}
        <mesh position={[2.5, 0, -1.2]} material={floorMat} receiveShadow>
          <boxGeometry args={[3.8, 0.04, 4.2]} />
        </mesh>
        {/* Bath Travertine Stone Floor */}
        <mesh position={[2.5, 0, 2.2]} material={stoneMat} receiveShadow>
          <boxGeometry args={[3.8, 0.04, 2.4]} />
        </mesh>
      </group>

      {/* 4. Walls Layer (Extrudes in Chapter 2) */}
      <group ref={wallsLayerRef}>
        {/* North Exterior Wall */}
        <mesh position={[0, 1.2, -3.5]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[9.2, 2.4, 0.25]} />
        </mesh>
        {/* South Exterior Wall with Window Cutout */}
        <mesh position={[-2.8, 1.2, 3.5]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[3.6, 2.4, 0.25]} />
        </mesh>
        <mesh position={[3.0, 1.2, 3.5]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[3.2, 2.4, 0.25]} />
        </mesh>
        {/* South Glazing Frame */}
        <mesh position={[0.2, 1.2, 3.5]} material={glassMat}>
          <boxGeometry args={[2.4, 2.3, 0.05]} />
        </mesh>

        {/* West Exterior Wall */}
        <mesh position={[-4.5, 1.2, 0]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[0.25, 2.4, 7.2]} />
        </mesh>

        {/* East Exterior Wall */}
        <mesh position={[4.5, 1.2, 0]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[0.25, 2.4, 7.2]} />
        </mesh>

        {/* Internal Partition: Living/Bedroom */}
        <mesh position={[0.6, 1.2, -1.2]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[0.2, 2.4, 4.4]} />
        </mesh>

        {/* Internal Partition: Master Bedroom/Washroom */}
        <mesh position={[2.5, 1.2, 1.0]} material={wallMat} castShadow receiveShadow>
          <boxGeometry args={[3.8, 2.4, 0.2]} />
        </mesh>

        {/* Living Room Fluted Acoustic Accent Wall */}
        <mesh position={[-1.8, 1.2, -3.34]} material={accentMat} castShadow>
          <boxGeometry args={[3.2, 2.3, 0.08]} />
        </mesh>
      </group>

      {/* 5. Ceiling Plate Layer (Explodes in Chapter 3) */}
      <group ref={ceilingLayerRef} position={[0, 2.4, 0]}>
        <mesh material={wallMat} castShadow>
          <boxGeometry args={[9.2, 0.15, 7.2]} />
        </mesh>
        {/* Recessed Architectural Skylight / Cove */}
        <mesh position={[-1.8, -0.05, 0]} material={woodMat}>
          <boxGeometry args={[2.8, 0.05, 3.5]} />
        </mesh>
      </group>

      {/* 6. Furniture & Millwork Layer */}
      <group ref={furnitureLayerRef}>
        {/* --- LIVING SANCTUARY --- */}
        {/* Low-slung Minimalist Modular Sofa */}
        <group position={[-1.8, 0.35, 0.8]}>
          {/* Main Seat Cushion */}
          <mesh material={furnitureMat} castShadow receiveShadow>
            <boxGeometry args={[2.8, 0.38, 1.1]} />
          </mesh>
          {/* Backrest */}
          <mesh position={[0, 0.35, 0.42]} material={furnitureMat} castShadow>
            <boxGeometry args={[2.8, 0.45, 0.26]} />
          </mesh>
          {/* Right Chaise Arm */}
          <mesh position={[1.25, 0.2, -0.1]} material={furnitureMat} castShadow>
            <boxGeometry args={[0.3, 0.3, 0.9]} />
          </mesh>
          {/* Decorative Clay Blush Cushions */}
          <mesh position={[-0.8, 0.38, 0.28]} material={accentMat}>
            <boxGeometry args={[0.45, 0.45, 0.15]} />
          </mesh>
          <mesh position={[0.4, 0.38, 0.28]} material={accentMat}>
            <boxGeometry args={[0.45, 0.45, 0.15]} />
          </mesh>
        </group>

        {/* Wabi-Sabi Low Coffee Table */}
        <mesh position={[-1.8, 0.16, -0.4]} material={woodMat} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.24, 0.7]} />
        </mesh>

        {/* Tactile Wool Floor Rug */}
        <mesh position={[-1.8, 0.03, 0.2]} material={accentMat} receiveShadow>
          <boxGeometry args={[3.4, 0.02, 2.6]} />
        </mesh>

        {/* Architectural Low Media Credenza */}
        <mesh position={[-1.8, 0.25, -3.1]} material={woodMat} castShadow>
          <boxGeometry args={[3.2, 0.42, 0.45]} />
        </mesh>

        {/* --- DINING ZONE --- */}
        <group position={[-3.2, 0, -1.5]}>
          {/* Solid Wood Dining Table */}
          <mesh position={[0, 0.42, 0]} material={woodMat} castShadow receiveShadow>
            <boxGeometry args={[1.6, 0.08, 0.9]} />
          </mesh>
          {/* Table Legs */}
          <mesh position={[-0.65, 0.2, 0]} material={woodMat} castShadow>
            <boxGeometry args={[0.08, 0.4, 0.7]} />
          </mesh>
          <mesh position={[0.65, 0.2, 0]} material={woodMat} castShadow>
            <boxGeometry args={[0.08, 0.4, 0.7]} />
          </mesh>
          {/* Dining Chairs */}
          <mesh position={[-0.35, 0.25, -0.6]} material={furnitureMat} castShadow>
            <boxGeometry args={[0.38, 0.45, 0.35]} />
          </mesh>
          <mesh position={[0.35, 0.25, -0.6]} material={furnitureMat} castShadow>
            <boxGeometry args={[0.38, 0.45, 0.35]} />
          </mesh>
          <mesh position={[-0.35, 0.25, 0.6]} material={furnitureMat} castShadow>
            <boxGeometry args={[0.38, 0.45, 0.35]} />
          </mesh>
          <mesh position={[0.35, 0.25, 0.6]} material={furnitureMat} castShadow>
            <boxGeometry args={[0.38, 0.45, 0.35]} />
          </mesh>
        </group>

        {/* --- MASTER SUITE BEDROOM --- */}
        <group position={[2.6, 0, -1.4]}>
          {/* Bed Base Platform */}
          <mesh position={[0, 0.18, 0]} material={woodMat} castShadow receiveShadow>
            <boxGeometry args={[2.0, 0.26, 2.2]} />
          </mesh>
          {/* Mattress & Soft Bedding */}
          <mesh position={[0, 0.4, 0.1]} material={furnitureMat} castShadow>
            <boxGeometry args={[1.8, 0.26, 1.9]} />
          </mesh>
          {/* Upholstered Headboard */}
          <mesh position={[0, 0.75, -1.05]} material={accentMat} castShadow>
            <boxGeometry args={[2.2, 0.9, 0.15]} />
          </mesh>
          {/* Side Tables */}
          <mesh position={[-1.25, 0.22, -0.9]} material={woodMat} castShadow>
            <boxGeometry args={[0.4, 0.35, 0.4]} />
          </mesh>
          <mesh position={[1.25, 0.22, -0.9]} material={woodMat} castShadow>
            <boxGeometry args={[0.4, 0.35, 0.4]} />
          </mesh>
          {/* Bespoke Floor-to-Ceiling Wardrobe (Hotspot 1) */}
          <mesh position={[1.65, 1.2, 0.6]} material={accentMat} castShadow>
            <boxGeometry args={[0.45, 2.35, 1.8]} />
          </mesh>
        </group>

        {/* --- MASTER WASHROOM --- */}
        <group position={[2.6, 0, 2.2]}>
          {/* Monolithic Stone Vanity (Hotspot 3) */}
          <mesh position={[0.6, 0.5, 0]} material={stoneMat} castShadow receiveShadow>
            <boxGeometry args={[1.4, 0.45, 0.6]} />
          </mesh>
          {/* Washroom Mirror with Ambient Backlight */}
          <mesh position={[0.6, 1.35, -0.28]} material={glassMat}>
            <boxGeometry args={[1.3, 0.85, 0.04]} />
          </mesh>
          {/* Walk-in Shower Glass Screen */}
          <mesh position={[-0.8, 1.0, 0]} material={glassMat}>
            <boxGeometry args={[0.04, 2.0, 1.6]} />
          </mesh>
        </group>
      </group>

      {/* 7. Evening Ambient Warm Lighting & Glow (Chapter 7) */}
      <group ref={eveningLampsRef} visible={false}>
        {/* Living Room Floor Lamp Point Light */}
        <pointLight position={[-0.2, 1.2, 1.6]} color="#F3D9A8" intensity={0} distance={5} decay={2} />
        {/* Master Bedroom Bedside Lamp Point Light */}
        <pointLight position={[1.4, 1.0, -2.2]} color="#F3D9A8" intensity={0} distance={4} decay={2} />
        {/* Washroom Vanity Halo Glow */}
        <pointLight position={[3.2, 1.2, 2.2]} color="#F3D9A8" intensity={0} distance={3} decay={2} />

        {/* Visual Lamp Mesh in Living Room */}
        <mesh position={[-0.2, 0.8, 1.6]}>
          <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
          <meshBasicMaterial color="#2B2723" />
        </mesh>
        <mesh position={[-0.2, 1.4, 1.6]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshBasicMaterial color="#FFF1D6" />
        </mesh>
      </group>
    </group>
  );
}

