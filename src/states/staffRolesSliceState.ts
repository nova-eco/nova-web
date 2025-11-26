import { StaffRole, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const staffRolesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as StaffRole[],
  error: null,
} satisfies State<StaffRole>;
