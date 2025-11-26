import SalonCard from '@app/components/SalonCard';
import * as styles from './SalonCardGroup.module.css';
import type { SalonCardGroupProps } from './SalonCardGroupProps';

/**
 * SalonCardGroup component displays a responsive grid of salon cards.
 *
 * The component renders a SalonCard for each salon in the provided array, displaying them
 * in a responsive grid layout with a maximum of four cards per row. The grid adapts to
 * different screen sizes (mobile, tablet, desktop) while maintaining equal spacing.
 *
 * @param   {SalonCardGroupProps}  props         - The component props
 *
 * @param   {Salon[]}              props.salons  - REQUIRED: Array of salon objects to display as cards
 * @param   {UserInterfaceTheme}   [props.theme] - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                        The rendered salon card group component
 */
export const SalonCardGroup = ({ salons, theme }: SalonCardGroupProps) => {
  return (
    <div
      className={theme ? `${styles.container} ${styles[theme]}` : styles.container}
      data-theme={theme}
    >
      {salons.map((salon) => (
        <SalonCard key={salon.id} salon={salon} />
      ))}
    </div>
  );
};
