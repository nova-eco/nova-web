import type { ViewportConfigsType } from '@test/fixtures/types';

export const tabletViewports: ViewportConfigsType = {
  ipadMini: { width: 768, height: 1024, label: 'iPad Mini (768px)' },
  ipadAir: { width: 820, height: 1180, label: 'iPad Air (820px)' },
  ipadPro: { width: 834, height: 1194, label: 'iPad Pro 11" (834px)' },
  surfacePro: { width: 912, height: 1368, label: 'Surface Pro 7 (912px)' },
  tabletLandscape: { width: 1024, height: 768, label: 'Tablet Landscape (1024px)' },
  midTablet: { width: 900, height: 1200, label: 'Mid Tablet (900px)' },
  maxTablet: { width: 1023, height: 768, label: 'Max Tablet (1023px)' },
};

export const tabletBreakpoints = {
  min: 768,
  max: 1023,
  nextMin: 1024,
};
