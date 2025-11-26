import type { SalonImage, SalonImageType } from '@app/types';

export const findValidImage = (
  salonImages: SalonImage[],
  salonImageTypes: SalonImageType[],
  typeValue: 'internal' | 'external',
): SalonImage | undefined => {
  return salonImages.find((img) => {
    const salonImageType = salonImageTypes.find(
      (type) => type.id === img.salonImageTypeId,
    );
    return salonImageType?.value === typeValue && img.canUseExternally;
  });
};
