'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { STUDIO_INFO } from '@/lib/data';
import { useAppStore } from '@/lib/store';

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.026-.653 2.56-1.002 3.985-.282 1.192.597 2.162 1.769 2.162 2.124 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.264-.4.159-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.627 0 11.983-5.367 11.983-11.987C24 5.367 18.644 0 12.017 0z" />
    </svg>
  );
}

export function Footer() {
  const { openConsultationModal } = useAppStore();
  return (
    <footer className="relative bg-moss text-ivory-linen pt-20 pb-28 sm:pb-16 overflow-hidden z-20">
      {/* Decorative subtle architectural grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Section: Brand Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-ivory-linen/15">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-10 sm:w-8 sm:h-11 shrink-0">
                <Image
                  src="/logo-emblem-light.png"
                  alt="House of Meda Monogram"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="h-6 w-[1px] bg-ivory-linen/30 mx-0.5" />
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-ivory-linen font-medium uppercase">
                HOUSE OF MEDA
              </span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-ivory-linen/90 font-light max-w-xl leading-relaxed">
              &ldquo;{STUDIO_INFO.tagline}&rdquo;
            </p>
            <p className="font-sans text-sm text-ivory-linen/70 max-w-md leading-relaxed">
              Bengaluru-based architectural interior studio crafting quiet sanctuaries for homeowners and developers. Pan-India bespoke commissions.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-ivory-linen/5 p-8 rounded-subtle border border-ivory-linen/10">
            <div>
              <span className="text-[11px] uppercase tracking-eyebrow text-ivory-linen/60 block mb-2">
                Have a project in mind?
              </span>
              <h3 className="font-serif text-2xl text-ivory-linen font-medium">
                Start your spatial journey with our director.
              </h3>
            </div>
            <button
              type="button"
              onClick={openConsultationModal}
              className="inline-flex items-center justify-between bg-ivory-linen hover:bg-sand text-moss px-6 py-4 rounded-subtle font-sans text-xs uppercase tracking-button font-semibold transition-all duration-300 group cursor-pointer"
            >
              <span>Book A Consultation</span>
              <div className="animate-live-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Middle Navigation & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-ivory-linen/15 text-sm font-sans">
          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-eyebrow text-ivory-linen/60 font-semibold mb-2">
              Studio Navigation
            </span>
            <Link href="/work" className="text-ivory-linen/80 hover:text-ivory-linen transition-colors">
              Selected Work (Portfolio)
            </Link>
            <Link href="/services" className="text-ivory-linen/80 hover:text-ivory-linen transition-colors">
              Spatial Services
            </Link>
            <Link href="/process" className="text-ivory-linen/80 hover:text-ivory-linen transition-colors">
              The 5-Step Process
            </Link>
            <Link href="/about" className="text-ivory-linen/80 hover:text-ivory-linen transition-colors">
              Studio & Founders
            </Link>
            <Link href="/journal" className="text-ivory-linen/80 hover:text-ivory-linen transition-colors">
              Journal & Insights
            </Link>
            <Link href="/faq" className="text-ivory-linen/80 hover:text-ivory-linen transition-colors">
              Frequently Asked Questions
            </Link>
          </div>

          {/* Contact Direct */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-eyebrow text-ivory-linen/60 font-semibold mb-2">
              Direct Inquiries
            </span>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="flex items-center gap-2 text-ivory-linen/80 hover:text-ivory-linen transition-colors"
            >
              <Mail className="w-4 h-4 text-ivory-linen/50" />
              <span>{STUDIO_INFO.email}</span>
            </a>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="flex items-center gap-2 text-ivory-linen/80 hover:text-ivory-linen transition-colors"
            >
              <Phone className="w-4 h-4 text-ivory-linen/50" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ivory-linen/80 hover:text-ivory-linen transition-colors"
            >
              <span>WhatsApp: {STUDIO_INFO.phone}</span>
            </a>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-eyebrow text-ivory-linen/60 font-semibold mb-2">
              Studio Address
            </span>
            <div className="flex items-start gap-2 text-ivory-linen/75 leading-relaxed">
              <MapPin className="w-4 h-4 text-ivory-linen/50 shrink-0 mt-1" />
              <span>
                <strong>House of Meda:</strong> 46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068
              </span>
            </div>
          </div>

          {/* Social Presence with Brand Icons */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-eyebrow text-ivory-linen/60 font-semibold mb-2">
              Follow Our Craft
            </span>
            <a
              href={STUDIO_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-linen/80 hover:text-ivory-linen transition-colors flex items-center justify-between group py-1"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-ivory-linen/60 group-hover:text-ivory-linen transition-colors shrink-0" />
                <span>Instagram</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a
              href={STUDIO_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-linen/80 hover:text-ivory-linen transition-colors flex items-center justify-between group py-1"
            >
              <div className="flex items-center gap-2.5">
                <Facebook className="w-4 h-4 text-ivory-linen/60 group-hover:text-ivory-linen transition-colors shrink-0" />
                <span>Facebook</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a
              href={STUDIO_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-linen/80 hover:text-ivory-linen transition-colors flex items-center justify-between group py-1"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-ivory-linen/60 group-hover:text-ivory-linen transition-colors shrink-0" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a
              href={STUDIO_INFO.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-linen/80 hover:text-ivory-linen transition-colors flex items-center justify-between group py-1"
            >
              <div className="flex items-center gap-2.5">
                <PinterestIcon className="w-4 h-4 text-ivory-linen/60 group-hover:text-ivory-linen transition-colors shrink-0" />
                <span>Pinterest</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Bottom Legal Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory-linen/60">
          <p>© {new Date().getFullYear()} House of Meda. {STUDIO_INFO.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ivory-linen transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ivory-linen transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/cookies" className="hover:text-ivory-linen transition-colors">
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

