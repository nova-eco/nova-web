import { UserInterfaceTheme } from '@app/types';

export interface CardButtonProps {
  label: string;
  onClick: () => void;
  theme?: UserInterfaceTheme;
}
