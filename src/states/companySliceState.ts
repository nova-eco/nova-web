import { Company, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const companySliceState = {
  ...initialAction,
  ...initialStatus,
  entity: null,
  error: null,
} satisfies State<Company>;
