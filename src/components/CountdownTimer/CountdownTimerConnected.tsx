import { connect } from 'react-redux';
import { RootState } from '@app/store';
import { CountdownTimer } from './CountdownTimer';

interface StateProps {
  timeRemaining: number | null;
  bookingComplete: boolean;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const mapStateToProps = (_state: RootState): StateProps => ({
  /*
   * @TODO
   */
  //timeRemaining: state.booking.timeRemaining,
  //bookingComplete: state.booking.bookingComplete,
  timeRemaining: 5,
  bookingComplete: true,
});

export const CountdownTimerConnected = connect(mapStateToProps)(CountdownTimer);
