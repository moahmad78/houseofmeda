'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAppStore } from '@/lib/store';

export function LeadForm() {
  const router = useRouter();
  const { currentMood, qualityTier } = useAppStore();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    spaceType: '3BHK',
    projectStage: 'Planning',
    moveInMonth: '',
    budget: '25 to 50 Lakh',
    about: '',
    source: 'Instagram',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMessage('Please fill in your name, phone number, and email.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please accept the privacy policy to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          selectedMood: currentMood,
          deviceTier: qualityTier,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit consultation request. Please try again.');
      }

      // Trigger celebratory aesthetic confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#4F5B4A', '#8B6B4E', '#D4C8B5', '#8A9A83'],
      });

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please reach out directly at hello@houseofmeda.com');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      {errorMessage && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-800 text-xs rounded-subtle border border-red-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Phone - 2 per line */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
        <div>
          <label htmlFor="fullName" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Abhishek Narayan"
            className="w-full px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Phone (+91) *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          />
        </div>
      </div>

      {/* Row 2: Space Type & Anticipated Budget - 2 per line */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
        <div>
          <label htmlFor="spaceType" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Type of Space *
          </label>
          <select
            id="spaceType"
            name="spaceType"
            value={formData.spaceType}
            onChange={handleChange}
            className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          >
            <option value="2BHK">2BHK Apartment</option>
            <option value="3BHK">3BHK Apartment</option>
            <option value="4BHK+">4BHK+ Luxury Apartment</option>
            <option value="Villa">Independent Villa / Estate</option>
            <option value="Commercial">Commercial Atelier / Studio</option>
            <option value="Hospitality">Hospitality / Wellness</option>
            <option value="Renovation">Complete Architectural Renovation</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Anticipated Budget *
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          >
            <option value="15 to 25 Lakh">₹15 to 25 Lakh</option>
            <option value="25 to 50 Lakh">₹25 to 50 Lakh (Standard)</option>
            <option value="50 Lakh to 1 Cr">₹50 Lakh to 1 Crore</option>
            <option value="1 Cr+">₹1 Crore +</option>
          </select>
        </div>
      </div>

      {/* Row 3: Project City & Email Address - 2 per line */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
        <div>
          <label htmlFor="city" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Project City *
          </label>
          <input
            id="city"
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="Bengaluru"
            className="w-full px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="abhishek@example.com"
            className="w-full px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          />
        </div>
      </div>

      {/* Row 4: Project Stage & Target Move-in - 2 per line */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
        <div>
          <label htmlFor="projectStage" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Project Stage
          </label>
          <select
            id="projectStage"
            name="projectStage"
            value={formData.projectStage}
            onChange={handleChange}
            className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          >
            <option value="Planning">Early Planning</option>
            <option value="Possession pending">Possession Pending</option>
            <option value="Possession done">Keys Received</option>
          </select>
        </div>

        <div>
          <label htmlFor="moveInMonth" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
            Target Move-in
          </label>
          <input
            id="moveInMonth"
            type="month"
            name="moveInMonth"
            value={formData.moveInMonth}
            onChange={handleChange}
            className="w-full px-3 py-2 sm:py-2.5 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
          />
        </div>
      </div>

      {/* Row 5: Details / Vision (Compact input) */}
      <div>
        <label htmlFor="about" className="block text-[10px] sm:text-xs uppercase tracking-eyebrow text-taupe font-semibold mb-1">
          Spatial Aspirations / Notes
        </label>
        <textarea
          id="about"
          name="about"
          rows={2}
          value={formData.about}
          onChange={handleChange}
          placeholder="Possession timeline, specific aesthetic preferences..."
          className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss resize-none"
        />
      </div>

      {/* Row 6: Consent */}
      <div className="flex items-start gap-2 pt-1">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-0.5 h-3.5 w-3.5 rounded border-oat-stone text-moss focus:ring-moss shrink-0"
        />
        <label htmlFor="consent" className="text-[10px] sm:text-xs text-taupe leading-snug">
          100% confidential. Discretion assured by House of Meda (Ascendria Ventures LLP).
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-moss hover:bg-walnut text-ivory-linen py-3 sm:py-3.5 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all duration-300 shadow-calm disabled:opacity-50 mt-1 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Scheduling Consultation...</span>
          </>
        ) : (
          <>
            <span>Request Consultation Callback</span>
            <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

