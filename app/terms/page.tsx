import React from 'react';
import { STUDIO_INFO } from '@/lib/data';

export const metadata = {
  title: 'Terms of Engagement — House of Meda',
  description: 'Terms of Architectural and Interior Execution Engagement with House of Meda (A Unit of Ascendria Ventures LLP).',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-32 bg-ivory-linen min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs uppercase tracking-eyebrow text-moss font-semibold block mb-3">
          Legal Framework
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal font-medium mb-8">
          Terms of Engagement
        </h1>
        <div className="space-y-6 text-sm font-sans text-taupe leading-relaxed">
          <p>
            Welcome to House of Meda, operated by <strong>Ascendria Ventures LLP</strong>, Bengaluru. By accessing our website or engaging our architectural interior design services, you agree to the following terms.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">1. Scope of Services</h2>
          <p>
            House of Meda provides bespoke architectural space planning, 3D visualization, detailed construction drafting, modular joinery fabrication, and turnkey on-site execution. Detailed deliverables and milestones are specified in individual client service agreements.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">2. Intellectual Property</h2>
          <p>
            All architectural drawings, 3D renders, custom furniture designs, website code, and visual assets are proprietary to House of Meda and Ascendria Ventures LLP. Unauthorized commercial reproduction is prohibited.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">3. Warranties & Execution</h2>
          <p>
            Turnkey executions carry manufacturer warranties on specified hardware (e.g. Blum, Hettich) and a 10-year structural warranty on factory-pressed modular carcasses as outlined in the handover dossier.
          </p>
          <h2 className="font-serif text-2xl text-charcoal font-medium pt-4">4. Jurisdiction</h2>
          <p>
            Any disputes arising from these terms or studio contracts are subject to the exclusive jurisdiction of the competent courts of Bengaluru, Karnataka, India.
          </p>
        </div>
      </div>
    </div>
  );
}

