import type { OpenHourType, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const openHourTypesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as OpenHourType[],
  error: null,
} satisfies State<OpenHourType>;
