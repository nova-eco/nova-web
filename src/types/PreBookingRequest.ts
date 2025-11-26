export interface PreBookingRequest {
  serviceId?: string;
  staffId?: string;
  startDateYear?: number;
  startDateMonth?: number;
  startDateMonthDay?: number;
  userId?: string;
  salonId?: string;
  salonChairId?: string;
  salonTimeSlotSequenceNumber?: number;
}
