import { StateError, User, UserCredentials, UserInterfaceTheme } from '@app/types';

export interface LoginFormProps {
  className?: '';
  error: StateError;
  isAuthenticated: boolean;
  isLoading: boolean;
  onError?: (error: string) => void;
  onSuccess?: () => void;
  user: User | null;
  userLogin: (args: UserCredentials) => void;
  theme: UserInterfaceTheme;
}
