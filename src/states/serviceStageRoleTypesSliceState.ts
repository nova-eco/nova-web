import type { ServiceStageRoleType, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const serviceStageRoleTypesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as ServiceStageRoleType[],
  error: null,
} satisfies State<ServiceStageRoleType>;
