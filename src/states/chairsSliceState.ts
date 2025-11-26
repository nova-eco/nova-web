import { Chair, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const chairsSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as Chair[],
  error: null,
} satisfies State<Chair>;
