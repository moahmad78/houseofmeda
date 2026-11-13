'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { STUDIO_INFO } from '@/lib/data';

export function Header() {
  const pathname = usePathname();
  const { isMobileMenuOpen, setMobileMenuOpen, openConsultationModal } = useAppStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle ESC key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // @ts-ignore
      if (window.lenis) window.lenis.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      // @ts-ignore
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      // @ts-ignore
      if (window.lenis) window.lenis.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F5EFE8]/95 backdrop-blur-md border-b border-oat-stone/60 ${
          isScrolled ? 'py-3 shadow-sm' : 'py-3.5 sm:py-4 shadow-subtle'
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Studio Identity (Official Original Lockup) */}
        <Link
          href="/"
          className="relative flex items-center group focus:outline-none focus:ring-1 focus:ring-moss shrink-0 transition-transform duration-300 hover:opacity-90"
          aria-label="House of Meda Home"
        >
          <div className="relative h-9 sm:h-10 lg:h-11 w-36 sm:w-44 lg:w-48">
            <Image
              src="/brand-nav-logo.png"
              alt="House of Meda"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] sm:text-sm font-sans tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-charcoal font-medium'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-charcoal/90 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          {/* Book Consultation Button */}
          <button
            type="button"
            onClick={openConsultationModal}
            className="flex items-center gap-2 bg-[#3D4C3A] hover:bg-[#2C382A] text-ivory-linen px-5 sm:px-6 py-2.5 rounded-subtle text-[11px] sm:text-xs font-sans uppercase tracking-button font-medium transition-all duration-300 shadow-calm group cursor-pointer"
          >
            <span>BOOK A CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-charcoal focus:outline-none focus:ring-1 focus:ring-moss"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>

    {/* Side Slide-Over Mobile Drawer - Portal outside <header> so backdrop-filter never traps it */}
    {isMounted && isMobileMenuOpen && createPortal(
      <div className="fixed inset-0 z-[100] sm:hidden">
        {/* Dimmed Backdrop Overlay with click to close */}
        <div
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Right Side Drawer Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed top-0 right-0 bottom-0 h-full w-[85vw] max-w-xs bg-ivory-linen shadow-2xl border-l border-oat-stone flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 z-[101]"
        >
          {/* Drawer Header with Logo & Close button */}
          <div className="p-6 border-b border-oat-stone/60 flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="relative flex items-center"
            >
              <div className="relative h-8 w-36">
                <Image
                  src="/brand-nav-logo.png"
                  alt="House of Meda"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-sand text-charcoal transition-colors focus:outline-none focus:ring-1 focus:ring-moss"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            <span className="text-[10px] uppercase tracking-eyebrow text-taupe font-semibold">
              Explore Studio
            </span>
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-lg font-serif transition-colors ${
                      isActive
                        ? 'bg-moss/10 text-moss font-medium'
                        : 'text-charcoal hover:bg-sand/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-moss' : 'text-taupe/40'}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions & Studio Coordinates */}
          <div className="p-6 pt-4 pb-12 border-t border-oat-stone/60 flex flex-col gap-3 bg-sand/20">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultationModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-moss hover:bg-walnut text-ivory-linen py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              <span>Book A Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                  'Hello House of Meda, I would like to inquire about interior design services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 border border-oat-stone/80 bg-ivory-linen text-charcoal py-2.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium active:scale-95 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-moss" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 border border-oat-stone/80 bg-ivory-linen text-charcoal py-2.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-moss" />
                <span>Call</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-taupe flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-moss shrink-0 mt-0.5" />
              <span className="leading-tight">Kudlu Gate, Hosur Rd, Bengaluru 560068</span>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
  </>
);
}

