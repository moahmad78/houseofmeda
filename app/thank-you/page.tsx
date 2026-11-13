import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight, Calendar, Mail, Phone } from 'lucide-react';
import { STUDIO_INFO } from '@/lib/data';

export const metadata = {
  title: 'Consultation Confirmed — House of Meda',
  description: 'Thank you for requesting a consultation with House of Meda.',
};

export default function ThankYouPage() {
  return (
    <div className="pt-36 pb-24 sm:pb-32 bg-ivory-linen min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-moss/10 flex items-center justify-center text-moss border border-moss/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-2">
          Consultation Request Registered
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
          Thank you for trusting House of Meda.
        </h1>

        <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed mb-8">
          Our founder and creative director, Abhishek Meda, has received your project details. We will review your space parameters and reach out within <strong>24 to 48 hours</strong> to schedule your initial design alignment dialogue.
        </p>

        <div className="p-6 bg-sand/30 rounded-subtle border border-oat-stone/60 text-left mb-10 space-y-3 text-xs font-sans text-charcoal">
          <strong className="block text-sm font-serif font-medium mb-2">What happens next:</strong>
          <div className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss mt-1.5 shrink-0" />
            <span>1. Review of your floor plan or architectural drawings by our principal team.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss mt-1.5 shrink-0" />
            <span>2. Direct introductory call to understand daily routines, timeline, and material affinities.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss mt-1.5 shrink-0" />
            <span>3. Studio visit invitation to our Kudlu Gate Material Library or interactive video session.</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-moss hover:bg-walnut text-ivory-linen px-7 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm"
          >
            <span>Return to Home Journey</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-charcoal/20 hover:border-charcoal text-charcoal px-6 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-colors"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

