import { ChairType, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const chairTypesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as ChairType[],
  error: null,
} satisfies State<ChairType>;
