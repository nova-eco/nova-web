import type { User } from '@app/types';

export interface LoginProps {
  hasSetupBeenSuccessful: boolean;
  setupLoad: (args: User) => void;
  user: User | null;
}
