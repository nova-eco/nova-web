import { ServicePrice, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const servicePricesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as ServicePrice[],
  error: null,
} satisfies State<ServicePrice>;
