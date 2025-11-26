import type { ServicePriceType, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const servicePriceTypesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as ServicePriceType[],
  error: null,
} satisfies State<ServicePriceType>;
