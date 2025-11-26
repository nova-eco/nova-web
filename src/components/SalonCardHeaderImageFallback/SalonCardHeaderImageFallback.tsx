import * as styles from './SalonCardHeaderImageFallback.module.css';
import type { SalonCardHeaderImageFallbackProps } from './SalonCardHeaderImageFallbackProps';

/**
 * SalonCardHeaderImageFallback component displays the first letter of a salon name.
 *
 * The component extracts and displays the first character of the salon name in uppercase
 * as a fallback when no salon images or maps are available.
 *
 * @param   {SalonCardHeaderImageFallbackProps}  props            - The component props
 *
 * @param   {string}                             props.salonName  - REQUIRED: Name of the salon to extract first initial from
 *
 * @returns {JSX.Element}                                         The rendered fallback component with initial
 */
export const SalonCardHeaderImageFallback = ({
  salonName,
}: SalonCardHeaderImageFallbackProps) => {
  const initial = salonName.charAt(0).toUpperCase();

  return (
    <div className={styles.fallback}>
      <span className={styles.fallbackText}>{initial}</span>
    </div>
  );
};
