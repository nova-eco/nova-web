import type { StateAction } from './StateAction';
import type { StateError } from './StateError';
import type { StateStatus } from './StateStatus';

export type StateEntities<T> = {
  action: StateAction;
  entities: T[];
  error: StateError;
  status: StateStatus;
};
