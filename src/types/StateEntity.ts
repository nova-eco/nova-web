import type { StateAction } from './StateAction';
import type { StateError } from './StateError';
import type { StateStatus } from './StateStatus';

export type StateEntity<T> = {
  action: StateAction;
  entity: T | null;
  error: StateError;
  status: StateStatus;
};
