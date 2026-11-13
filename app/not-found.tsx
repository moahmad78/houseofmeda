import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 sm:pb-32 bg-ivory-linen min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-sand/60 flex items-center justify-center text-moss border border-oat-stone/60">
          <Compass className="w-6 h-6 animate-spin-slow" />
        </div>

        <span className="text-xs uppercase tracking-eyebrow text-taupe font-semibold block mb-2">
          404 · Uncharted Geometry
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
          This space doesn&rsquo;t exist yet.
        </h1>

        <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed mb-8">
          The coordinate you requested has not been drafted in our architectural plans. Return to our sanctuary or explore our selected commissions.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-moss hover:bg-walnut text-ivory-linen px-6 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Sanctuary</span>
          </Link>
          <Link
            href="/work"
            className="text-xs font-sans uppercase tracking-button text-charcoal hover:text-moss underline underline-offset-4 font-medium"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

