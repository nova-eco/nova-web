import { Staff, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const staffSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as Staff[],
  error: null,
} satisfies State<Staff>;
