'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';

interface ConsultationButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'light';
}

export function ConsultationButton({
  children = 'Book A Consultation',
  className = '',
  variant = 'primary',
}: ConsultationButtonProps) {
  const { openConsultationModal } = useAppStore();

  const variantStyles = {
    primary:
      'bg-moss hover:bg-walnut text-ivory-linen shadow-calm',
    secondary:
      'border border-charcoal/30 hover:border-charcoal text-charcoal bg-transparent',
    light:
      'bg-ivory-linen hover:bg-sand text-moss shadow-sm',
  };

  return (
    <button
      type="button"
      onClick={openConsultationModal}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all duration-300 group cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      <div className="animate-live-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </button>
  );
}

