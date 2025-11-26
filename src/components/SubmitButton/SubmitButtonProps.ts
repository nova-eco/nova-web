import { UserInterfaceTheme } from '@app/types';

export interface SubmitButtonProps {
  isLoading?: boolean;
  isSubmitting?: boolean;
  disabled?: boolean;
  label?: string;
  loadingLabel?: string;
  className?: string;
  theme?: UserInterfaceTheme;
}
