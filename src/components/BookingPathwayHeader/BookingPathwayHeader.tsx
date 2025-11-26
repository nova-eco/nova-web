import React from 'react';
import * as styles from './BookingPathwayHeader.module.css';
import { BookingPathwayHeaderProps } from './BookingPathwayHeaderProps';

/**
 * BookingPathwayHeader component displays a header with an icon and title.
 *
 * @param   {BookingPathwayHeaderProps} props       - The component props
 * @param   {LucideIcon}                props.icon  - The Lucide icon component to display
 * @param   {string}                    props.title - The header title text
 * @param   {UserInterfaceTheme}        [props.theme] - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                           The rendered header component
 */
export const BookingPathwayHeader: React.FC<BookingPathwayHeaderProps> = ({
  icon: Icon,
  title,
  theme,
}) => {
  return (
    <h2 className={styles.header} data-theme={theme}>
      <Icon className={styles.icon} />
      {title}
    </h2>
  );
};
