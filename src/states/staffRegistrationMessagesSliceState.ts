import { StaffRegistrationMessage, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const staffRegistrationMessagesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as StaffRegistrationMessage[],
  error: null,
} satisfies State<StaffRegistrationMessage>;
