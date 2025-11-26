import type {
  Location,
  Map,
  SalonImage,
  SalonImageType,
  UserInterfaceTheme,
} from '@app/types';

export interface SalonCardHeaderImageProps {
  location: Location;
  maps: Map[];
  salonImages: SalonImage[];
  salonImageTypes: SalonImageType[];
  salonName: string;
  theme?: UserInterfaceTheme;
}
