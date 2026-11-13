'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Animated3DIcon } from '@/components/ui/Animated3DIcon';

export function HotspotModal() {
  const pathname = usePathname();
  const { activeHotspot, setActiveHotspot, scrollProgress } = useAppStore();

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveHotspot(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveHotspot]);

  // Auto-close if user scrolls away from Chapter 6
  useEffect(() => {
    if (activeHotspot && (scrollProgress < 0.55 || scrollProgress > 0.86)) {
      setActiveHotspot(null);
    }
  }, [scrollProgress, activeHotspot, setActiveHotspot]);

  if (pathname !== '/' || !activeHotspot) return null;

  return (
    <aside
      aria-label="Touchpoint Material Details"
      className="fixed bottom-20 left-4 right-4 sm:left-auto sm:bottom-auto sm:top-24 sm:right-8 z-50 sm:w-80 max-w-sm bg-ivory-linen/95 backdrop-blur-md rounded-subtle border border-oat-stone shadow-card p-4 sm:p-5 animate-in slide-in-from-bottom-4 sm:slide-in-from-right-4 fade-in duration-250 pointer-events-auto"
    >
      {/* Top Header: Category & Close */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-oat-stone/50">
        <div className="flex items-center gap-1.5">
          <Animated3DIcon type="layers" size="sm" />
          <span className="text-[10px] uppercase tracking-eyebrow text-moss font-semibold">
            {activeHotspot.category}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setActiveHotspot(null)}
          className="p-1 rounded-full hover:bg-sand text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none focus:ring-1 focus:ring-moss"
          aria-label="Close details"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Touchpoint Image Preview (Compact) */}
      {activeHotspot.image && (
        <div className="relative h-28 w-full rounded-subtle overflow-hidden mb-3 bg-sand border border-oat-stone/60">
          <Image
            src={activeHotspot.image}
            alt={activeHotspot.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium mb-2.5 leading-snug">
        {activeHotspot.title}
      </h3>

      {/* Material Details Highlight Box */}
      <div className="bg-sand/60 px-3 py-2 rounded-subtle border border-oat-stone/60 mb-3">
        <span className="text-[9px] uppercase tracking-eyebrow text-taupe font-semibold block mb-0.5">
          Material & Finish Specification
        </span>
        <p className="font-serif text-xs sm:text-sm text-charcoal font-medium">
          {activeHotspot.materials}
        </p>
      </div>

      {/* Craftsmanship Details (Concise 2 points) */}
      <div className="space-y-1.5 mb-3">
        {activeHotspot.details.slice(0, 2).map((item, index) => (
          <div key={index} className="flex items-start gap-1.5 text-[11px] font-sans text-charcoal/90">
            <CheckCircle2 className="w-3 h-3 text-moss shrink-0 mt-0.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Quick Dismiss / Touchpoint indicator */}
      <div className="pt-2 border-t border-oat-stone/40 flex items-center justify-between text-[10px] text-taupe font-sans">
        <span>Hover or click another ring to switch</span>
        <button
          type="button"
          onClick={() => setActiveHotspot(null)}
          className="text-moss hover:underline font-medium"
        >
          Dismiss
        </button>
      </div>
    </aside>
  );
}
