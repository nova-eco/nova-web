import type { Session, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const sessionSliceState = {
  ...initialAction,
  ...initialStatus,
  entity: null,
  error: null,
} satisfies State<Session>;
