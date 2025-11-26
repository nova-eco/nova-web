import type { RootState } from '@app/store';

export const hasBookingPathwaySalonId = (state: RootState): boolean =>
  typeof state.bookingPathway.preBookingRequest?.salonId !== 'undefined';
