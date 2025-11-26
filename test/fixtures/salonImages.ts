import type { SalonImage } from '@app/types';

export const salonImageExternal: SalonImage = {
  id: '3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a',
  salonId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  salonImageTypeId: 'f7b3c4a1-2d8e-4c9f-b1a6-7e5d3c8f9a2b',
  canUseExternally: true,
  url: 'https://example.com/external-salon.jpg',
};

export const salonImageInternal: SalonImage = {
  id: '8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d',
  salonId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  salonImageTypeId: 'a9e8d7c6-5b4a-3f2e-1d0c-9b8a7f6e5d4c',
  canUseExternally: true,
  url: 'https://example.com/internal-salon.jpg',
};

export const salonImageInternalNotExternal: SalonImage = {
  id: '4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e',
  salonId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  salonImageTypeId: 'a9e8d7c6-5b4a-3f2e-1d0c-9b8a7f6e5d4c',
  canUseExternally: false,
  url: 'https://example.com/internal-only.jpg',
};

export const salonImages: SalonImage[] = [salonImageExternal, salonImageInternal];
