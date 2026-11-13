'use client';

import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { STUDIO_INFO } from '@/lib/data';

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
        'Hello House of Meda, I would like to inquire about architectural interior design for my space.'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 bg-[#25D366] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-floating hover:brightness-105 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 active:scale-95"
    >
      <WhatsappLogo className="w-5 h-5 text-white" weight="fill" />
      <span className="text-xs font-sans font-semibold tracking-wide hidden sm:inline">
        WhatsApp Us
      </span>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
    </a>
  );
}
