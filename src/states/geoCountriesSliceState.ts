import { GeoCountry, State } from '@app/types';
import { initialAction } from './initialAction';
import { initialStatus } from './initialStatus';

export const geoCountriesSliceState = {
  ...initialAction,
  ...initialStatus,
  entities: [] as GeoCountry[],
  error: null,
} satisfies State<GeoCountry>;
