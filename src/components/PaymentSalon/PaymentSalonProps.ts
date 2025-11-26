import type { UserInterfaceTheme } from '@app/types';

export interface PaymentSalonProps {
  price: number;
  currencySymbol: string;
  isSelected: boolean;
  onSelect: () => void;
  theme?: UserInterfaceTheme;
}
