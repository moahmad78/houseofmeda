import { create } from 'zustand';

export type MoodType = 'aikyam' | 'tattva' | 'meda-classic';
export type QualityTier = 'tier-a' | 'tier-b';

export interface HotspotData {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  materials: string;
  position: [number, number, number];
  image?: string;
}

interface AppState {
  // Scroll & Chapter
  scrollProgress: number;
  currentChapter: number;
  setScrollProgress: (progress: number) => void;
  setCurrentChapter: (chapter: number) => void;

  // Mood Picker
  currentMood: MoodType;
  setMood: (mood: MoodType) => void;

  // Hotspots
  activeHotspot: HotspotData | null;
  setActiveHotspot: (hotspot: HotspotData | null) => void;

  // Device Quality
  qualityTier: QualityTier;
  setQualityTier: (tier: QualityTier) => void;

  // Mobile menu
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Short Consultation Modal
  isConsultationModalOpen: boolean;
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  scrollProgress: 0,
  currentChapter: 1,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setCurrentChapter: (chapter) => set({ currentChapter: chapter }),

  currentMood: 'meda-classic',
  setMood: (mood) => set({ currentMood: mood }),

  activeHotspot: null,
  setActiveHotspot: (hotspot) => set({ activeHotspot: hotspot }),

  qualityTier: 'tier-a',
  setQualityTier: (tier) => set({ qualityTier: tier }),

  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

  isConsultationModalOpen: false,
  openConsultationModal: () => set({ isConsultationModalOpen: true, isMobileMenuOpen: false }),
  closeConsultationModal: () => set({ isConsultationModalOpen: false }),
}));
