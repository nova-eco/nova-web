import type { UserInterfaceTheme } from '@app/types';

export interface BookingPathwayDateTimeProps {
  timeSlots: string[];
  selectedDate: string;
  selectedTime: string;
  onSetDate: (date: string) => void;
  onSetTime: (time: string) => void;
  onBack: () => void;
  theme?: UserInterfaceTheme;
}
