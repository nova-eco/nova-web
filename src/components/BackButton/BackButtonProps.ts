import type { UserInterfaceTheme } from '@app/types';

export interface BackButtonProps {
  onBack: () => void;
  theme?: UserInterfaceTheme;
}
