'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp, MessageSquare, ArrowUpRight, Search } from 'lucide-react';
import { FAQS, STUDIO_INFO } from '@/lib/data';
import { useAppStore } from '@/lib/store';

export default function FAQPage() {
  const { openConsultationModal } = useAppStore();
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id, FAQS[1].id]);

  const categories = ['All', 'Process & Timeline', 'Cost & Scope', 'Design Philosophy', 'Execution'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeTab === 'All' || faq.category === activeTab;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            FAQ&apos;S
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            Everything you need to know about our turnkey architectural interior process, budgets, material tolerances, and execution warranties.
          </p>
        </div>

        {/* Architectural Atmosphere Photographic Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-subtle overflow-hidden mb-12 shadow-card border border-oat-stone/60">
          <Image
            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
            alt="House of Meda Architectural Interior Atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-md text-ivory-linen">
            <span className="text-[10px] uppercase tracking-eyebrow text-sand font-semibold block mb-1">
              End-To-End Turnkey Delivery
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight text-ivory-linen">
              Transparent accountability from initial design to final handover.
            </h3>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-oat-stone/60">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-1.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all ${
                    isActive
                      ? 'bg-moss text-ivory-linen shadow-sm'
                      : 'bg-sand/40 hover:bg-sand text-charcoal/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-taupe absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions or terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-sand/30 border border-oat-stone/60 rounded-subtle text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-moss"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-20">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-taupe bg-sand/20 rounded-subtle">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search or reach out via WhatsApp below.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-sand/15 rounded-subtle border border-oat-stone/60 overflow-hidden transition-colors hover:border-moss/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-moss"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {faq.number && (
                          <span className="text-[11px] font-mono font-semibold text-walnut bg-sand/80 px-2 py-0.5 rounded-subtle border border-oat-stone/60">
                            {faq.number}
                          </span>
                        )}
                        <span className="text-[10px] uppercase tracking-eyebrow text-moss font-semibold">
                          {faq.category}
                        </span>
                      </div>
                      <span className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1 rounded-full bg-sand/60 text-charcoal shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-oat-stone/30 font-sans text-sm text-taupe leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help & Consultation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-sand/30 rounded-subtle border border-oat-stone/60 items-center">
          <div>
            <h3 className="font-serif text-2xl text-charcoal font-medium mb-1">
              Have a specific question not covered here?
            </h3>
            <p className="font-sans text-xs text-taupe">
              Our directors respond directly to all client inquiries within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center sm:justify-end gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-subtle text-xs font-sans uppercase tracking-button font-medium shadow-sm hover:brightness-105 transition-all"
            >
              <div className="animate-live-dialogue">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <span>Ask on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={openConsultationModal}
              className="inline-flex items-center gap-2 bg-moss hover:bg-walnut text-ivory-linen px-5 py-3 rounded-subtle text-xs font-sans uppercase tracking-button font-medium shadow-sm transition-all cursor-pointer group"
            >
              <span>Book Consultation</span>
              <div className="animate-live-arrow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

