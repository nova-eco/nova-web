import type { RootState } from '@app/store';
import type { BookingPathwayRoute } from '@app/types';

export const findBookingPathwayRoute = (
  state: RootState,
  step: number,
): BookingPathwayRoute | null => {
  const routes = state.bookingPathwayRoutes?.entities || [];
  return routes.find((route) => route.step === step) || null;
};
