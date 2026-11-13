'use client';

import React from 'react';
import {
  IconColorSwatch,
  IconBuildingArch,
  IconLayersSubtract,
  IconCompass,
  IconHome,
  IconSunHigh,
  IconMoonStars,
  IconRulerMeasure,
  IconMessages,
  IconCube3dSphere,
  IconCheck,
} from '@tabler/icons-react';

export type IconType3D =
  | 'swatch'
  | 'blueprint'
  | 'layers'
  | 'compass'
  | 'home'
  | 'dialogue'
  | 'sun'
  | 'moon'
  | 'ruler'
  | 'cube'
  | 'check';

interface Animated3DIconProps {
  type: IconType3D;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: string;
  animate?: boolean;
}

export function Animated3DIcon({
  type,
  size = 'md',
  className = '',
  color = 'text-moss',
  animate = true,
}: Animated3DIconProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-base',
    lg: 'w-12 h-12 text-xl',
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 24,
  };

  const renderIcon = () => {
    const s = iconSizes[size];
    switch (type) {
      case 'swatch':
        return (
          <div className={animate ? 'animate-live-swatch' : ''}>
            <IconColorSwatch size={s} stroke={1.6} />
          </div>
        );
      case 'blueprint':
        return (
          <div className={animate ? 'animate-live-blueprint' : ''}>
            <IconBuildingArch size={s} stroke={1.6} />
          </div>
        );
      case 'layers':
        return (
          <div className={animate ? 'animate-live-layers' : ''}>
            <IconLayersSubtract size={s} stroke={1.6} />
          </div>
        );
      case 'compass':
        return (
          <div className={animate ? 'animate-live-compass' : ''}>
            <IconCompass size={s} stroke={1.6} />
          </div>
        );
      case 'home':
        return (
          <div className={animate ? 'animate-live-home' : ''}>
            <IconHome size={s} stroke={1.6} />
          </div>
        );
      case 'dialogue':
        return (
          <div className={animate ? 'animate-live-dialogue' : ''}>
            <IconMessages size={s} stroke={1.6} />
          </div>
        );
      case 'sun':
        return (
          <div className={animate ? 'animate-live-sun' : ''}>
            <IconSunHigh size={s} stroke={1.6} />
          </div>
        );
      case 'moon':
        return (
          <div className={animate ? 'animate-live-moon' : ''}>
            <IconMoonStars size={s} stroke={1.6} />
          </div>
        );
      case 'ruler':
        return (
          <div className={animate ? 'animate-live-ruler' : ''}>
            <IconRulerMeasure size={s} stroke={1.6} />
          </div>
        );
      case 'cube':
        return (
          <div className={animate ? 'animate-live-cube' : ''}>
            <IconCube3dSphere size={s} stroke={1.6} />
          </div>
        );
      case 'check':
        return (
          <div className={animate ? 'animate-live-check' : ''}>
            <IconCheck size={s} stroke={2} />
          </div>
        );
      default:
        return <IconBuildingArch size={s} stroke={1.6} />;
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 pointer-events-none select-none ${sizeClasses[size]} ${className}`}
      style={{ perspective: '600px' }}
    >
      {/* 3D Depth Card with Continuous Running Floating Animation */}
      <div
        className={`relative w-full h-full rounded-subtle flex items-center justify-center bg-sand/65 border border-oat-stone/80 shadow-sm transition-transform duration-300 ${color} ${
          animate ? 'animate-live-3d hover:scale-115 hover:-translate-y-1' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle 3D Top Edge Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/50 pointer-events-none rounded-t-subtle" />

        {/* Ambient Alive Glow behind icon */}
        {animate && (
          <div className="absolute inset-1 rounded-full bg-moss/10 blur-sm pointer-events-none" />
        )}

        {/* Icon Glyph with 3D Depth & Alive Micro-Animation */}
        <div
          className="relative z-10 transition-transform duration-300"
          style={{ transform: 'translateZ(7px)' }}
        >
          {renderIcon()}
        </div>
      </div>
    </div>
  );
}

