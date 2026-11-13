'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useAppStore, MoodType } from '@/lib/store';
import { MOOD_PALETTES } from '@/lib/scenes/config';
import { Animated3DIcon } from '@/components/ui/Animated3DIcon';

export function MoodPicker() {
  const pathname = usePathname();
  const { currentMood, setMood, scrollProgress } = useAppStore();
  const [isDismissed, setIsDismissed] = useState(false);

  // ONLY show on Home page ('/') during Chapter 4 (0.33 to 0.52)
  if (pathname !== '/') return null;

  const isChapter4 = scrollProgress >= 0.33 && scrollProgress <= 0.52;
  if (!isChapter4 || isDismissed) return null;

  const moods: { id: MoodType; name: string; subtitle: string; previewHex: string }[] = [
    {
      id: 'aikyam',
      name: MOOD_PALETTES.aikyam.name,
      subtitle: 'Pastels & Warm Neutrals',
      previewHex: '#DDBFAE',
    },
    {
      id: 'tattva',
      name: MOOD_PALETTES.tattva.name,
      subtitle: 'Muted Greens & Biophilic Wood',
      previewHex: '#8A9A83',
    },
    {
      id: 'meda-classic',
      name: MOOD_PALETTES['meda-classic'].name,
      subtitle: 'Ivory Plaster & Walnut',
      previewHex: '#4F5B4A',
    },
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-12 left-1/2 -translate-x-1/2 z-40 bg-ivory-linen/95 backdrop-blur-md p-4 sm:p-5 rounded-subtle border border-oat-stone/80 shadow-card max-w-xl w-[92%] sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Animated3DIcon type="swatch" size="sm" />
          <span className="text-[11px] uppercase tracking-eyebrow text-charcoal font-semibold">
            Select Sensory Mood Palette (Instant 3D Shift)
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="p-1 rounded-full text-charcoal/50 hover:text-charcoal hover:bg-sand transition-colors"
          aria-label="Dismiss Mood Palette"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {moods.map((m) => {
          const isActive = currentMood === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMood(m.id)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-subtle text-left transition-all duration-300 border ${
                isActive
                  ? 'bg-sand border-moss text-charcoal shadow-sm ring-1 ring-moss/30'
                  : 'bg-ivory-light border-oat-stone/50 hover:border-taupe text-charcoal/80'
              }`}
            >
              <span
                className="w-4 h-4 rounded-full border border-black/10 shrink-0 shadow-inner"
                style={{ backgroundColor: m.previewHex }}
              />
              <div className="flex flex-col">
                <span className="font-serif text-sm font-semibold leading-tight">{m.name}</span>
                <span className="text-[10px] text-taupe leading-tight">{m.subtitle}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
