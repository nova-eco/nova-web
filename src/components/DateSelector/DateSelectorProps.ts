import type { UserInterfaceTheme } from '@app/types';

export interface DateSelectorProps {
  selectedDate: string;
  onSetDate: (date: string) => void;
  minDate: string;
  maxDate: string;
  theme?: UserInterfaceTheme;
}
