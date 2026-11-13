import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '@/lib/data';
import { LeadForm } from '@/components/ui/LeadForm';

export const metadata = {
  title: 'Book A Consultation — House of Meda Architectural Interiors',
  description: 'Initiate your spatial consultation with House of Meda. 46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
            Spatial Dialogue
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-medium mb-4 leading-tight">
            Begin Your Consultation.
          </h1>
          <p className="font-sans text-sm sm:text-base text-taupe leading-relaxed">
            Every sanctuary starts with deep listening. Share your spatial requirements below, and our founders will schedule an initial conceptual dialogue within 24 to 48 hours.
          </p>
        </div>

        {/* Top Split Section: Contact Details & Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          {/* Left Column: Studio Details & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            {/* Studio Address Card */}
            <div className="bg-sand/30 p-6 sm:p-8 rounded-subtle border border-oat-stone/60 space-y-5 shadow-sm">
              {/* Studio Atmosphere Photography */}
              <div className="relative aspect-[16/9] w-full rounded-subtle overflow-hidden bg-oat-stone/30 border border-oat-stone/50 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="House of Meda Bengaluru Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 bg-ivory-linen/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] uppercase tracking-eyebrow font-medium text-charcoal shadow-sm">
                  Kudlu Gate Atelier & Design Studio
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-1">
                  Bengaluru Design Studio
                </span>
                <h3 className="font-serif text-2xl text-charcoal font-medium mb-2">
                  House of Meda
                </h3>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/90 leading-relaxed font-sans">
                  <MapPin className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>
                    46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068
                  </span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="pt-4 border-t border-oat-stone/40 space-y-2.5 text-xs font-sans">
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center gap-3 text-charcoal hover:text-moss transition-colors"
                >
                  <Mail className="w-4 h-4 text-moss shrink-0" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-center gap-3 text-charcoal hover:text-moss transition-colors"
                >
                  <Phone className="w-4 h-4 text-moss shrink-0" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-moss font-semibold hover:underline"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Direct: {STUDIO_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Timing & Approach Card */}
            <div className="bg-sand/20 p-5 sm:p-6 rounded-subtle border border-oat-stone/50 space-y-3.5 text-xs font-sans text-taupe shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-charcoal font-medium">Visiting Our Material Library</strong>
                  <span className="leading-relaxed">Physical consultations at our Kudlu Gate studio are hosted by prior appointment to ensure undivided attention.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-charcoal font-medium">Turnkey Discretion</strong>
                  <span className="leading-relaxed">We honor total privacy for high-profile clients, entrepreneurs, and residential developments.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7 bg-ivory-linen p-6 sm:p-10 rounded-subtle border border-oat-stone/80 shadow-card">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-eyebrow text-moss font-semibold block mb-1">
                Direct Studio Callback
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium mb-1">
                Consultation Briefing
              </h2>
              <p className="font-sans text-xs text-taupe">
                Provide basic project parameters so our team can review spatial zoning prior to our conversation.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>

        {/* Bottom Full-Width Studio Location Map Section */}
        <div className="w-full bg-sand/25 p-6 sm:p-10 rounded-subtle border border-oat-stone/70 shadow-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-subtle bg-sand/60 text-moss text-[10px] uppercase tracking-eyebrow font-semibold mb-1 border border-oat-stone/50">
                <MapPin className="w-3.5 h-3.5" />
                <span>Atelier Coordinates</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                Visit The Studio & Material Library
              </h3>
              <p className="font-sans text-xs sm:text-sm text-taupe mt-1">
                House of Meda, 46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Bengaluru 560068
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=46%2F3A%2C+Hosur+Rd%2C+Kudlu+Gate%2C+Krishna+Reddy+Industrial+Area%2C+Hosapalaya%2C+Muneshwara+Nagar%2C+Bengaluru%2C+Karnataka+560068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-moss hover:bg-walnut text-ivory-linen rounded-subtle text-xs font-sans uppercase tracking-button font-medium transition-colors shadow-sm self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Full-Width Google Maps Embed iframe */}
          <div className="w-full h-80 sm:h-96 md:h-[420px] rounded-subtle overflow-hidden border border-oat-stone/70 shadow-inner bg-sand/40">
            <iframe
              title="House of Meda Studio Location Map"
              src="https://maps.google.com/maps?q=46%2F3A%2C+Hosur+Rd%2C+Kudlu+Gate%2C+Krishna+Reddy+Industrial+Area%2C+Hosapalaya%2C+Muneshwara+Nagar%2C+Bengaluru%2C+Karnataka+560068&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Accessibility Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-oat-stone/50 text-xs font-sans text-taupe">
            <div>
              <strong className="block text-charcoal font-medium mb-0.5">Prime Location</strong>
              <span>Directly accessible off Hosur Main Road at Kudlu Gate junction.</span>
            </div>
            <div>
              <strong className="block text-charcoal font-medium mb-0.5">Visitor Parking</strong>
              <span>Dedicated on-site parking reserved for client consultation sessions.</span>
            </div>
            <div>
              <strong className="block text-charcoal font-medium mb-0.5">By Prior Appointment</strong>
              <span>Hosted by founder Abhishek Meda for material curation and blueprints.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

