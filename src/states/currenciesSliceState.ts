import { Currency, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const currenciesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as Currency[],
  error: null,
} satisfies State<Currency>;
