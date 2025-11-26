import type {
  Location,
  Map,
  SalonImage,
  SalonImageType,
  UserInterfaceTheme,
} from '@app/types';
import type { SalonCardOwnProps } from './SalonCardOwnProps';

export interface SalonCardProps extends SalonCardOwnProps {
  locations: Location[];
  maps: Map[];
  salonImages: SalonImage[];
  salonImageTypes: SalonImageType[];
  setSalonId: (salonId: string) => void;
  theme?: UserInterfaceTheme;
}
