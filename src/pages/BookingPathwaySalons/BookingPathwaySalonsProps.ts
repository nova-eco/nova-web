import type { UserInterfaceTheme } from '@app/types';

export interface BookingPathwaySalonsProps {
  bookingPathwayStep: number;
  hasSalonId: boolean;
  nextBookingPathwaySalonsRoute: string;
  setBookingPathwayStep: (bookingPathwayStep: number) => void;
  theme?: UserInterfaceTheme;
}
