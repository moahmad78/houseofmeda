'use client';

import React from 'react';
import {
  Palette,
  Buildings,
  Stack,
  Compass,
  House,
  ChatsCircle,
  Sun,
  Moon,
  Ruler,
  Cube,
  Check,
  Sparkle,
  ShieldCheck,
  Handshake,
} from '@phosphor-icons/react';

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
  | 'check'
  | 'sparkle'
  | 'shield'
  | 'handshake';

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
}: Animated3DIconProps) {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 15,
    md: 18,
    lg: 24,
  };

  const renderIcon = () => {
    const s = iconSizes[size];
    switch (type) {
      case 'swatch':
        return <Palette size={s} weight="light" />;
      case 'blueprint':
        return <Buildings size={s} weight="light" />;
      case 'layers':
        return <Stack size={s} weight="light" />;
      case 'compass':
        return <Compass size={s} weight="light" />;
      case 'home':
        return <House size={s} weight="light" />;
      case 'dialogue':
        return <ChatsCircle size={s} weight="light" />;
      case 'sun':
        return <Sun size={s} weight="light" />;
      case 'moon':
        return <Moon size={s} weight="light" />;
      case 'ruler':
        return <Ruler size={s} weight="light" />;
      case 'cube':
        return <Cube size={s} weight="light" />;
      case 'check':
        return <Check size={s} weight="bold" />;
      case 'sparkle':
        return <Sparkle size={s} weight="light" />;
      case 'shield':
        return <ShieldCheck size={s} weight="light" />;
      case 'handshake':
        return <Handshake size={s} weight="light" />;
      default:
        return <Buildings size={s} weight="light" />;
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-subtle bg-sand/50 border border-oat-stone/80 transition-all duration-300 hover:border-moss/40 hover:bg-sand/80 hover:scale-105 shadow-sm ${sizeClasses[size]} ${color} ${className}`}
      aria-hidden="true"
    >
      <div className="relative z-10 flex items-center justify-center">
        {renderIcon()}
      </div>
    </div>
  );
}
