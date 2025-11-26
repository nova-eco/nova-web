import React from 'react';
import * as styles from './DateSelector.module.css';
import { DateSelectorProps } from './DateSelectorProps';

/**
 * DateSelector component allows users to select a date within a specified range.
 *
 * @param   {DateSelectorProps}     props              - The component props
 * @param   {string}                props.selectedDate - The currently selected date in ISO format
 * @param   {function}              props.onSetDate    - Callback function called when date changes
 * @param   {string}                props.minDate      - Minimum selectable date in ISO format
 * @param   {string}                props.maxDate      - Maximum selectable date in ISO format
 * @param   {UserInterfaceTheme}    [props.theme]      - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                              The rendered date selector component
 */
export const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  onSetDate,
  minDate,
  maxDate,
  theme,
}) => {
  return (
    <div className={styles.dateSection} data-theme={theme}>
      <h3 className={styles.sectionTitle}>Choose a Date</h3>
      <input
        type="date"
        className={styles.dateInput}
        value={selectedDate}
        onChange={(e) => onSetDate(e.target.value)}
        min={minDate}
        max={maxDate}
      />
    </div>
  );
};
