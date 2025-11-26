import { StaffRegistration, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const staffRegistrationsSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as StaffRegistration[],
  error: null,
} satisfies State<StaffRegistration>;
