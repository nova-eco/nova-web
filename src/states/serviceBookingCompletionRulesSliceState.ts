import { ServiceBookingCompletionRule, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const serviceBookingCompletionRulesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as ServiceBookingCompletionRule[],
  error: null,
} satisfies State<ServiceBookingCompletionRule>;
