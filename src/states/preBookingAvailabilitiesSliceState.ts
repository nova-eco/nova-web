import type { PreBookingAvailability, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const preBookingAvailabilitiesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as PreBookingAvailability[],
  error: null,
} satisfies State<PreBookingAvailability>;
