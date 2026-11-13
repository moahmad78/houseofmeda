'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { CHAPTERS } from '@/lib/scenes/config';
import { Animated3DIcon } from '@/components/ui/Animated3DIcon';

export function ScrollJourneyOverlay() {
  const { scrollProgress, currentChapter, openConsultationModal } = useAppStore();

  const isDusk = scrollProgress >= 0.78 && scrollProgress <= 0.94;

  return (
    <div
      id="scroll-journey-container"
      className="relative w-full h-[800vh] pointer-events-none"
    >
      {/* Sticky Fullscreen Text Overlay Window */}
      <div className="sticky top-0 h-screen w-full flex items-center px-6 sm:px-12 lg:px-20 pointer-events-none overflow-hidden z-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-none">
          {/* Chapter Text Column (Always placed with strong legibility on left/right side) */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 pointer-events-none ${
              isDusk ? 'text-ivory-linen' : 'text-charcoal'
            }`}
          >
            {CHAPTERS.map((chap, idx) => {
              const isActive = currentChapter === idx;
              if (!isActive) return null;

              return (
                <div
                  key={chap.id}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-600 max-w-xl bg-ivory-linen/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-5 sm:p-0 rounded-2xl sm:rounded-none border border-oat-stone/60 sm:border-0 shadow-card sm:shadow-none pointer-events-auto sm:pointer-events-none"
                >
                  {/* Step / Badge Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-subtle bg-sand/70 backdrop-blur-sm border border-oat-stone/60 mb-5">
                    {idx === 0 && <Animated3DIcon type="compass" size="sm" />}
                    {idx === 1 && <Animated3DIcon type="blueprint" size="sm" />}
                    {idx === 2 && <Animated3DIcon type="layers" size="sm" />}
                    {idx === 3 && <Animated3DIcon type="swatch" size="sm" />}
                    {idx === 4 && <Animated3DIcon type="home" size="sm" />}
                    {idx === 5 && <Animated3DIcon type="check" size="sm" />}
                    {idx === 6 && <Animated3DIcon type="moon" size="sm" color="text-warmglow" />}
                    {idx === 7 && <Animated3DIcon type="sun" size="sm" />}

                    <span className="text-[10px] uppercase tracking-eyebrow font-semibold text-charcoal">
                      {chap.badge}
                    </span>
                  </div>

                  {/* Chapter Eyebrow / Step Number */}
                  {chap.stepNumber && (
                    <span className="block text-xs uppercase tracking-eyebrow text-taupe font-medium mb-1">
                      {chap.stepNumber} · {chap.subtitle}
                    </span>
                  )}

                  {/* Main Heading */}
                  {idx === 0 ? (
                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight mb-5">
                      Calm, minimalist interiors for thoughtful living.
                    </h1>
                  ) : (
                    <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight mb-4">
                      {chap.title}
                    </h2>
                  )}

                  {/* Description Paragraph */}
                  <p
                    className={`font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-lg ${
                      isDusk ? 'text-ivory-linen/80' : 'text-taupe'
                    }`}
                  >
                    {chap.description}
                  </p>

                  {/* Contextual CTAs & Chapter Specific Callouts */}
                  {idx === 0 && (
                    <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
                      <button
                        type="button"
                        onClick={openConsultationModal}
                        className="inline-flex items-center gap-2 bg-moss hover:bg-walnut text-ivory-linen px-6 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm group cursor-pointer"
                      >
                        <span>Book A Consultation</span>
                        <div className="animate-live-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </button>
                      <span className="text-xs font-sans text-taupe">
                        Scroll down to build your home ↓
                      </span>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="p-3.5 bg-ivory-linen/80 backdrop-blur-sm rounded-subtle border border-oat-stone/80 text-xs text-charcoal max-w-md">
                      <strong className="block font-medium mb-1">Axonometric Strata Breakdown:</strong>
                      <span>Structure, Micro-Plaster Envelopes, Smoked Oak Joinery, Concealed MEP Conduits, and Curated Soft Furnishings.</span>
                    </div>
                  )}

                  {idx === 4 && (
                    <div className="flex items-center gap-3 text-xs text-taupe">
                      <span className="w-2 h-2 rounded-full bg-moss" />
                      <span>Turnkey craftsmanship: zero contractor coordination required on your end.</span>
                    </div>
                  )}

                  {idx === 7 && (
                    <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
                      <button
                        type="button"
                        onClick={openConsultationModal}
                        className="inline-flex items-center gap-2 bg-moss hover:bg-walnut text-ivory-linen px-7 py-4 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm group cursor-pointer"
                      >
                        <span>Reserve Your Spatial Consultation</span>
                        <div className="animate-live-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </button>
                      <Link
                        href="/work"
                        className="text-xs uppercase tracking-button font-medium text-charcoal hover:text-moss underline underline-offset-4"
                      >
                        View Completed Portfolio →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Spacer Column (3D Scene lives clearly here) */}
          <div className="lg:col-span-6 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

