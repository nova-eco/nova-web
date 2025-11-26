import type { StateAuth } from '@app/types';

export const authState = {
  action: 'none',
  entity: null,
  error: null,
  status: 'idle',
} as StateAuth;
