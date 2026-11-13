'use client';

import React from 'react';
import Image from 'next/image';

interface BrandWatermarkProps {
  className?: string;
  opacity?: string;
}

export function BrandWatermark({
  className = '',
  opacity = 'opacity-[0.05]',
}: BrandWatermarkProps) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative w-[340px] h-[480px] sm:w-[520px] sm:h-[730px] lg:w-[680px] lg:h-[960px] ${opacity} select-none transition-opacity`}
      >
        <Image
          src="/logo-img-0.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 340px, (max-width: 1200px) 520px, 680px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

