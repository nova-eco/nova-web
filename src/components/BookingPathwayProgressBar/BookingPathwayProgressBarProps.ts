import type { UserInterfaceTheme } from '@app/types';

export interface ProgressStep {
  num: number;
  label: string;
}

export interface BookingPathwayProgressBarProps {
  currentStep: number;
  progressSteps: ProgressStep[];
  totalSteps: number;
  theme?: UserInterfaceTheme;
}
