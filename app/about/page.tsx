import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO, TEAM_MEMBERS, PHILOSOPHY_PILLARS } from '@/lib/data';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { Animated3DIcon, IconType3D } from '@/components/ui/Animated3DIcon';

export const metadata = {
  title: 'About House of Meda — Bespoke Architectural Interiors Bengaluru',
  description: 'House of Meda is a bespoke interior design studio based in Bengaluru. A refined balance between form and feeling.',
};

const PILLAR_ICONS: IconType3D[] = [
  'compass',
  'layers',
  'dialogue',
  'ruler',
  'blueprint',
  'cube',
  'check',
  'home',
  'swatch',
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            About House of Meda
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
            A refined balance between form and feeling.
          </h1>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            The art of shaping interiors that are intentional, timeless, and deeply connected to the people who inhabit them. We believe a home should not just look beautiful, but feel effortless to live in.
          </p>
        </div>

        {/* Real Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-oat-stone/60 mb-24 bg-sand/20 px-6 rounded-subtle">
          {STUDIO_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-5xl text-charcoal font-medium">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-eyebrow text-taupe mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Studio Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-subtle overflow-hidden bg-oat-stone/20 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="House of Meda Studio Atmosphere"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold">
              Our Story & Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium leading-tight">
              About House Of Meda
            </h2>
            <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
              House of Meda is a bespoke interior design studio based in Bengaluru. Meda — A refined balance between form and feeling — The art of shaping interiors that are intentional, timeless, and deeply connected to the people who inhabit them. We believe a home should not just look beautiful, but feel effortless to live in. Our work is rooted in restraint, clarity, and thoughtful detailing — creating interiors that age gracefully and stay.
            </p>
            <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
              Every Project we take on is shaped around the people who live in it. We don’t follow templates or fixed styles. Instead, we listen, observe, and design spaces that reflect your lifestyle, your rhythm, and your way of experiencing home.
            </p>
            <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
              At House of Meda, We see design as a quiet, deliberate process. From the first conversation to the final handover, every step is guided by clarity,precision & care. We work with a carefully curated palette of materials, finishes and details to ensure each space feels balanced and crafted.
            </p>
          </div>
        </div>

        {/* Full-width Architectural Atmosphere Showcase Banner */}
        <div className="relative w-full h-80 sm:h-[400px] rounded-subtle overflow-hidden mb-28 shadow-card border border-oat-stone/60">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
            alt="House of Meda Architectural Atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/80" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-12 text-ivory-linen max-w-3xl mx-auto">
            <span className="text-[11px] uppercase tracking-eyebrow text-sand font-semibold mb-3">
              The Meda Ethos
            </span>
            <blockquote className="font-serif text-2xl sm:text-4xl font-light leading-relaxed mb-4 text-ivory-linen">
              &ldquo;We don’t follow templates or fixed styles. Instead, we listen, observe, and design spaces that reflect your lifestyle, your rhythm, and your way of experiencing home.&rdquo;
            </blockquote>
            <span className="text-xs uppercase tracking-button text-ivory-linen/75">
              House of Meda Studio · Bengaluru
            </span>
          </div>
        </div>

        {/* 9 Philosophy Pillars */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium">
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="p-6 bg-sand/15 rounded-subtle border border-oat-stone/50 hover:border-moss/40 transition-all duration-300 group hover:shadow-card hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-xl text-walnut/70 font-light">
                    0{idx + 1}
                  </span>
                  <Animated3DIcon type={PILLAR_ICONS[idx % PILLAR_ICONS.length]} size="sm" />
                </div>
                <h3 className="font-serif text-xl text-charcoal font-medium mb-2 group-hover:text-moss transition-colors">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-taupe leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Leadership Section - Full Width matching Navbar container */}
        <div className="mb-28 w-full">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
              Studio Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium">
              Meet the Director.
            </h2>
          </div>

          <div className="w-full">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="w-full bg-sand/25 rounded-subtle overflow-hidden border border-oat-stone/70 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center shadow-card"
              >
                <div className="lg:col-span-5 xl:col-span-4 relative aspect-[4/5] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none rounded-subtle overflow-hidden bg-oat-stone/30 shadow-md border border-oat-stone/50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-subtle bg-sand/60 text-moss text-[11px] uppercase tracking-eyebrow font-semibold mb-3 w-fit border border-oat-stone/50">
                    <span>{member.credentials}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium mb-2 leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs sm:text-sm font-sans uppercase tracking-wider text-walnut font-medium block mb-5">
                    {member.role} • House of Meda
                  </span>

                  <blockquote className="font-serif italic text-base sm:text-lg text-charcoal/80 mb-6 pl-4 border-l-2 border-moss/40 leading-relaxed">
                    &ldquo;Calmness is not the absence of design; it is the absolute precision of it. Every line, shadow, and texture must exist for a quiet reason.&rdquo;
                  </blockquote>

                  <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-oat-stone/50 mb-6">
                    <div>
                      <strong className="block text-xs uppercase tracking-eyebrow text-charcoal font-semibold mb-1">
                        Principal Oversight
                      </strong>
                      <span className="text-xs text-taupe font-sans leading-relaxed">
                        Personally directs space planning & key aesthetic milestones.
                      </span>
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-eyebrow text-charcoal font-semibold mb-1">
                        Turnkey Rigor
                      </strong>
                      <span className="text-xs text-taupe font-sans leading-relaxed">
                        Single point of accountability across factory joinery & site execution.
                      </span>
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-eyebrow text-charcoal font-semibold mb-1">
                        Location
                      </strong>
                      <span className="text-xs text-taupe font-sans leading-relaxed">
                        Bengaluru Studio • Kudlu Gate / Hosur Road
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <ConsultationButton
                      variant="primary"
                      className="text-xs font-sans uppercase tracking-button px-6 py-3"
                    >
                      <span>Connect with Director</span>
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </ConsultationButton>
                    <a
                      href="https://wa.me/918553303558"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans uppercase tracking-button px-6 py-3 rounded-subtle border border-oat-stone/80 text-charcoal hover:bg-sand transition-colors"
                    >
                      Direct WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Material Palette of Quiet Luxury (6-Photo Visual Showcase) */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
                Honest Materiality
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-3">
                Materials that age with dignity.
              </h2>
              <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
                We believe surfaces should invite touch. We specify untreated linens, honed unpolished stones, natural lime plasters, and solid timbers that develop rich patinas across decades.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="relative aspect-[3/4] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                alt="Honed Travertine"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-ivory-linen">
                <span className="text-[9px] uppercase tracking-eyebrow text-sand block font-semibold">Stone</span>
                <span className="font-serif text-sm font-normal">Honed Travertine</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                alt="French Smoked Oak"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-ivory-linen">
                <span className="text-[9px] uppercase tracking-eyebrow text-sand block font-semibold">Timber</span>
                <span className="font-serif text-sm font-normal">French Smoked Oak</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80"
                alt="Lime Plaster Envelopes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-ivory-linen">
                <span className="text-[9px] uppercase tracking-eyebrow text-sand block font-semibold">Surfaces</span>
                <span className="font-serif text-sm font-normal">Lime Plaster</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                alt="Brushed Architectural Brass"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-ivory-linen">
                <span className="text-[9px] uppercase tracking-eyebrow text-sand block font-semibold">Hardware</span>
                <span className="font-serif text-sm font-normal">Brushed Brass</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                alt="Belgian Raw Linen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-ivory-linen">
                <span className="text-[9px] uppercase tracking-eyebrow text-sand block font-semibold">Textile</span>
                <span className="font-serif text-sm font-normal">Belgian Raw Linen</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                alt="Fluted Architectural Glass"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-ivory-linen">
                <span className="text-[9px] uppercase tracking-eyebrow text-sand block font-semibold">Glazing</span>
                <span className="font-serif text-sm font-normal">Fluted Glass</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Atelier & On-Site Alignment (Dual Visual Collage) */}
        <div className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[16/10] rounded-subtle overflow-hidden shadow-card border border-oat-stone/60 group bg-oat-stone/20">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
              alt="Design Atelier & Blueprints"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-ivory-linen">
              <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-1">In The Atelier</span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium leading-tight mb-1 text-ivory-linen">
                Rigorous Space Planning & 3D Detailing
              </h3>
              <p className="text-xs font-sans text-ivory-linen/80 line-clamp-2">
                Every conduit, joinery seam, and light elevation is pre-calculated before physical fabrication begins.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-subtle overflow-hidden shadow-card border border-oat-stone/60 group bg-oat-stone/20">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Master Craftsmen On-Site"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-ivory-linen">
              <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-1">On-Site Precision</span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium leading-tight mb-1 text-ivory-linen">
                Master Artisans & Sub-Millimeter Tolerances
              </h3>
              <p className="text-xs font-sans text-ivory-linen/80 line-clamp-2">
                Direct site stewardship ensures that what is approved on 3D blueprints translates faithfully into built reality.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-sand/30 p-10 rounded-subtle border border-oat-stone/60 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h3 className="font-serif text-3xl text-charcoal font-medium">
            Begin with a personal dialogue.
          </h3>
          <p className="font-sans text-sm text-taupe">
            Experience our physical materiality library at 46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Bengaluru.
          </p>
          <ConsultationButton className="px-8 py-4">
            Book A Studio Consultation
          </ConsultationButton>
        </div>
      </div>
    </div>
  );
}

