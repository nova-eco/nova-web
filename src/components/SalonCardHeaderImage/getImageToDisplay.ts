import type { Location, Map, SalonImage, SalonImageType } from '@app/types';
import { findValidImage } from './findValidImage';

export const getImageToDisplay = (
  salonImages: SalonImage[],
  salonImageTypes: SalonImageType[],
  maps: Map[],
  location: Location,
): string | null => {
  const externalImage = findValidImage(salonImages, salonImageTypes, 'external');

  if (externalImage) {
    return externalImage.url;
  }

  const internalImage = findValidImage(salonImages, salonImageTypes, 'internal');

  if (internalImage) {
    return internalImage.url;
  }

  const map = maps.find((m) => m.id === location.mapId);
  if (map?.url) {
    return map.url;
  }

  return null;
};
