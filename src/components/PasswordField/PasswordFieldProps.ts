import { FieldError, UseFormRegister } from 'react-hook-form';
import { UserCredentials, UserInterfaceTheme } from '@app/types';

export interface PasswordFieldProps {
  register: UseFormRegister<UserCredentials>;
  error?: FieldError;
  disabled?: boolean;
  className?: string;
  theme?: UserInterfaceTheme;
}
