import React from 'react';
import * as styles from './TimeSelector.module.css';
import { TimeSelectorProps } from './TimeSelectorProps';

/**
 * TimeSelector component allows users to select a time slot from available options.
 *
 * @param   {TimeSelectorProps}     props              - The component props
 * @param   {string[]}              props.timeSlots    - Array of available time slots
 * @param   {string}                props.selectedTime - The currently selected time
 * @param   {function}              props.onSetTime    - Callback function called when time changes
 * @param   {UserInterfaceTheme}    [props.theme]      - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                              The rendered time selector component
 */
export const TimeSelector: React.FC<TimeSelectorProps> = ({
  timeSlots,
  selectedTime,
  onSetTime,
  theme,
}) => {
  return (
    <div className={styles.timeSection} data-theme={theme}>
      <h3 className={styles.sectionTitle}>Choose a Time</h3>
      <div className={styles.timeGrid}>
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onSetTime(time)}
            className={`${styles.timeSlot} ${selectedTime === time ? styles.selected : ''}`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};
