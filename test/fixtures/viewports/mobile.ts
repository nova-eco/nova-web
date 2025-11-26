import type { ViewportConfigsType } from '@test/fixtures/types';

export const mobileViewports: ViewportConfigsType = {
  iphoneSE: { width: 375, height: 667, label: 'iPhone SE (375px)' },
  iphone12: { width: 390, height: 844, label: 'iPhone 12 (390px)' },
  iphoneProMax: { width: 428, height: 926, label: 'iPhone Pro Max (428px)' },
  pixel5: { width: 393, height: 851, label: 'Pixel 5 (393px)' },
  galaxyS20: { width: 360, height: 800, label: 'Galaxy S20 (360px)' },
  smallMobile: { width: 320, height: 568, label: 'Small Mobile (320px)' },
  mobileLandscape: { width: 667, height: 375, label: 'Mobile Landscape (667px)' },
};

export const mobileBreakpoints = {
  max: 767,
  nextMin: 768,
};
