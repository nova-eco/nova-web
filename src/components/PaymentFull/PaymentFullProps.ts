import type { UserInterfaceTheme } from '@app/types';

export interface PaymentFullProps {
  price: number;
  currencySymbol: string;
  isSelected: boolean;
  onSelect: () => void;
  theme?: UserInterfaceTheme;
}
