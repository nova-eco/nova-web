import type { ServiceStage, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const serviceStagesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as ServiceStage[],
  error: null,
} satisfies State<ServiceStage>;
