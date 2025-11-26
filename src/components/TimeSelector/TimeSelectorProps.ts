import type { UserInterfaceTheme } from '@app/types';

export interface TimeSelectorProps {
  timeSlots: string[];
  selectedTime: string;
  onSetTime: (time: string) => void;
  theme?: UserInterfaceTheme;
}
