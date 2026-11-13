'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { useAppStore } from '@/lib/store';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { openConsultationModal } = useAppStore();
  const project = PROJECTS.find((p) => p.slug === params.slug);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  // Find next project index
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-28 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-button font-medium text-taupe hover:text-charcoal mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {/* Hero Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand/60 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal mb-4">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.status}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal font-medium leading-[1.08] mb-4">
            {project.title}
          </h1>
          <p className="font-sans text-base sm:text-lg text-taupe leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-oat-stone/60 mb-12 text-xs font-sans">
          <div>
            <span className="text-taupe uppercase tracking-eyebrow block mb-1">Spatial Area</span>
            <span className="font-medium text-charcoal text-sm">{project.area}</span>
          </div>
          <div>
            <span className="text-taupe uppercase tracking-eyebrow block mb-1">Location</span>
            <span className="font-medium text-charcoal text-sm">{project.location}</span>
          </div>
          <div>
            <span className="text-taupe uppercase tracking-eyebrow block mb-1">Year of Design</span>
            <span className="font-medium text-charcoal text-sm">{project.year}</span>
          </div>
          <div>
            <span className="text-taupe uppercase tracking-eyebrow block mb-1">Project Status</span>
            <span className="font-medium text-charcoal text-sm">{project.status}</span>
          </div>
        </div>

        {/* Main Hero Visual */}
        <div className="relative aspect-[16/9] w-full rounded-subtle overflow-hidden bg-oat-stone/20 mb-16 shadow-card">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Narrative: Overview, Challenge, Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
                01 Spatial Intent
              </span>
              <h2 className="font-serif text-3xl text-charcoal font-medium mb-3">
                Overview & Context
              </h2>
              <p className="font-sans text-base text-taupe leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-oat-stone/40">
              <div>
                <span className="text-xs uppercase tracking-eyebrow text-walnut font-semibold block mb-2">
                  02 The Spatial Challenge
                </span>
                <p className="font-sans text-sm text-taupe leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
                  03 The Architectural Solution
                </span>
                <p className="font-sans text-sm text-taupe leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Palette Swatches & Scope of Works */}
          <div className="lg:col-span-4 space-y-8 bg-sand/30 p-8 rounded-subtle border border-oat-stone/60">
            {/* Palette */}
            <div>
              <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-3">
                Material & Tone Palette
              </span>
              <div className="space-y-2.5">
                {project.palette.map((swatch, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full border border-black/10 shrink-0 shadow-sm"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-medium text-charcoal">
                        {swatch.name}
                      </span>
                      <span className="font-mono text-[10px] text-taupe">{swatch.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope */}
            <div className="pt-6 border-t border-oat-stone/50">
              <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-3">
                Scope of Responsibility
              </span>
              <div className="space-y-2">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-sans text-charcoal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-moss shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid with Lightbox Interaction */}
        <div className="mb-24">
          <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-6">
            Project Visual Gallery (Click to Inspect)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(imgUrl)}
                className="relative aspect-[4/3] w-full rounded-subtle overflow-hidden bg-oat-stone/20 group focus:outline-none focus:ring-2 focus:ring-moss"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} detail ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-ivory-linen/90 px-3 py-1.5 rounded-subtle text-xs font-sans uppercase tracking-button text-charcoal shadow-sm transition-opacity">
                    Inspect Full View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-ivory-linen/20 text-ivory hover:bg-ivory-linen/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={activeImage}
                alt="Enlarged project view"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Next Project Strip & Consultation CTA */}
        <div className="pt-16 border-t border-oat-stone/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-eyebrow text-taupe block">
              Next Spatial Project
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="font-serif text-2xl sm:text-3xl text-charcoal hover:text-moss transition-colors font-medium"
            >
              {nextProject.title} ({nextProject.area}) →
            </Link>
          </div>

          <button
            type="button"
            onClick={openConsultationModal}
            className="inline-flex items-center gap-2 bg-moss hover:bg-walnut text-ivory-linen px-6 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm cursor-pointer"
          >
            <span>Commission A Similar Sanctuary</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

