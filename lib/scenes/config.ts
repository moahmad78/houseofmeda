export interface ChapterConfig {
  id: string;
  number: string;
  stepNumber?: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  range: [number, number]; // [start, end] from 0 to 1
  camera: {
    pos: [number, number, number];
    lookAt: [number, number, number];
    fov?: number;
  };
}

export const CHAPTERS: ChapterConfig[] = [
  {
    id: 'arrival',
    number: '00',
    title: 'Calm, minimalist interiors for thoughtful living.',
    subtitle: 'Arrival',
    description: 'We believe luxury does not announce itself. It lives in proportion, tactile honesty, and intentional quietude.',
    badge: 'Introduction',
    range: [0.0, 0.08],
    camera: {
      pos: [0, 18, 0.01],
      lookAt: [0, 0, 0],
      fov: 35,
    },
  },
  {
    id: 'conversation',
    number: '01',
    stepNumber: 'Step 1',
    title: 'Conversation with the Experts',
    subtitle: 'Lifestyle & Habitation Consultation',
    description: 'We start with a detailed consultation to understand your lifestyle, needs, aspirations, timelines, and budget range. This is not about pushing a style — it’s about understanding how you want to live and what your home should feel like.',
    badge: '01 Process',
    range: [0.08, 0.22],
    camera: {
      pos: [9, 12, 11],
      lookAt: [0, 0.5, 0],
      fov: 35,
    },
  },
  {
    id: 'design-journey',
    number: '02',
    stepNumber: 'Step 2',
    title: 'Begin your Design Journey',
    subtitle: 'Thoughtful Roadmap & Direction',
    description: 'Once you choose to work with us, we create a clear, thoughtful roadmap for your home — outlining the design direction, timelines, and next steps for complete transparency and a calm journey.',
    badge: '02 Process',
    range: [0.22, 0.36],
    camera: {
      pos: [12, 10, 14],
      lookAt: [0, 2, 0],
      fov: 35,
    },
  },
  {
    id: 'detailing',
    number: '03',
    stepNumber: 'Step 3',
    title: 'Detailing and Finalisation',
    subtitle: 'Tactile Materiality & Proportions',
    description: 'We carefully curate finishes, materials, colours, and design elements that will age beautifully and feel right for years to come. Every junction, surface, and proportion is considered.',
    badge: '03 Process',
    range: [0.36, 0.48],
    camera: {
      pos: [6, 4.5, 7],
      lookAt: [0, 1, 0],
      fov: 32,
    },
  },
  {
    id: 'bringing-to-life',
    number: '04',
    stepNumber: 'Step 4',
    title: 'Bringing all to Life',
    subtitle: 'Single Point of Execution Accountability',
    description: 'Our team takes complete responsibility for on-site execution, coordination, and quality control. You don’t have to manage multiple vendors — we handle everything with a single point of accountability.',
    badge: '04 Process',
    range: [0.48, 0.62],
    camera: {
      pos: [0, 2.2, 3.8],
      lookAt: [0, 1.2, -1],
      fov: 40,
    },
  },
  {
    id: 'highlights',
    number: '05',
    stepNumber: 'Highlights',
    title: 'Meticulous Architectural Craft',
    subtitle: 'Bespoke Elements & Joinery',
    description: 'Explore signature details: flush fluted panelling, hand-veneered wardrobes, and carved stone vanities designed for everyday living.',
    badge: 'Architectural Touchpoints',
    range: [0.62, 0.80],
    camera: {
      pos: [-2.5, 1.8, 1.5],
      lookAt: [1.5, 1.2, -0.5],
      fov: 38,
    },
  },
  {
    id: 'coming-home',
    number: '06',
    stepNumber: 'Step 5',
    title: 'Coming Home',
    subtitle: 'Effortless Living & Calming Atmosphere',
    description: 'We add the final touches that turn a finished house into a finished home — so everything feels complete, calm, and effortless from the moment you enter.',
    badge: '05 Process',
    range: [0.80, 0.92],
    camera: {
      pos: [5, 3.5, 6],
      lookAt: [0, 1.0, 0],
      fov: 35,
    },
  },
  {
    id: 'plinth-cta',
    number: '07',
    stepNumber: 'Handover',
    title: "Let's Shape Your Space",
    subtitle: 'End-to-End Architectural Interior Mastery',
    description: 'Your sanctuary, realized with unwavering precision from blueprint to final handover. Reserve an initial dialogue with our principal directors.',
    badge: 'Begin Your Project',
    range: [0.92, 1.0],
    camera: {
      pos: [11, 8, 11],
      lookAt: [0, 0.4, 0],
      fov: 35,
    },
  },
];

export const MOOD_PALETTES = {
  aikyam: {
    name: 'The Aikyam',
    label: 'Soft Pastels & Warm Neutrals',
    description: 'Inspired by our 6,000 sq.ft villa in Bengaluru. Warm travertine tones, oat plasters, and whisper-soft blush fabrics.',
    wallColor: '#F2EDE4',
    floorColor: '#9C826B',
    accentColor: '#DDBFAE',
    furnitureColor: '#DFD7CA',
    glowColor: '#FFF1D6',
  },
  tattva: {
    name: 'The Tattva',
    label: 'Muted Greens & Warm Wood',
    description: 'Reflecting biophilic calmness with earthy sage accents, fluted oak joinery, and forest floor tones.',
    wallColor: '#EBE7DE',
    floorColor: '#7A624A',
    accentColor: '#8A9A83',
    furnitureColor: '#5B6656',
    glowColor: '#F5E3C8',
  },
  'meda-classic': {
    name: 'Meda Classic',
    label: 'Ivory Plaster & Walnut',
    description: 'The definitive House of Meda language. Pure lime plaster, deep smoked walnut floors, and deep moss wool textures.',
    wallColor: '#EFE8DC',
    floorColor: '#8B6B4E',
    accentColor: '#4F5B4A',
    furnitureColor: '#D4C8B5',
    glowColor: '#F3D9A8',
  },
};

export const HOTSPOTS_DATA = [
  {
    id: 'wardrobe',
    title: 'Bespoke Fluted Wardrobe',
    category: 'Master Suite Joinery',
    description: 'Floor-to-ceiling smoked veneer wardrobe with integrated warm 2700K perimeter profile illumination and invisible recessed finger-pulls.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    details: [
      'Zero visible hardware with soft-close Blum German runners',
      'Acoustic felt lining within accessory drawers',
      'Quarter-cut European walnut veneer with matte polyurethane sealant',
    ],
    materials: 'Smoked Walnut & Linen Infused Glass',
    position: [1.4, 1.7, -0.7] as [number, number, number],
  },
  {
    id: 'panel',
    title: 'Acoustic Architectural Wall Panelling',
    category: 'Living Sanctuary',
    description: 'Micro-perforated natural lime plaster slats floating over acoustic dampening mineral wool, framing the concealed pocket doorway.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    details: [
      'Conceals electrical conduits and structural columns seamlessly',
      'Provides subtle ambient shadow gap at ceiling interface',
      'Treated with eco-friendly breathable lime wash',
    ],
    materials: 'Fluted Plaster & Raw Moss Accent Band',
    position: [2.5, 1.4, 0.2] as [number, number, number],
  },
  {
    id: 'vanity',
    title: 'Monolithic Stone Vanity & Mirror',
    category: 'Master Washroom',
    description: 'Carved single-block Travertine washbasin mounted on a suspended oak credenza with backlight halo mirror.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    details: [
      'Water-jet mitred edges creating a seamless solid-stone appearance',
      'Under-mount anti-splash slope crafted by master stone masons',
      'Concealed moisture-resistant sensor lighting',
    ],
    materials: 'Honed Travertine & Natural Oak',
    position: [0.2, 0.65, 0.9] as [number, number, number],
  },
];

