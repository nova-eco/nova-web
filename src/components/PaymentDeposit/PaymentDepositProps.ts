import type { UserInterfaceTheme } from '@app/types';

export interface PaymentDepositProps {
  depositAmount: number;
  remainingAmount: number;
  currencySymbol: string;
  isSelected: boolean;
  onSelect: () => void;
  theme?: UserInterfaceTheme;
}
