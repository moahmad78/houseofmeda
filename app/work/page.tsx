'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, INTERIOR_SPACES_GALLERY } from '@/lib/data';

type CategoryFilter = 'All' | 'Residential' | 'Commercial' | 'Hospitality' | 'Renovation';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const categories: CategoryFilter[] = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation'];

  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            Selected Commissions
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
            Architectural Sanctuaries Built with Restraint.
          </h1>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            Every commission is an inquiry into spatial harmony, proportion, and bespoke millwork. We do not replicate designs; each home is an original portrait of its dwellers.
          </p>
        </div>

        {/* Portfolio Hero Atmosphere Banner */}
        <div className="relative w-full h-60 sm:h-80 rounded-subtle overflow-hidden mb-12 shadow-card border border-oat-stone/60">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
            alt="House of Meda Selected Portfolio Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-lg text-ivory-linen">
            <span className="text-[10px] uppercase tracking-eyebrow text-sand font-semibold block mb-1">
              Featured Residence · Sarjapur, Bengaluru
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-ivory-linen">
              The Aikyam — 6,000 sq.ft private estate.
            </h3>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-4 border-b border-oat-stone/60">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all ${
                  isActive
                    ? 'bg-moss text-ivory-linen shadow-sm'
                    : 'bg-sand/40 hover:bg-sand text-charcoal/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with subtle hover tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.slug}
              href={`/work/${proj.slug}`}
              className="group flex flex-col bg-sand/15 rounded-subtle overflow-hidden border border-oat-stone/60 hover:shadow-card transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-oat-stone/20">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-ivory-linen/95 backdrop-blur-sm px-3 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal shadow-sm">
                  {proj.status} · {proj.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-taupe mb-2 font-sans">
                    <span>{proj.location}</span>
                    <span>{proj.area}</span>
                  </div>
                  <h2 className="font-serif text-3xl text-charcoal font-medium group-hover:text-moss transition-colors mb-2">
                    {proj.title}
                  </h2>
                  <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
                    {proj.tagline}
                  </p>

                  {/* Palette Swatches */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[10px] uppercase tracking-eyebrow text-taupe mr-1">
                      Palette:
                    </span>
                    {proj.palette.map((swatch, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: swatch.hex }}
                        title={swatch.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-oat-stone/40 flex items-center justify-between text-xs font-sans text-moss font-medium">
                  <span>Explore Architectural Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Visual Interior Lookbook & Tactile Details Archive */}
        <div className="mt-28 pt-20 border-t border-oat-stone/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
                Spatial Lookbook
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-3">
                Architectural Moments & Living Sanctuaries.
              </h2>
              <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
                An intimate glance into tailored living spaces, acoustic envelopes, culinary geometry, and tactile material transitions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERIOR_SPACES_GALLERY.map((space) => (
              <div
                key={space.id}
                className="group flex flex-col bg-sand/15 rounded-subtle overflow-hidden border border-oat-stone/60 shadow-sm hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-oat-stone/20">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 bg-ivory-linen/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] uppercase tracking-eyebrow font-medium text-charcoal shadow-sm">
                    {space.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-lg text-charcoal font-medium mb-1.5 group-hover:text-moss transition-colors">
                      {space.title}
                    </h3>
                    <p className="font-sans text-xs text-taupe leading-relaxed mb-3 line-clamp-2">
                      {space.description}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-oat-stone/50 text-[11px] font-sans text-charcoal/70 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />
                    <span className="truncate">{space.materials}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

