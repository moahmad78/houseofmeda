import { QualityTier } from './store';

export function detectDeviceTier(): QualityTier {
  if (typeof window === 'undefined') return 'tier-a';

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    hardwareConcurrency?: number;
  };

  const memory = nav.deviceMemory || 8;
  const cores = nav.hardwareConcurrency || 4;
  const isMobile = window.innerWidth < 768;

  // On low memory / mobile, Tier B uses optimized shadow & pixel ratio for maximum smoothness
  if (isMobile || memory <= 4 || cores <= 4) {
    return 'tier-b';
  }

  return 'tier-a';
}
