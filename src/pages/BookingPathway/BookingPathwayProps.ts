import type { UserInterfaceTheme } from '@app/types';

export interface BookingPathwayProps {
  nextBookingPathwayRoute: string;
  startBookingPathway: (userId: string) => void;
  theme?: UserInterfaceTheme;
  userId: string;
}
