import { PreBooking, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const preBookingsSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as PreBooking[],
  error: null,
} satisfies State<PreBooking>;
