import type { SalonImageType } from '@app/types';

export const salonImageTypeExternal: SalonImageType = {
  id: 'f7b3c4a1-2d8e-4c9f-b1a6-7e5d3c8f9a2b',
  description: 'External Image',
  value: 'external',
};

export const salonImageTypeInternal: SalonImageType = {
  id: 'a9e8d7c6-5b4a-3f2e-1d0c-9b8a7f6e5d4c',
  description: 'Internal Image',
  value: 'internal',
};

export const salonImageTypes: SalonImageType[] = [
  salonImageTypeExternal,
  salonImageTypeInternal,
];
