import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User } from 'lucide-react';
import { JOURNAL_POSTS } from '@/lib/data';

export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = JOURNAL_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = JOURNAL_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory-linen min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-button font-medium text-taupe hover:text-charcoal mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Studio Journal</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-xs text-taupe mb-4 font-sans">
            <span className="uppercase tracking-eyebrow text-moss font-semibold">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal font-medium leading-[1.12] mb-6">
            {post.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-taupe leading-relaxed italic border-l-2 border-moss pl-4">
            {post.excerpt}
          </p>
        </div>

        {/* Feature Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-subtle overflow-hidden bg-oat-stone/20 mb-12 shadow-card">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Essay Content */}
        <div className="space-y-6 text-charcoal/90 font-sans text-base sm:text-lg leading-[1.8] pb-16 border-b border-oat-stone/60">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Note */}
        <div className="py-8 border-b border-oat-stone/60 flex items-center justify-between text-xs font-sans text-taupe">
          <div>
            <strong className="block text-charcoal font-medium">House of Meda Editorial Desk</strong>
            <span>Studio Meda · Kudlu Gate, Bengaluru</span>
          </div>
          <Link
            href="/contact"
            className="text-moss font-semibold hover:underline"
          >
            Discuss with our design team →
          </Link>
        </div>

        {/* Related Reads */}
        <div className="pt-16">
          <h3 className="font-serif text-2xl text-charcoal font-medium mb-8">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="group flex flex-col gap-3 p-6 bg-sand/20 rounded-subtle border border-oat-stone/50 hover:border-moss/40 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-eyebrow text-taupe">
                  {rel.category} · {rel.readTime}
                </span>
                <h4 className="font-serif text-xl text-charcoal font-medium group-hover:text-moss transition-colors leading-snug">
                  {rel.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-moss font-medium mt-2">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

