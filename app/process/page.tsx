import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/data';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { Animated3DIcon, IconType3D } from '@/components/ui/Animated3DIcon';

export const metadata = {
  title: 'The 5-Step Process — House of Meda Architectural Interiors',
  description: 'Our disciplined 5-step methodology from initial lifestyle alignment to key handover. Predictable, transparent, and calm.',
};

const STEP_ICONS: IconType3D[] = ['dialogue', 'compass', 'swatch', 'layers', 'home'];

const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', // Dialogue & concept sketch
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // 3D visualization & light
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', // Detail blueprints & physical samples
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', // On-site craftsmanship & precision installation
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', // Finished styled home handover
];

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            The Meda Process
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-3 leading-tight">
            The Meda Process
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-charcoal/85 mb-4">
            A calm, considered journey from first conversation to final handover.
          </p>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            Building a luxury home should never be stressful. We follow a strict sequential cadence that protects your time, guarantees cost transparency, and ensures absolute spatial precision.
          </p>
        </div>

        {/* Timeline Summary Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 bg-sand/40 p-8 rounded-subtle border border-oat-stone/60">
          <div className="flex items-start gap-4">
            <Animated3DIcon type="ruler" size="md" />
            <div>
              <span className="text-[10px] uppercase tracking-eyebrow text-taupe font-semibold block">
                Approach Timeline
              </span>
              <strong className="font-serif text-xl text-charcoal font-medium block">
                6 to 7 Months Prior
              </strong>
              <p className="font-sans text-xs text-taupe mt-1">
                Reach out before builder plastering to optimize civil partitions and electrical layouts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Animated3DIcon type="compass" size="md" />
            <div>
              <span className="text-[10px] uppercase tracking-eyebrow text-taupe font-semibold block">
                Total Duration
              </span>
              <strong className="font-serif text-xl text-charcoal font-medium block">
                4 to 6 Months Total
              </strong>
              <p className="font-sans text-xs text-taupe mt-1">
                Design & 3D detailing: 2-3 months. On-site turnkey execution: 3-4 months.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Animated3DIcon type="check" size="md" />
            <div>
              <span className="text-[10px] uppercase tracking-eyebrow text-taupe font-semibold block">
                Milestone Lock
              </span>
              <strong className="font-serif text-xl text-charcoal font-medium block">
                Locked BOQ & Schedule
              </strong>
              <p className="font-sans text-xs text-taupe mt-1">
                Zero price escalation or surprise invoices once construction blueprints are approved.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Sequential Steps */}
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-ivory-linen p-6 sm:p-10 rounded-subtle border border-oat-stone/70 shadow-sm overflow-hidden"
            >
              {/* Step Number, Meta & Photography Preview */}
              <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-oat-stone/60 pb-6 lg:pb-0 lg:pr-8 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-5xl sm:text-6xl text-walnut/70 font-light">
                      {step.step}
                    </span>
                    <Animated3DIcon type={STEP_ICONS[idx]} size="md" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sand/60 rounded-subtle text-[11px] font-sans font-medium text-moss mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration: {step.duration}</span>
                  </span>
                </div>

                {/* Step Photograph */}
                <div className="relative aspect-[16/10] w-full rounded-subtle overflow-hidden bg-oat-stone/30 border border-oat-stone/50 shadow-sm">
                  <Image
                    src={STEP_IMAGES[idx]}
                    alt={`${step.title} - House of Meda Execution Process`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 bg-ivory-linen/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] uppercase tracking-eyebrow font-medium text-charcoal">
                    Stage 0{idx + 1} Visual Craft
                  </div>
                </div>

                <span className="text-[11px] uppercase tracking-eyebrow text-taupe font-semibold hidden lg:block">
                  Stage 0{idx + 1} of 05 Sequential Methodology
                </span>
              </div>

              {/* Step Content */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-1">
                    {step.tagline}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl text-charcoal font-medium mb-3">
                    {step.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="bg-sand/30 p-5 sm:p-6 rounded-subtle border border-oat-stone/50">
                  <span className="text-[11px] uppercase tracking-eyebrow text-charcoal font-semibold block mb-3">
                    Tangible Deliverables at This Stage
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-charcoal/90">
                        <CheckCircle2 className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Handover & Quality Benchmark Photo Strip */}
        <div className="mt-20 pt-16 border-t border-oat-stone/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-1">
              Quality Benchmarks
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              What Built Perfection Looks Like
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Axonometric Spatial Symmetry"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory-linen">
                <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Benchmark 01</span>
                <span className="font-serif text-lg font-normal block leading-tight">Axonometric Symmetry</span>
                <span className="text-xs text-ivory-linen/75">Continuous visual sightlines through courtyards</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                alt="Handleless Modular Joinery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory-linen">
                <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Benchmark 02</span>
                <span className="font-serif text-lg font-normal block leading-tight">Integrated Concealed Geometry</span>
                <span className="text-xs text-ivory-linen/75">Shadow gaps, pocket doors & flush plinths</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-subtle overflow-hidden border border-oat-stone/60 group shadow-sm bg-oat-stone/20">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                alt="Turnkey Handover Readiness"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory-linen">
                <span className="text-[10px] uppercase tracking-eyebrow text-sand block font-semibold mb-0.5">Benchmark 03</span>
                <span className="font-serif text-lg font-normal block leading-tight">Turnkey Handover Standard</span>
                <span className="text-xs text-ivory-linen/75">Deep-cleaned, illuminated & styled to perfection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 bg-sand/30 rounded-subtle border border-oat-stone/60 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h3 className="font-serif text-3xl text-charcoal font-medium">
            Ready to initiate Step 01 for your residence?
          </h3>
          <p className="font-sans text-sm text-taupe">
            Reserve a 45-minute discovery consultation with our studio directors at Kudlu Gate or via video link.
          </p>
          <ConsultationButton className="px-8 py-4">
            Book A Consultation
          </ConsultationButton>
        </div>
      </div>
    </div>
  );
}

