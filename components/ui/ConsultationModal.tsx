'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Loader2, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAppStore } from '@/lib/store';
import { Animated3DIcon } from '@/components/ui/Animated3DIcon';

export function ConsultationModal() {
  const { isConsultationModalOpen, closeConsultationModal, currentMood, qualityTier } = useAppStore();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    spaceType: '3BHK',
    budget: '25 to 50 Lakh',
    city: 'Bengaluru',
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isConsultationModalOpen) {
        closeConsultationModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsultationModalOpen, closeConsultationModal]);

  // Lock body scroll & pause Lenis when modal is open
  useEffect(() => {
    if (isConsultationModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Pause Lenis smooth scroll so background never scrolls
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      // Resume Lenis smooth scroll
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.start();
      }
      setIsSuccess(false);
      setErrorMsg('');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.start();
      }
    };
  }, [isConsultationModalOpen]);

  if (!isConsultationModalOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email || `${formData.phone.replace(/[^0-9]/g, '')}@lead.houseofmeda.com`,
          city: formData.city,
          spaceType: formData.spaceType,
          budget: formData.budget,
          about: formData.note,
          consent: true,
          selectedMood: currentMood,
          deviceTier: qualityTier,
          formType: 'QUICK_POPUP_LEAD',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error('Could not submit details. Please try again.');
      }

      setIsSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.6 },
        colors: ['#4F5B4A', '#8B6B4E', '#D4C8B5', '#8A9A83'],
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please connect on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-lenis-prevent
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-charcoal/40 backdrop-blur-md animate-in fade-in duration-300 overscroll-contain"
      onClick={closeConsultationModal}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-md bg-ivory-linen rounded-t-3xl sm:rounded-subtle p-5 pb-8 sm:p-7 shadow-floating border-t sm:border border-oat-stone max-h-[92vh] overflow-y-auto overscroll-contain animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="w-10 h-1 bg-oat-stone rounded-full mx-auto mb-3 sm:hidden" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closeConsultationModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-sand text-charcoal/70 hover:text-charcoal transition-colors focus:outline-none focus:ring-1 focus:ring-moss"
          aria-label="Close consultation modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-moss/10 flex items-center justify-center text-moss border border-moss/20">
              <div className="animate-live-check">
                <CheckCircle2 className="w-7 h-7" />
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-eyebrow text-moss font-semibold block mb-1">
                Consultation Request Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                Thank you, {formData.fullName}.
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-taupe leading-relaxed max-w-sm mx-auto">
              Our studio director, <strong>Abhishek Meda</strong>, will review your space parameters and call you within <strong>24 to 48 hours</strong>.
            </p>

            <div className="p-3.5 bg-sand/40 rounded-subtle border border-oat-stone/60 text-xs font-sans text-charcoal text-left space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-taupe">Space Type:</span>
                <span className="font-medium">{formData.spaceType} ({formData.city})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-taupe">Budget Band:</span>
                <span className="font-medium">₹{formData.budget}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-taupe">Contact:</span>
                <span className="font-medium">{formData.phone}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeConsultationModal}
              className="w-full py-3 bg-moss hover:bg-walnut text-ivory-linen rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-colors shadow-calm"
            >
              Back to Exploring 3D Journey
            </button>
          </div>
        ) : (
          /* Short Lead Form - 2 Placeholders per line */
          <>
            <div className="mb-4 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-subtle bg-sand/60 text-moss text-[10px] uppercase tracking-eyebrow font-semibold mb-1">
                <Animated3DIcon type="dialogue" size="sm" />
                <span>Quick Discovery Callback</span>
              </div>
              <h2 id="modal-title" className="font-serif text-xl sm:text-2xl text-charcoal font-medium leading-tight">
                Book A Spatial Consultation
              </h2>
            </div>

            {errorMsg && (
              <div className="mb-3 p-2.5 bg-red-50 text-red-800 text-xs rounded-subtle border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 font-sans">
              {/* Row 1: Full Name & Phone (+91) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label htmlFor="lead-name" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
                    Full Name *
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Abhishek"
                    className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
                    Phone (+91) *
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                  />
                </div>
              </div>

              {/* Row 2: Space Type & Budget */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label htmlFor="lead-space" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
                    Space Type *
                  </label>
                  <select
                    id="lead-space"
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                  >
                    <option value="2BHK">2BHK Flat</option>
                    <option value="3BHK">3BHK Flat</option>
                    <option value="4BHK+">4BHK+ Luxury</option>
                    <option value="Villa">Villa / Estate</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Renovation">Renovation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lead-budget" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
                    Budget Band *
                  </label>
                  <select
                    id="lead-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                  >
                    <option value="15 to 25 Lakh">₹15 - 25 Lakh</option>
                    <option value="25 to 50 Lakh">₹25 - 50 Lakh</option>
                    <option value="50 Lakh to 1 Cr">₹50L - 1 Crore</option>
                    <option value="1 Cr+">₹1 Crore +</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Project City & Email Address */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label htmlFor="lead-city" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
                    Project City
                  </label>
                  <input
                    id="lead-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Bengaluru"
                    className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1 truncate">
                    Email (Optional)
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                  />
                </div>
              </div>

              {/* Row 4: Notes / Aspirations (Compact 1-line input) */}
              <div>
                <label htmlFor="lead-note" className="block text-[10px] uppercase tracking-eyebrow text-taupe font-semibold mb-1">
                  Notes / Timeline (Optional)
                </label>
                <input
                  id="lead-note"
                  type="text"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Possession date, style preferences..."
                  className="w-full px-3 py-2 bg-ivory-light border border-oat-stone/80 rounded-subtle text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-moss focus:border-moss"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-1.5 text-[10px] text-taupe pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-moss shrink-0" />
                <span>100% confidential. Discretion assured by House of Meda.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-moss hover:bg-walnut text-ivory-linen py-3 rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-all shadow-calm disabled:opacity-50 mt-2 active:scale-95 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Details...</span>
                  </>
                ) : (
                  <>
                    <span>Request Consultation Callback</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

