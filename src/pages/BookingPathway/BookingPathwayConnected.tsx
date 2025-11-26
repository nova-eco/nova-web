import { connect } from 'react-redux';
import { findBookingPathwayRoute } from '@app/selectors/findBookingPathwayRoute';
import { startBookingPathway } from '@app/slices/bookingPathwaySlice';
import type { RootState } from '@app/store';
import { BookingPathway } from './BookingPathway';
import type { BookingPathwayProps } from './BookingPathwayProps';

const mapStateToProps = (state: RootState) => {
  const currentStep = state.bookingPathway?.step || 0;
  const nextRoute = findBookingPathwayRoute(state, currentStep);

  return {
    nextBookingPathwayRoute: nextRoute?.route || '',
    theme: state.userInterface?.theme,
    userId: state.auth?.entity?.id || '',
  };
};

const mapDispatchToProps = {
  startBookingPathway: (userId: string) => startBookingPathway(userId),
};

export const BookingPathwayConnected = connect<
  Pick<BookingPathwayProps, 'nextBookingPathwayRoute' | 'theme' | 'userId'>,
  Pick<BookingPathwayProps, 'startBookingPathway'>,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps,
)(BookingPathway);
