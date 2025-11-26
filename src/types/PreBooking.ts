export interface PreBooking {
  id: string;
  companyProductId: string;
  endSalonTimeSlotId: string;
  staffId: string;
  startSalonTimeSlotId: string;
  userId: string;
  salonId: string;
  salonChairId: string;
  startDateMonth: number;
  startDateMonthDay: number;
  startDateYear: number;
  validUntilTimestampSeconds: number;
}
