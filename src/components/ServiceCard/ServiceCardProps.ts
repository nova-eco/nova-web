import type {
  Location,
  ServiceImage,
  ServicePrice,
  ServicePriceType,
  UserInterfaceTheme,
} from '@app/types';
import type { ServiceCardOwnProps } from './ServiceCardOwnProps';

export interface ServiceCardProps extends ServiceCardOwnProps {
  locations: Location[];
  serviceImages: ServiceImage[];
  servicePrices: ServicePrice[];
  servicePriceTypes: ServicePriceType[];
  setServiceId: (serviceId: string) => void;
  theme?: UserInterfaceTheme;
}
