export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Renovation';
  area: string;
  location: string;
  year: string;
  status: 'In-design' | 'Completed' | 'Under Execution';
  image: string;
  gallery: string[];
  scope: string[];
  palette: { name: string; hex: string }[];
  overview: string;
  challenge: string;
  solution: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string;
}

export interface FAQItem {
  id: string;
  number?: string;
  category: 'Process & Timeline' | 'Cost & Scope' | 'Design Philosophy' | 'Execution';
  question: string;
  answer: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  coverImage: string;
  content: string[];
}

export const STUDIO_INFO = {
  name: 'House of Meda',
  legalName: 'A Unit of Ascendria Ventures LLP',
  tagline: 'Calm, minimalist interiors for thoughtful living.',
  philosophyShort: 'Luxury that does not announce itself.',
  email: 'hello@houseofmeda.com',
  phone: '+91 85533 03558',
  whatsapp: '+918553303558',
  address: 'House Of Meda, 46/3A, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068',
  secondaryLocation: '46/3A, Hosur Rd, Kudlu Gate, Bengaluru 560068',
  social: {
    instagram: 'https://instagram.com/houseofmeda',
    linkedin: 'https://linkedin.com/company/houseofmeda',
    pinterest: 'https://pinterest.com/houseofmeda',
    facebook: 'https://facebook.com/houseofmeda',
  },
  stats: [
    { value: '45,000+', label: 'Sq. Ft. Designed' },
    { value: '18+', label: 'Bespoke Sanctuaries' },
    { value: '4 to 6', label: 'Months Typical Timeline' },
    { value: '100%', label: 'Turnkey Accountability' },
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: 'the-aikyam',
    title: 'The Aikyam',
    tagline: 'An expansive 6,000 sq.ft private estate centered on unity and light.',
    category: 'Residential',
    area: '6,000 sq.ft',
    location: 'Sarjapur, Bengaluru',
    year: '2024',
    status: 'In-design',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    ],
    scope: ['Architectural Space Planning', 'Custom Millwork', 'Acoustic Wall Systems', 'Curated Lighting Layouts'],
    palette: [
      { name: 'Oat Stone', hex: '#D4C8B5' },
      { name: 'Warm Travertine', hex: '#EBE2D3' },
      { name: 'Clay Blush', hex: '#DDBFAE' },
      { name: 'Walnut Core', hex: '#8B6B4E' },
    ],
    overview: 'The Aikyam is an inquiry into spatial harmony. The clients desired a multi-generational sanctuary that embraced minimalism without feeling cold or austere.',
    challenge: 'Managing visual weight across double-height volume spaces while maintaining acoustic warmth and intimate human-scale zones.',
    solution: 'We engineered continuous lime-plaster surfaces paired with floor-to-ceiling smoked walnut battens and recessed ambient profile lighting that hugs the floor plates.',
  },
  {
    slug: 'the-tattva-residence',
    title: 'The Tattva Residence',
    tagline: 'A 1,450 sq.ft urban apartment sculpted with biophilic restraint.',
    category: 'Residential',
    area: '1,450 sq.ft',
    location: 'Indiranagar, Bengaluru',
    year: '2024',
    status: 'In-design',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80',
    ],
    scope: ['Full Interior Architecture', 'Bespoke Wardrobe Suites', 'Custom Lighting', 'Modular Kitchen Detailing'],
    palette: [
      { name: 'Sage Green', hex: '#8A9A83' },
      { name: 'Ivory Linen', hex: '#F6F1E9' },
      { name: 'Deep Moss', hex: '#4F5B4A' },
      { name: 'Smoked Oak', hex: '#7A624A' },
    ],
    overview: 'Designed for a creative couple in central Bengaluru, The Tattva proves that compact square footage can radiate monumental serenity.',
    challenge: 'Every millimeter had to serve storage while retaining a clutter-free visual line and breathing space for light.',
    solution: 'We eliminated all exposed door handles, deployed concealed pocket partitions, and washed the walls in continuous natural mineral paint.',
  },
  {
    slug: 'zen-sanctuary-penthouse',
    title: 'The Veda Penthouse',
    tagline: 'A 3,800 sq.ft sky home balancing wabi-sabi simplicity with crafted luxury.',
    category: 'Residential',
    area: '3,800 sq.ft',
    location: 'Koramangala, Bengaluru',
    year: '2023',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    ],
    scope: ['Penthouse Architecture', 'Terrace Landscape Integration', 'Custom Furniture Prototyping'],
    palette: [
      { name: 'Raw Granite', hex: '#4A4641' },
      { name: 'Warm Oat', hex: '#D4C8B5' },
      { name: 'Brushed Brass', hex: '#C2A374' },
    ],
    overview: 'Conceived as an antidote to urban sensory overload, featuring seamless micro-concrete floors and bespoke Scandinavian-Japanese joinery.',
    challenge: 'Integrating expansive glass facades with temperature buffering and soft diffuse daylight.',
    solution: 'Double linen sheers suspended in recessed ceiling pockets coupled with low-slung tactile furniture pieces.',
  },
  {
    slug: 'aaranya-boutique-studio',
    title: 'Aaranya Studio Suites',
    tagline: 'Refined commercial workspace crafted for creative directors.',
    category: 'Commercial',
    area: '2,200 sq.ft',
    location: 'Lavelle Road, Bengaluru',
    year: '2023',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    ],
    scope: ['Commercial Spatial Design', 'Acoustic Meeting Pods', 'Ergonomic Wood Systems'],
    palette: [
      { name: 'Charcoal Umber', hex: '#2B2723' },
      { name: 'Muted Taupe', hex: '#6B635A' },
      { name: 'Deep Moss', hex: '#4F5B4A' },
    ],
    overview: 'A commercial atelier designed to encourage focus and deep collaboration, bathed in northern light.',
    challenge: 'Creating discrete privacy pods without fragmenting the open volumetric flow.',
    solution: 'Curved reeded-glass architectural partitions with black-tinted timber frames.',
  },
  {
    slug: 'the-kasa-villa',
    title: 'The Kasa Estate',
    tagline: 'An expansive 7,200 sq.ft private estate balancing monolithic stone and teak joinery.',
    category: 'Residential',
    area: '7,200 sq.ft',
    location: 'Whitefield, Bengaluru',
    year: '2024',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    ],
    scope: ['Full Villa Architecture', 'Inner Courtyard Landscaping', 'Custom Joinery Suites', 'Curated Lighting'],
    palette: [
      { name: 'Warm Travertine', hex: '#EBE2D3' },
      { name: 'Smoked Teak', hex: '#634F3D' },
      { name: 'Oat Plaster', hex: '#D4C8B5' },
    ],
    overview: 'A monolithic private villa crafted around an open-air central water pavilion, filtering natural tropical sunlight into tranquil living quarters.',
    challenge: 'Transitioning between huge entertaining volumes and private family resting sanctuaries without visual abruptness.',
    solution: 'We deployed full-height fluted timber pivot partitions that slide away completely into wall pockets.',
  },
  {
    slug: 'the-samata-retreat',
    title: 'The Samata Atelier & Wellness',
    tagline: 'A 4,800 sq.ft urban retreat crafted with tactile micro-cement and cedar wood.',
    category: 'Hospitality',
    area: '4,800 sq.ft',
    location: 'Sadashivanagar, Bengaluru',
    year: '2023',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    ],
    scope: ['Wellness Architecture', 'Acoustic Ceilings', 'Custom Stone Basin Sculptures', 'Lighting Design'],
    palette: [
      { name: 'Raw Micro-Cement', hex: '#8C857B' },
      { name: 'Japanese Cedar', hex: '#A67B5B' },
      { name: 'Deep Moss', hex: '#4F5B4A' },
    ],
    overview: 'An inner-city wellness space where every sensory touchpoint — from temperature to acoustic stillness — reinforces mindfulness.',
    challenge: 'Dampening busy urban traffic frequencies while introducing soft organic ventilation.',
    solution: 'Acoustic baffle ceilings hidden above slatted cedar battens and double-laminated acoustic glazing.',
  },
];

export interface SpaceShowcase {
  id: string;
  title: string;
  category: string;
  materials: string;
  image: string;
  description: string;
}

export const INTERIOR_SPACES_GALLERY: SpaceShowcase[] = [
  {
    id: 'living-sanctuary',
    title: 'The Monolithic Living Pavilion',
    category: 'Formal Living Space',
    materials: 'Honed Travertine, Smoked Oak, Lime Plaster',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Double-height volume with floor-to-ceiling smoked walnut battens and recessed ambient illumination.'
  },
  {
    id: 'master-bedroom',
    title: 'The Restful Master Suite',
    category: 'Private Sanctuaries',
    materials: 'Natural Linen, White Ash Joinery, Wool Rugs',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'Low-slung floating platform bed paired with acoustic linen wall envelopes and diffused morning light.'
  },
  {
    id: 'kitchen-atelier',
    title: 'The Handleless Culinary Atelier',
    category: 'Kitchen & Pantry',
    materials: 'Honed Quartzite, Fluted Glass, Matte Lacquer',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Concealed storage geometry, integrated pocket appliances, and a monolithic breakfast bar island.'
  },
  {
    id: 'dining-pavilion',
    title: 'The Courtyard Dining Room',
    category: 'Dining & Gathering',
    materials: 'Solid Reclaimed Teak, Woven Cord, Brass',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    description: 'Sculptural dining table facing an enclosed internal courtyard garden with paper lantern pendants.'
  },
  {
    id: 'powder-room',
    title: 'The Honed Stone Powder Sanctuary',
    category: 'Bath & Spa Suites',
    materials: 'Monolithic Travertine Basin, Brushed Brass',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    description: 'Under-mount anti-splash slope with wall-mounted brass spout and concealed waterproof perimeter halo.'
  },
  {
    id: 'reading-nook',
    title: 'The Light-Filled Library & Study',
    category: 'Work & Contemplation',
    materials: 'French Smoked Oak, Bouclé Fabric, Soft Steel',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    description: 'Floor-to-ceiling recessed joinery housing curated art books and tactile architectural models.'
  },
  {
    id: 'wardrobe-suite',
    title: 'The Bespoke Walk-In Dressing Suite',
    category: 'Storage & Millwork',
    materials: 'Tinted Glass, Velvet Felt Trays, Warm Sensor LEDs',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision millwork engineered with silent soft-close damper tracks and integrated jewelry drawers.'
  },
  {
    id: 'inner-courtyard',
    title: 'The Biophilic Light-Well Courtyard',
    category: 'Outdoor-Indoor Transition',
    materials: 'Black Basalt, Weathered Timber, Living Flora',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Central sky courtyard channeling natural cross-ventilation and calming botanical shadows into the living room.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Conversation with the Experts',
    tagline: 'Deep Listening & Lifestyle Alignment',
    duration: '2 to 3 Weeks',
    deliverables: [
      'Lifestyle & Habitation Consultation',
      'Site Measurement & Sunlight Analysis',
      'Design Direction & Aspirations Mapping',
      'Budget Range & Timeline Alignment',
    ],
    description: 'We start with a detailed consultation to understand your lifestyle, needs, aspirations, timelines, and budget range. This is not about pushing a style — it’s about understanding how you want to live and what your home should feel like.',
  },
  {
    step: '02',
    title: 'Begin your Design Journey',
    tagline: 'Thoughtful Roadmap & Design Direction',
    duration: '3 to 4 Weeks',
    deliverables: [
      'Clear, Thoughtful Architectural Roadmap',
      'Design Direction & Mood Explorations',
      'Axonometric 3D Space Plans',
      'Smooth Coordination Cadence',
    ],
    description: 'Once you choose to work with us, we create a clear, thoughtful roadmap for your home — outlining the design direction, timelines, and next steps. This ensures complete transparency, smooth coordination, and a calm, well-guided journey from the very beginning.',
  },
  {
    step: '03',
    title: 'Detailing and Finalisation',
    tagline: 'Finishes, Materials & Millimeter Detailing',
    duration: '3 to 4 Weeks',
    deliverables: [
      'Curated Finishes, Materials & Colours',
      'Junction & Proportion Detailing',
      'Comprehensive Bill of Quantities (BOQ)',
      'Lighting & Electrical Schematics',
    ],
    description: 'We carefully curate finishes, materials, colours, and design elements that will age beautifully and feel right for years to come. Every junction, surface, and proportion is considered.',
  },
  {
    step: '04',
    title: 'Bringing all to Life',
    tagline: 'Single Point of Execution Accountability',
    duration: '12 to 16 Weeks',
    deliverables: [
      'Complete On-Site Execution Responsibility',
      'Dedicated Studio Supervision & Coordination',
      'Strict Quality Control & Benchmarks',
      'Zero Vendor Hassle — Single Accountability',
    ],
    description: 'Our team takes complete responsibility for on-site execution, coordination, and quality control. You don’t have to manage multiple vendors — we handle everything with a single point of accountability.',
  },
  {
    step: '05',
    title: 'Coming Home',
    tagline: 'Effortless Handover & Pure Calm',
    duration: '1 Week',
    deliverables: [
      'Final Architectural Dressing & Styling',
      'White-Glove Deep Clean & Sanitization',
      'Comprehensive Handover Dossier & Warranties',
      'Complete, Calm & Effortless Living',
    ],
    description: 'We add the final touches that turn a finished house into a finished home — so everything feels complete, calm, and effortless from the moment you enter.',
  },
];

export const WHY_CHOOSE_POINTS = [
  {
    number: '01',
    title: 'Designed Around Your Life',
    description: 'No generic catalog templates. Every drawer depth, counter height, and lighting scene is calibrated to your physical habits and family rituals.',
  },
  {
    number: '02',
    title: 'Calm Timeless Aesthetic',
    description: 'We eschew loud fleeting trends in favor of quiet architectural proportions, tactile surfaces, and serene spatial balance.',
  },
  {
    number: '03',
    title: 'End-to-End Responsibility',
    description: 'A single point of contact from conceptual schematic through carpentry, MEP, civil modifications, and final white-glove handover.',
  },
  {
    number: '04',
    title: 'Meticulous Attention to Detail',
    description: 'Flush shadow gaps, concealed hardware, grain-matched veneers, and acoustic dampening treated as foundational, not optional.',
  },
  {
    number: '05',
    title: 'Honest Transparent Process',
    description: 'Itemized BOQ with zero hidden markups. We honor agreed delivery timelines and communicate openly at every phase.',
  },
  {
    number: '06',
    title: 'Materials That Age With Grace',
    description: 'Natural stones, solid hardwoods, breathable lime washes, and pure brass that develop richer patina over decades rather than deteriorating.',
  },
  {
    number: '07',
    title: 'Built for Daily Living',
    description: 'Minimalism that can withstand real Indian domestic life: stain-resistant sealants, hidden utility storage, and robust joinery.',
  },
  {
    number: '08',
    title: 'Trusted by Discerning Clients',
    description: 'Chosen by founders, physicians, and creatives across Bengaluru who value uncompromising discretion and craft excellence.',
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Integrity',
    description: 'We build trust the same way we build homes — carefully, honestly, and to last.',
  },
  {
    title: 'Evolution',
    description: 'Our work is a continuous process of refinement, learning, and improvement.',
  },
  {
    title: 'Collaboration',
    description: 'Design is a shared process between client, designer, and craftsman.',
  },
  {
    title: 'Clarity',
    description: 'We pursue simplicity in form, function, and communication.',
  },
  {
    title: 'Thoughtfulness',
    description: 'Each detail is considered for purpose, proportion, and experience.',
  },
  {
    title: 'Forward Thinking',
    description: 'We design not for the moment, but for the many years that follow.',
  },
  {
    title: 'Sincerity',
    description: 'We work with honest intent and respect for both people and process.',
  },
  {
    title: 'Empathy',
    description: 'We design by listening first, understanding lives before drawing lines.',
  },
  {
    title: 'Timelessness',
    description: 'We prioritise longevity over trends and permanence over fashion.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Abhishek Meda',
    role: 'Founder & Creative Director',
    credentials: 'B.Arch | Interior Architecture',
    bio: 'Guided by the belief that calmness is the highest form of luxury, Abhishek leads design direction, spatial psychology, and bespoke millwork detailing across all House of Meda commissions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    category: 'Cost & Scope',
    question: 'What kind of projects do we undertake?',
    answer:
      'We specialise in bespoke residential interiors, including apartments, villas, and private residences. We also take up commercial, hospitality and renovation interiors as well.',
  },
  {
    id: 'faq-2',
    number: '02',
    category: 'Execution',
    question: 'Do you offer complete turnkey execution?',
    answer:
      'Yes. We offer end-to-end design and execution services — from concept, planning, and 3D visualisation to site execution, project management, and final handover.',
  },
  {
    id: 'faq-3',
    number: '03',
    category: 'Design Philosophy',
    question: 'Where is the design studio located?',
    answer:
      '9/1A, Munireddy Compound, Opposite Nimishamba Arcade, Arakere Main Road, Bannerghatta Road, Bengaluru, Karnataka – 560076.',
  },
  {
    id: 'faq-4',
    number: '04',
    category: 'Design Philosophy',
    question: 'When did House of Meda begin its journey?',
    answer:
      'We started the studio in the year 2025.',
  },
  {
    id: 'faq-5',
    number: '05',
    category: 'Cost & Scope',
    question: 'How do you charge for your services?',
    answer:
      'Our fees depend on the scope of work, size of the project, and level of involvement required. After understanding your requirements, we share a transparent, detailed proposal outlining design fees and execution costs separately.',
  },
  {
    id: 'faq-6',
    number: '06',
    category: 'Process & Timeline',
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary based on project scale and complexity. On average, a full-home interior project takes between 4 to 6 months from design finalisation to completion. We provide a detailed timeline before execution begins.',
  },
  {
    id: 'faq-7',
    number: '07',
    category: 'Process & Timeline',
    question: 'Can we get a walkthrough of any of the completed projects?',
    answer:
      'To respect our clients’ privacy, we do not offer visits to completed homes. However, when possible, we can arrange a visit to an ongoing project, and you can always explore our work on our website and Instagram.',
  },
  {
    id: 'faq-8',
    number: '08',
    category: 'Design Philosophy',
    question: 'How involved will I be in the design process?',
    answer:
      'Very involved. We believe great homes are born from collaboration. You will be part of all key decisions — layouts, materials, finishes, and details — guided carefully by our team.',
  },
  {
    id: 'faq-9',
    number: '09',
    category: 'Execution',
    question: 'Do you customize all furniture and elements?',
    answer:
      'Yes. Most of our designs involve custom-made furniture and bespoke detailing to ensure perfect proportions, functionality, and uniqueness for your home.',
  },
  {
    id: 'faq-10',
    number: '10',
    category: 'Process & Timeline',
    question: 'How many design options do you provide for a project?',
    answer:
      'We provide up-to 2 design options for each space, anything beyond that will be chargeable.',
  },
  {
    id: 'faq-11',
    number: '11',
    category: 'Process & Timeline',
    question: 'When is the right time to engage with House of Meda?',
    answer:
      'We recommend reaching out at least 7 months before your intended completion or move-in date. Typically, design takes about 2–3 months and execution another 4–5 months, depending on the size and level of detail of the project.',
  },
  {
    id: 'faq-12',
    number: '12',
    category: 'Cost & Scope',
    question: 'Which locations do you serve apart from Bengaluru?',
    answer:
      'While we are based in Bengaluru, we also take up projects Pan-India.',
  },
  {
    id: 'faq-13',
    number: '13',
    category: 'Process & Timeline',
    question: 'How do we get started?',
    answer:
      'You can begin by booking a consultation through our website or contacting us directly. Our team will get in touch to schedule an initial discussion to understand your requirements, vision, and project timelines.',
  },
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'end-to-end-interiors-guide',
    title: 'Why End-to-End Interior Architecture Matters More Than Decorating',
    date: 'November 2024',
    readTime: '5 min read',
    category: 'Architectural Insights',
    excerpt: 'Decorators dress surfaces. Architects choreograph how light, shadow, acoustics, and joinery harmonize into everyday calm.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    content: [
      'When homeowners embark on their interior journey, the prevailing urge is to collect reference images of furniture and color swatches. Yet true comfort in a home is rarely determined by the cushion fabric.',
      'It is determined by whether the afternoon sun creates harsh glare or soft atmospheric warmth; whether the kitchen island accommodates two people preparing a meal without bumping elbows; and whether storage is so intuitively integrated that clutter never has a chance to accumulate.',
      'At House of Meda, we approach interiors through the lens of architectural continuity. Every electrical point, HVAC diffuser, and wall joint is reconciled during schematic design, eliminating the painful compromises that plague disjointed turnkey projects.',
    ],
  },
  {
    slug: 'instagram-vs-reality-minimalism',
    title: 'Instagram vs. Reality: Building a Minimalist Home That Actually Works for Indian Living',
    date: 'October 2024',
    readTime: '6 min read',
    category: 'Material Science',
    excerpt: 'Can warm minimalist interiors withstand turmeric, monsoon humidity, and everyday family life? An honest inquiry into materials that age with grace.',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Social media feeds are filled with snow-white boucle sofas and immaculate micro-cement walls that appear untouched by human hands. But a home is not a gallery; it is a living sanctuary where families cook, celebrate, and unwind.',
      'Our philosophy embraces materials that welcome life rather than fear it. Instead of brittle synthetic gloss laminates, we specify natural quarter-sawn veneers treated with matte non-yellowing sealants.',
      'Instead of porous unstained marble, we select honed, sealed Indian travertines and quartz aggregates that withstand high-heat cooking and spice spills without sacrificing architectural poetry.',
    ],
  },
  {
    slug: 'step-by-step-process-walkthrough',
    title: 'From Blueprint to Sanctuary: The House of Meda 5-Step Journey',
    date: 'September 2024',
    readTime: '7 min read',
    category: 'Studio Craft',
    excerpt: 'An inside look at how we translate spatial aspirations into physical reality across 18 weeks of disciplined execution.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    content: [
      'The journey of building a home should not be an exhausting ordeal of managing unresponsive contractors and rectifying site errors. It should be a quiet, joyful unfolding.',
      'We established our 5-step methodology — Conversation, Design Journey, Detailing, Bringing all to Life, and Coming Home — to provide our clients with radical predictability.',
      'When structural rigor meets empathetic design, the result is a home that elevates the spirit every time you cross its threshold.',
    ],
  },
];

export const SERVICES_DATA = [
  {
    id: 'residential',
    title: 'Residential Sanctuaries',
    tagline: 'Villas, Penthouses & Luxury Apartments',
    description: 'Complete interior architecture for discerning homeowners. We sculpt spaces around your personal rituals, integrating custom joinery, curated lighting, and tactile materials.',
    features: [
      'Complete space planning & structural modifications',
      'Custom modular kitchens & master wardrobe suites',
      'Architectural lighting design & smart integration',
      'Bath sanctuary design & monolithic stone masonry',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'commercial',
    title: 'Commercial Ateliers',
    tagline: 'Boutique Workspaces & Executive Suites',
    description: 'Work environments engineered for deep focus, creative collaboration, and understated prestige that speaks to discerning clients and high-performing teams.',
    features: [
      'Acoustic zoning & sound-dampened meeting pods',
      'Executive boardrooms with seamless audio-visual integration',
      'Biophilic breakout lounges & wellness spaces',
      'High-durability natural materials engineered for foot traffic',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Wellness',
    tagline: 'Boutique Retreats, Cafes & Spa Lounges',
    description: 'Immersive sensory destinations where architecture creates memorable emotional experiences. Calm, inviting, and thoughtfully detailed down to every touchpoint.',
    features: [
      'Atmospheric mood lighting & warm dusk transitions',
      'Curated acoustic soundscapes & tactile surfaces',
      'Custom bespoke furniture & bar/counter centerpieces',
      'Operational flow optimization for staff and guest delight',
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'renovation',
    title: 'Architectural Renovation',
    tagline: 'Transformative Structural Re-imagining',
    description: 'Breathe new life into aging heritage or dated apartments. We strip down visual and spatial bottlenecks to reveal open, airy, modern sanctuaries.',
    features: [
      'Civil wall demolition & structural beam reinforcement',
      'Modern MEP rewiring & complete plumbing overhaul',
      'Floor leveling & monolithic micro-concrete overlay',
      'Energy-efficient thermal & acoustic window retrofits',
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  },
];

