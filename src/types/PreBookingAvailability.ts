export interface PreBookingAvailability {
  chairId: string;
  haircutId: string;
  haircutDurationMins: number;
  staffId: string;
  startDateYear: number;
  startDateMonth: number;
  startDateMonthDay: number;
  startHour: number;
  startMin: number;
  workplaceId: string;
  workplaceTimeSlotSequenceNumber: number;
}
