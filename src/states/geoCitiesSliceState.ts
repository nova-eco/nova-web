import { GeoCity, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const geoCitiesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as GeoCity[],
  error: null,
} satisfies State<GeoCity>;
