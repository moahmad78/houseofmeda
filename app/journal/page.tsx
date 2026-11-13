import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import { JOURNAL_POSTS } from '@/lib/data';

export const metadata = {
  title: 'Studio Journal — House of Meda Architectural Interiors',
  description: 'Essays, material science studies, and architectural notes on creating calm, enduring homes.',
};

export default function JournalPage() {
  const featured = JOURNAL_POSTS[0];
  const others = JOURNAL_POSTS.slice(1);

  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            Studio Journal & Essays
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
            Perspectives on Space, Light & Enduring Materials.
          </h1>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            Written by our founders and architects. Deep dives into spatial psychology, why surface decoration fails, and how to build homes that age with grace.
          </p>
        </div>

        {/* Featured Main Essay */}
        <div className="mb-20">
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 bg-sand/30 rounded-subtle overflow-hidden border border-oat-stone/60 hover:shadow-card transition-all duration-300 p-6 sm:p-10"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-subtle overflow-hidden bg-oat-stone/20">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-ivory-linen/95 px-3 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal">
                Featured Editorial
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-3 text-xs text-taupe mb-3 font-sans">
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium group-hover:text-moss transition-colors mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-oat-stone/40 flex items-center justify-between text-xs font-sans text-moss font-medium">
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Essays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {others.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group flex flex-col bg-sand/20 rounded-subtle overflow-hidden border border-oat-stone/60 hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-oat-stone/20">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-ivory-linen/90 px-2.5 py-1 rounded-subtle text-[10px] uppercase tracking-eyebrow font-medium text-charcoal">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-taupe mb-3 font-sans">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal font-medium group-hover:text-moss transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-oat-stone/40 flex items-center justify-between text-xs font-sans text-moss font-medium">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

