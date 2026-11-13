import React from 'react';
import { STUDIO_INFO } from '@/lib/data';

export const metadata = {
  title: 'Privacy Policy — House of Meda',
  description: 'Privacy Policy and client data protection practices of House of Meda (A Unit of Ascendria Ventures LLP).',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory-linen min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
          Legal Framework
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal font-medium mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-sm font-sans text-taupe leading-relaxed">
          <p>
            House of Meda (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a business unit of <strong>Ascendria Ventures LLP</strong>, Bengaluru, is committed to safeguarding the privacy and confidentiality of our clients, prospective homeowners, and visitors.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">1. Information We Collect</h2>
          <p>
            When you request a spatial consultation or contact our studio, we collect personal information including your full name, phone number, email address, property location, project stage, and budget band. This data is utilized solely for architectural scope assessment and direct communication.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">2. Client Discretion & Non-Disclosure</h2>
          <p>
            We adhere to strict confidentiality regarding client floor plans, residences, locations, and personal assets. Completed photography is never published without explicit written authorization.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">3. Data Sharing</h2>
          <p>
            We do not sell, rent, or lease client information to third parties or marketing syndicates. Data is processed internally by our directors and dedicated project managers.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">4. Inquiries</h2>
          <p>
            For inquiries regarding our privacy standards or data deletion, contact us at <strong>{STUDIO_INFO.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

