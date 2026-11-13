'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import {
  Compass,
  HouseLine,
  Hammer,
  ShieldCheck,
  Sparkle,
} from '@phosphor-icons/react';
import { useAppStore } from '@/lib/store';

export function MobileHero() {
  const { openConsultationModal } = useAppStore();

  const trustHighlights = [
    {
      icon: <HouseLine size={18} weight="light" className="text-sand" />,
      title: 'Bespoke Residences',
      desc: 'Villas, private homes & apartments',
    },
    {
      icon: <Hammer size={18} weight="light" className="text-sand" />,
      title: 'Turnkey Execution',
      desc: 'Concept to site handover',
    },
    {
      icon: <Compass size={18} weight="light" className="text-sand" />,
      title: 'Pan-India Reach',
      desc: 'Bengaluru studio & national commissions',
    },
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-5 sm:px-8 bg-[#181512] text-ivory-linen overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
          alt="House of Meda Interior Architecture"
          fill
          priority
          className="object-cover object-center scale-105 opacity-40 brightness-90 contrast-105"
        />
        {/* Soft Multi-Stop Gradient Overlays for Peak Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181512]/80 via-[#181512]/60 to-[#181512]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#181512]/90 pointer-events-none" />
      </div>

      {/* Top Header Pill */}
      <div className="relative z-10 pt-2">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sand/15 backdrop-blur-md border border-white/15 text-sand text-[11px] font-sans uppercase tracking-eyebrow font-medium">
          <Sparkle size={13} weight="fill" className="text-warmglow animate-pulse" />
          <span>Interior Architecture Studio · Bengaluru</span>
        </div>
      </div>

      {/* Central Hero Narrative */}
      <div className="relative z-10 my-auto py-8">
        <span className="block text-xs uppercase tracking-widest text-sand/80 font-serif mb-3">
          House of Meda — Est. 2025
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl leading-[1.18] font-normal text-ivory-linen mb-4 tracking-tight">
          A refined balance between{' '}
          <span className="italic font-light text-sand">form and feeling.</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-ivory-linen/80 leading-relaxed font-light mb-8 max-w-lg">
          The art of shaping bespoke interiors that are intentional, timeless, and deeply connected to the people who inhabit them. We believe a home should not just look beautiful, but feel effortless to live in.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="button"
            onClick={openConsultationModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#3D4C3A] hover:bg-[#2C382A] text-ivory-linen px-7 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm active:scale-98 cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-sand" />
          </button>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-subtle border border-white/25 hover:border-sand text-ivory-linen text-xs font-sans uppercase tracking-button font-medium transition-all backdrop-blur-sm active:scale-98"
          >
            <span>Explore Commissions</span>
            <ArrowUpRight className="w-4 h-4 text-sand/70" />
          </Link>
        </div>
      </div>

      {/* Bottom Features Strip & Scroll Prompt */}
      <div className="relative z-10 pt-4 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
          {trustHighlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2.5 rounded-subtle bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-sand/15 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-sans font-medium text-ivory-linen truncate">
                  {item.title}
                </p>
                <p className="text-[10px] font-sans text-sand/70 truncate">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle scroll down cue */}
        <div className="flex items-center justify-between text-sand/60 text-[10px] font-sans uppercase tracking-widest pt-1">
          <span>Scroll to explore portfolio</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-sand/80" />
        </div>
      </div>
    </section>
  );
}
