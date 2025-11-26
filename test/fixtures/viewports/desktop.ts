import type { ViewportConfigsType } from '@test/fixtures/types';

export const desktopViewports: ViewportConfigsType = {
  desktopMin: { width: 1024, height: 768, columns: 3, label: 'Desktop Min (1024px)' },
  laptop: { width: 1280, height: 720, columns: 4, label: 'Laptop (1280px)' },
  desktop1366: { width: 1366, height: 768, columns: 4, label: 'Desktop 1366 (1366px)' },
  desktop1440: { width: 1440, height: 900, columns: 4, label: 'Desktop 1440 (1440px)' },
  desktop1536: { width: 1536, height: 864, columns: 4, label: 'Desktop 1536 (1536px)' },
  fullHD: { width: 1920, height: 1080, columns: 4, label: 'Full HD (1920px)' },
  twoK: { width: 2560, height: 1440, columns: 4, label: '2K (2560px)' },
  fourK: { width: 3840, height: 2160, columns: 4, label: '4K (3840px)' },
};

export const desktopBreakpoints = {
  min: 1024,
  max: 1279,
  nextMin: 1280,
};

export const largeDesktopBreakpoints = {
  min: 1280,
};
