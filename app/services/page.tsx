import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { Animated3DIcon, IconType3D } from '@/components/ui/Animated3DIcon';

export const metadata = {
  title: 'Spatial Services — House of Meda Architectural Interiors',
  description: 'Comprehensive turnkey architectural interior disciplines: Residential Sanctuaries, Commercial Ateliers, Hospitality & Wellness, and Full Structural Renovations.',
};

const SERVICE_GALLERIES: Record<string, { title: string; image: string }[]> = {
  'residential': [
    { title: 'Volumetric Living Room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80' },
    { title: 'Acoustic Master Suite', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80' },
    { title: 'Culinary Island Atelier', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80' },
  ],
  'commercial': [
    { title: 'Acoustic Meeting Pods', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
    { title: 'Director Atelier', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80' },
    { title: 'Contemplation Library', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80' },
  ],
  'hospitality': [
    { title: 'Mindful Tea Pavilion', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
    { title: 'Courtyard Dining Space', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80' },
    { title: 'Monolithic Travertine Spa', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80' },
  ],
  'renovation': [
    { title: 'Biophilic Lightwell Core', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { title: 'German Millwork Overhaul', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
    { title: 'Seamless Lime Plastering', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80' },
  ],
};

export default function ServicesPage() {
  const deliverables: { title: string; desc: string; iconType: IconType3D }[] = [
    {
      title: 'Architectural Concept & 3D Visualisation',
      desc: 'Two complete design options per space, photorealistic clay renders, mood boards, and lighting simulations.',
      iconType: 'cube',
    },
    {
      title: 'Structural Space Planning & MEP Coordination',
      desc: 'Sub-millimeter construction drawings, electrical conduits, plumbing alignments, and HVAC integration.',
      iconType: 'compass',
    },
    {
      title: 'Custom Millwork & German Carcass Joinery',
      desc: 'Modular cabinetry fabricated on German Homag lines with lifetime-warranty Blum & Hettich fittings.',
      iconType: 'layers',
    },
    {
      title: 'Dedicated Site Execution & Quality Supervision',
      desc: 'On-site Project Engineers auditing 120+ inspection checkpoints with bi-weekly photographic reports.',
      iconType: 'ruler',
    },
  ];

  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            Spatial Disciplines
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
            Complete Turnkey Interior Architecture.
          </h1>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            We operate as an integrated practice of architects, structural interior designers, and execution engineers. You never manage individual carpenters, painters, or subcontractors.
          </p>
        </div>

        {/* What's Included in Every Engagement */}
        <div className="mb-24 bg-sand/30 p-6 sm:p-12 rounded-subtle border border-oat-stone/60">
          <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-2">
            The Standard Package
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal font-medium mb-6">
            What is included in every House of Meda engagement.
          </h2>

          {/* Visual Material Library Accent */}
          <div className="relative w-full h-44 sm:h-64 rounded-subtle overflow-hidden mb-8 border border-oat-stone/60 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
              alt="House of Meda Material Library"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/35 to-transparent" />
            <div className="absolute bottom-4 left-4 max-w-sm text-ivory-linen">
              <span className="text-[10px] uppercase tracking-eyebrow text-sand font-semibold block mb-0.5">
                Bespoke Fabrication & Specification
              </span>
              <h3 className="font-serif text-base sm:text-xl font-normal leading-tight text-ivory-linen">
                Physical material box, German Homag joinery & sub-millimeter tolerances.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3 group">
                <Animated3DIcon type={item.iconType} size="md" />
                <h3 className="font-serif text-lg text-charcoal font-medium group-hover:text-moss transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-taupe leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Services Sections */}
        <div className="space-y-24">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side with Sub-Detail Photo Strip */}
              <div className={`lg:col-span-6 flex flex-col gap-3 ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <div className="relative aspect-[4/3] rounded-subtle overflow-hidden bg-oat-stone/20 shadow-card">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-ivory-linen/95 px-3 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal">
                    Discipline 0{idx + 1}
                  </div>
                </div>

                {/* 3-Photo Sub-Detail Strip */}
                <div className="grid grid-cols-3 gap-3">
                  {SERVICE_GALLERIES[srv.id]?.map((thumb, tIdx) => (
                    <div key={tIdx} className="relative aspect-[4/3] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
                      <Image
                        src={thumb.image}
                        alt={thumb.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-sans text-ivory-linen truncate opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        {thumb.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 flex flex-col gap-5 ${
                idx % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold">
                  {srv.tagline}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium leading-tight">
                  {srv.title}
                </h2>
                <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-3 pt-3 border-t border-oat-stone/40">
                  <span className="text-[11px] uppercase tracking-eyebrow text-taupe font-semibold block">
                    Core Inclusions
                  </span>
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-sans text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-moss shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <ConsultationButton>
                    Inquire About {srv.title}
                  </ConsultationButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

