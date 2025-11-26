import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './BookingPathway.module.css';
import type { BookingPathwayProps } from './BookingPathwayProps';

/**
 * BookingPathway component manages the booking pathway flow initialization and navigation.
 *
 * This component initializes the booking pathway on mount and handles navigation when
 * the next route becomes available. It acts as an entry point for the booking process.
 *
 * @param   {BookingPathwayProps}           props                         - The component props
 *
 * @param   {string}                        props.nextBookingPathwayRoute - REQUIRED: Next route in booking pathway
 * @param   {(userId: string) => void}      props.startBookingPathway     - REQUIRED: Function to initialize booking pathway
 * @param   {UserInterfaceTheme}            [props.theme]                 - OPTIONAL: Theme (light/dark) for styling
 * @param   {string}                        props.userId                  - REQUIRED: Current user's ID
 *
 * @returns {JSX.Element}                                                 The rendered booking pathway component
 */
export const BookingPathway = ({
  nextBookingPathwayRoute,
  startBookingPathway,
  theme,
  userId,
}: BookingPathwayProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    startBookingPathway(userId);
  }, []);

  useEffect(() => {
    if (nextBookingPathwayRoute !== '') {
      navigate(nextBookingPathwayRoute);
    }
  }, [nextBookingPathwayRoute, navigate]);

  return (
    <div
      className={theme ? `${styles.container} ${styles[theme]}` : styles.container}
      data-theme={theme}
    >
      <div className={styles.content}>
        <p className={styles.message}>Initializing booking pathway...</p>
      </div>
    </div>
  );
};
