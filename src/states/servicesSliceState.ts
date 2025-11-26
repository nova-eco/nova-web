import type { Service, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const servicesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as Service[],
  error: null,
} satisfies State<Service>;
