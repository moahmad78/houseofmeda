'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Layers, Sparkles, Calendar } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export function MobileBottomNav() {
  const pathname = usePathname();
  const { openConsultationModal } = useAppStore();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
    },
    {
      label: 'Work',
      href: '/work',
      icon: Layers,
    },
    {
      label: 'Services',
      href: '/services',
      icon: Compass,
    },
    {
      label: 'Story',
      href: '/about',
      icon: Sparkles,
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory-linen/95 backdrop-blur-xl border-t border-oat-stone/80 shadow-[0_-6px_24px_rgba(0,0,0,0.07)] px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-transform duration-300 pointer-events-auto"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'text-moss font-semibold'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.25]' : 'stroke-[1.75]'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-moss rounded-full" />
                )}
              </div>
              <span className="text-[10px] tracking-wide mt-1 font-sans">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Highlighted Action Tab: Book Consultation */}
        <button
          type="button"
          onClick={openConsultationModal}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-moss hover:text-walnut transition-all duration-200 active:scale-90 group focus:outline-none"
          aria-label="Book Design Consultation"
        >
          <div className="relative p-1.5 rounded-full bg-moss text-ivory-linen shadow-sm group-hover:bg-walnut transition-colors">
            <Calendar className="w-4 h-4 stroke-[2]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sand"></span>
            </span>
          </div>
          <span className="text-[10px] tracking-wide mt-0.5 font-sans font-medium text-moss">
            Consult
          </span>
        </button>
      </div>
    </nav>
  );
}

