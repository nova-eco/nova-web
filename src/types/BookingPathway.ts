import { PreBooking } from './PreBooking';
import { PreBookingRequest } from './PreBookingRequest';

export interface BookingPathway {
  preBooking: PreBooking | null;
  preBookingRequest: PreBookingRequest | null;
  step: number;
}
