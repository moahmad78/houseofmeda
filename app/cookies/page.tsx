import React from 'react';

export const metadata = {
  title: 'Cookie Notice — House of Meda',
  description: 'Cookie policy and local storage practices for House of Meda.',
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory-linen min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
          Privacy Standards
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal font-medium mb-8">
          Cookie & Preference Notice
        </h1>
        <div className="space-y-6 text-sm font-sans text-taupe leading-relaxed">
          <p>
            House of Meda uses minimal essential cookies and browser storage (such as localStorage) solely to remember your 3D/2D visual preferences (Simple View toggle) and sensory mood choices (Aikyam, Tattva, Meda Classic).
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">No Third-Party Advertising Trackers</h2>
          <p>
            We do not deploy intrusive third-party cross-site advertising cookies. Anonymous aggregated telemetry may be collected via privacy-conscious analytics to verify page load performance and smooth 60fps frame rates across mobile devices.
          </p>
          <p className="pt-4">
            You can modify your browser settings at any time to block or delete cookies without affecting your ability to view our architectural portfolio and submit consultation inquiries.
          </p>
        </div>
      </div>
    </div>
  );
}

