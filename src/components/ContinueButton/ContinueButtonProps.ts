import type { UserInterfaceTheme } from '@app/types';

export interface ContinueButtonProps {
  selectedDate: string;
  selectedTime: string;
  onContinue: () => void;
  onBack: () => void;
  theme?: UserInterfaceTheme;
}
