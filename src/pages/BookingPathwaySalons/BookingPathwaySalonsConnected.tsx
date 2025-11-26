import { connect } from 'react-redux';
import { findBookingPathwayRoute, hasBookingPathwaySalonId } from '@app/selectors';
import type { RootState } from '@app/store';
import { BookingPathwaySalons } from './BookingPathwaySalons';
import type { BookingPathwaySalonsProps } from './BookingPathwaySalonsProps';

const mapStateToProps = (state: RootState) => {
  const lastPathwayStep = state.bookingPathway?.step || 0;
  const currentPathwayStep = lastPathwayStep + 1;
  const nextRoute = findBookingPathwayRoute(state, currentPathwayStep + 1);

  return {
    bookingPathwayStep: currentPathwayStep,
    hasSalonId: hasBookingPathwaySalonId(state),
    nextBookingPathwaySalonsRoute: nextRoute?.route || '',
    theme: state.userInterface?.theme,
  };
};

/*
 * @TODO!
 */
const mapDispatchToProps = {
  /* eslint no-console: ["error", { allow: ["log"] }] */
  setBookingPathwayStep: (bookingPathwayStep: number) => console.log(bookingPathwayStep),
};

export const BookingPathwaySalonsConnected = connect<
  Pick<
    BookingPathwaySalonsProps,
    'bookingPathwayStep' | 'hasSalonId' | 'nextBookingPathwaySalonsRoute' | 'theme'
  >,
  Pick<BookingPathwaySalonsProps, 'setBookingPathwayStep'>,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps,
)(BookingPathwaySalons);
