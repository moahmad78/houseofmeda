import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { CursorRing } from '@/components/ui/CursorRing';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { HotspotModal } from '@/components/ui/HotspotModal';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { MoodPicker } from '@/components/ui/MoodPicker';
import { MobileBottomNav } from '@/components/ui/MobileBottomNav';
import { BrandWatermark } from '@/components/ui/BrandWatermark';
import { STUDIO_INFO } from '@/lib/data';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dmsans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'House of Meda — Calm, Minimalist Interiors for Thoughtful Living',
  description:
    'Bengaluru-based architectural interior studio crafting calm, bespoke sanctuaries for homeowners and developers. End-to-end turnkey accountability.',
  keywords: [
    'House of Meda',
    'Architectural Interiors Bengaluru',
    'Minimalist Interior Design',
    'Wabi Sabi Interior Architecture India',
    'Turnkey Luxury Homes Sarjapur Indiranagar',
    'Bespoke Millwork & Architecture',
  ],
  authors: [{ name: 'Abhishek Meda', url: 'https://houseofmeda.com' }],
  metadataBase: new URL('https://houseofmeda.com'),
  openGraph: {
    title: 'House of Meda — Calm, Minimalist Interiors for Thoughtful Living',
    description:
      'We believe luxury does not announce itself. It lives in proportion, tactile honesty, and intentional quietude.',
    url: 'https://houseofmeda.com',
    siteName: 'House of Meda',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'House of Meda Architectural Interior Sanctuary',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-ivory-linen text-charcoal min-h-screen selection:bg-moss selection:text-ivory-linen relative">
        <BrandWatermark />
        <SmoothScroll>
          <CursorRing />
          <Header />
          <MoodPicker />
          <HotspotModal />
          <ConsultationModal />
          <WhatsAppFloat />
          <MobileBottomNav />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              name: 'House of Meda',
              legalName: STUDIO_INFO.legalName,
              description: STUDIO_INFO.tagline,
              url: 'https://houseofmeda.com',
              telephone: STUDIO_INFO.phone,
              email: STUDIO_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560068',
                addressCountry: 'IN',
              },
              founder: [
                {
                  '@type': 'Person',
                  name: 'Abhishek Meda',
                  jobTitle: 'Founder & Creative Director',
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

