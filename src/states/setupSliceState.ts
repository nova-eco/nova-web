import type { Setup, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const setupSliceState = {
  ...initialAction,
  ...initialStatus,
  entity: null,
  error: null,
} satisfies State<Setup>;
