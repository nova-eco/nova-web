import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SalonCardGroup from '@app/components/SalonCardGroup';
import * as styles from './BookingPathwaySalons.module.css';
import type { BookingPathwaySalonsProps } from './BookingPathwaySalonsProps';

export const BookingPathwaySalons = ({
  bookingPathwayStep,
  hasSalonId,
  nextBookingPathwaySalonsRoute,
  setBookingPathwayStep,
  theme,
}: BookingPathwaySalonsProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    setBookingPathwayStep(bookingPathwayStep);
  }, []);

  useEffect(() => {
    if (hasSalonId === true) {
      navigate(nextBookingPathwaySalonsRoute);
    }
  }, [hasSalonId, navigate]);

  return (
    <div
      className={theme ? `${styles.container} ${styles[theme]}` : styles.container}
      data-theme={theme}
    >
      <SalonCardGroup />
    </div>
  );
};
