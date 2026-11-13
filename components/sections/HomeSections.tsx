'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { PROJECTS, SERVICES_DATA, WHY_CHOOSE_POINTS, STUDIO_INFO, JOURNAL_POSTS, INTERIOR_SPACES_GALLERY } from '@/lib/data';
import { LeadForm } from '@/components/ui/LeadForm';
import { Animated3DIcon, IconType3D } from '@/components/ui/Animated3DIcon';

const SERVICE_ICONS: Record<string, IconType3D> = {
  'residential': 'home',
  'commercial': 'cube',
  'hospitality': 'swatch',
  'renovation': 'layers',
  'residential-sanctuaries': 'home',
  'commercial-ateliers': 'cube',
  'hospitality-wellness': 'swatch',
  'turnkey-renovation': 'layers',
};

const WHY_CHOOSE_ICONS: IconType3D[] = [
  'compass',
  'swatch',
  'check',
  'ruler',
  'blueprint',
  'layers',
  'home',
  'cube',
];

export function HomeSections() {
  return (
    <div className="relative z-30 bg-ivory-linen border-t border-oat-stone/50 overflow-hidden">
      {/* Subtle Brand Watermark for Home Sections */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0" aria-hidden="true">
        <div className="sticky top-1/4 w-[340px] h-[480px] sm:w-[520px] sm:h-[730px] lg:w-[680px] lg:h-[960px] opacity-[0.045] select-none">
          <Image
            src="/logo-img-0.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* 1. Real Numbers Strip */}
      <section className="py-16 sm:py-20 border-b border-oat-stone/60 bg-sand/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {STUDIO_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l border-moss/20 pl-6">
                <span className="font-serif text-3xl sm:text-5xl text-charcoal font-medium tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-eyebrow text-taupe mt-2 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section className="py-24 sm:py-32 border-b border-oat-stone/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-2">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium">
                Homes sculpted with quiet intentionality.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-button font-medium text-moss hover:text-walnut underline underline-offset-4 transition-colors"
            >
              <span>Explore All Projects (Pan-India)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((proj) => (
              <Link
                key={proj.slug}
                href={`/work/${proj.slug}`}
                className="group flex flex-col bg-sand/20 rounded-subtle overflow-hidden border border-oat-stone/60 hover:shadow-card transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-oat-stone/30">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-ivory-linen/90 backdrop-blur-sm px-3 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal shadow-sm">
                    {proj.status} · {proj.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-charcoal/70 backdrop-blur-sm text-ivory-linen px-2.5 py-1 rounded text-[11px] font-sans">
                    {proj.area}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-taupe mb-2 font-sans">
                      <span>{proj.location}</span>
                      <span className="font-medium text-moss">{proj.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium group-hover:text-moss transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-taupe leading-relaxed line-clamp-2">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-oat-stone/40 flex items-center justify-between text-xs font-sans text-moss font-medium">
                    <span>View Architectural Project Narrative</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Design (4 Services) */}
      <section className="py-24 sm:py-32 bg-sand/40 border-b border-oat-stone/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-2">
              Spatial Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-4">
              Comprehensive turnkey architectural services.
            </h2>
            <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
              From initial structural modifications to bespoke millwork fabrication and white-glove handover, we assume 100% turnkey accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((srv) => {
              const iconType = SERVICE_ICONS[srv.id] || 'cube';
              return (
                <div
                  key={srv.id}
                  className="bg-ivory-linen rounded-subtle border border-oat-stone/70 shadow-sm flex flex-col justify-between group hover:border-moss/40 transition-colors overflow-hidden"
                >
                  {/* Service Photography Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-oat-stone/30">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-ivory-linen/95 backdrop-blur-sm px-3 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal shadow-sm">
                      {srv.tagline}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="font-serif text-2xl font-medium tracking-wide drop-shadow-sm">
                        {srv.title}
                      </span>
                      <div className="p-2 rounded-full bg-ivory-linen/20 backdrop-blur-md">
                        <Animated3DIcon type={iconType} size="sm" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                      <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
                        {srv.description}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {srv.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-sans text-charcoal/90">
                            <div className="animate-live-check">
                              <CheckCircle2 className="w-3.5 h-3.5 text-moss shrink-0" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-button font-medium text-moss hover:text-walnut transition-colors group/link pt-4 border-t border-oat-stone/50"
                    >
                      <span>Explore service specifications</span>
                      <div className="animate-live-arrow group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3B. Spaces We Sculpt: Curated Interior Architecture Gallery */}
      <section className="py-24 sm:py-32 border-b border-oat-stone/60 bg-sand/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
                Curated Interior Spaces
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-3">
                Spaces sculpted for stillness & light.
              </h2>
              <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
                From low-slung master suites to handleless culinary islands, each zone is tailored with sub-millimeter detailing, continuous natural light, and quiet materials.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-button font-medium text-moss hover:text-walnut underline underline-offset-4 transition-colors"
            >
              <span>Explore complete portfolio lookbook</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Photographic Interior Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERIOR_SPACES_GALLERY.map((space) => (
              <div
                key={space.id}
                className="group flex flex-col bg-ivory-linen rounded-subtle overflow-hidden border border-oat-stone/70 shadow-sm hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-oat-stone/30">
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
      </section>

      {/* 4. Why Choose House of Meda (8 Grid) */}
      <section className="py-24 sm:py-32 border-b border-oat-stone/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-2">
              The Meda Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-4">
              Why discerning homeowners choose us.
            </h2>
            <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
              We design for daily living, acoustic tranquility, and materials that grow more beautiful with time.
            </p>
          </div>

          {/* Panoramic Material Craftsmanship Visual Banner */}
          <div className="relative w-full h-72 sm:h-96 rounded-subtle overflow-hidden mb-16 shadow-card border border-oat-stone/60">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
              alt="House of Meda Material Craftsmanship"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/80 backdrop-blur-[1px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-10 text-ivory-linen max-w-2xl mx-auto">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-sand font-semibold mb-3">
                Architectural Restraint & Material Sincerity
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-relaxed mb-4 text-ivory-linen">
                &ldquo;Luxury does not announce itself. It lives in proportion, tactile honesty, and intentional quietude.&rdquo;
              </h3>
              <span className="text-xs uppercase tracking-button text-ivory-linen/80 font-medium">
                Abhishek Meda — Founder & Creative Director
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_POINTS.map((pt, idx) => {
              const iconType = WHY_CHOOSE_ICONS[idx % WHY_CHOOSE_ICONS.length];
              return (
                <div
                  key={pt.number}
                  className="p-6 bg-sand/15 rounded-subtle border border-oat-stone/50 hover:border-moss/50 transition-all duration-300 group hover:shadow-card hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-walnut font-light">
                      {pt.number}
                    </span>
                    <Animated3DIcon type={iconType} size="sm" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal font-medium mb-2 group-hover:text-moss transition-colors">
                    {pt.title}
                  </h3>
                  <p className="font-sans text-xs text-taupe leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Architectural Craftsmanship Detail Showcase (4-Photo Material Collage) */}
          <div className="mt-16 pt-12 border-t border-oat-stone/60">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[10px] uppercase tracking-eyebrow text-moss font-semibold block mb-1">
                Precision In Detail
              </span>
              <h3 className="font-serif text-2xl text-charcoal font-medium">
                The Anatomy of Quiet Craft
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="relative aspect-square rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/30">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                  alt="Precision Joinery & Millwork"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory-linen">
                  <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Craft 01</span>
                  <span className="font-serif text-base font-normal leading-tight block">German Homag Joinery</span>
                  <span className="text-[11px] font-sans text-ivory-linen/75">0.5mm edge-banding precision</span>
                </div>
              </div>

              <div className="relative aspect-square rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/30">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                  alt="Honed Travertine & Natural Stone"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory-linen">
                  <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Craft 02</span>
                  <span className="font-serif text-base font-normal leading-tight block">Honed Natural Stone</span>
                  <span className="text-[11px] font-sans text-ivory-linen/75">Travertine, Quartzite & Basalt</span>
                </div>
              </div>

              <div className="relative aspect-square rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/30">
                <Image
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80"
                  alt="2700K Architectural Lighting"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory-linen">
                  <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Craft 03</span>
                  <span className="font-serif text-base font-normal leading-tight block">2700K Ambient Lighting</span>
                  <span className="text-[11px] font-sans text-ivory-linen/75">CRI 95+ concealed cove lighting</span>
                </div>
              </div>

              <div className="relative aspect-square rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/30">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80"
                  alt="Seamless Lime Plaster Walls"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-ivory-linen">
                  <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Craft 04</span>
                  <span className="font-serif text-base font-normal leading-tight block">Seamless Lime Plaster</span>
                  <span className="text-[11px] font-sans text-ivory-linen/75">Breathable organic mineral wash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Studio Journal Section */}
      <section className="py-24 sm:py-32 bg-sand/20 border-b border-oat-stone/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-2">
                Studio Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium">
                Essays on architecture, materials & calm living.
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-button font-medium text-moss hover:text-walnut underline underline-offset-4 transition-colors"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group flex flex-col bg-ivory-linen rounded-subtle overflow-hidden border border-oat-stone/60 hover:shadow-card transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-oat-stone/30">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-ivory-linen/90 backdrop-blur-sm px-2.5 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-taupe mb-3 font-sans">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl text-charcoal font-medium group-hover:text-moss transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-sans text-xs text-taupe leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-oat-stone/40 text-xs font-sans text-moss font-medium flex items-center justify-between">
                    <span>Read Full Essay</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead Consultation Section */}
      <section id="consultation" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Studio Consultation Context */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold">
                Begin The Dialogue
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium leading-tight">
                Let&rsquo;s shape your private sanctuary.
              </h2>
              <p className="font-sans text-sm text-taupe leading-relaxed">
                We accept a limited number of residential and boutique commercial commissions each quarter to preserve our uncompromising standard of attention and craft.
              </p>

              {/* Visual Architectural Accent Card */}
              <div className="relative aspect-[16/9] w-full rounded-subtle overflow-hidden border border-oat-stone/60 shadow-sm mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="House of Meda Interior Space Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-ivory-linen text-xs font-serif font-light">
                  Bespoke Architectural Residence · Pan-India
                </div>
              </div>

              <div className="mt-2 p-6 bg-sand/40 rounded-subtle border border-oat-stone/60 space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-charcoal font-medium">Optimal Engagement Timing</strong>
                    <span className="text-taupe">Approach us 6 to 7 months prior to possession or handover for ideal civil coordination.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-charcoal font-medium">Direct Principal Involvement</strong>
                    <span className="text-taupe">Founder Abhishek Meda personally leads design alignment and site execution audits.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-xs font-sans text-taupe">
                <span>Prefer a quick direct conversation? </span>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-moss font-semibold underline underline-offset-4"
                >
                  Message us on WhatsApp ({STUDIO_INFO.phone})
                </a>
              </div>
            </div>

            {/* Right: Comprehensive Form */}
            <div className="lg:col-span-7 bg-ivory-linen p-8 sm:p-12 rounded-subtle border border-oat-stone/80 shadow-card">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

