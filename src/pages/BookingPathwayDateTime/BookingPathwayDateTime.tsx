import { Calendar } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPathwayHeader from '@app/components/BookingPathwayHeader';
import ContinueButton from '@app/components/ContinueButton';
import DateSelector from '@app/components/DateSelector';
import TimeSelector from '@app/components/TimeSelector';
import { BookingPathwayDateTimeProps } from './BookingPathwayDateTimeProps';
import * as styles from './dateTimeSelectionPage.module.css';

export const BookingPathwayDateTime: React.FC<BookingPathwayDateTimeProps> = ({
  timeSlots,
  selectedDate,
  selectedTime,
  onSetDate,
  onSetTime,
  onBack,
  theme,
}) => {
  const navigate = useNavigate();

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get max date (3 months from now)
  const maxDateObj = new Date();
  maxDateObj.setMonth(maxDateObj.getMonth() + 3);
  const maxDate = maxDateObj.toISOString().split('T')[0];

  const handleContinue = () => {
    navigate('/info');
  };

  return (
    <div className={styles.container} data-theme={theme}>
      <BookingPathwayHeader icon={Calendar} title="Select Date & Time" theme={theme} />

      <div className={styles.content}>
        <DateSelector
          selectedDate={selectedDate}
          onSetDate={onSetDate}
          minDate={minDate}
          maxDate={maxDate}
          theme={theme}
        />

        {selectedDate && (
          <TimeSelector
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            onSetTime={onSetTime}
            theme={theme}
          />
        )}
      </div>

      <ContinueButton
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onContinue={handleContinue}
        onBack={onBack}
        theme={theme}
      />
    </div>
  );
};
