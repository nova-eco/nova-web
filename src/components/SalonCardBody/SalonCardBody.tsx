import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import * as styles from './SalonCardBody.module.css';
import type { SalonCardBodyProps } from './SalonCardBodyProps';

/**
 * SalonCardBody component displays salon summary text with expandable description.
 *
 * The component initially shows the salon summary with a chevron down icon.
 * When clicked, it smoothly transitions to show the full description with a chevron up icon.
 * The container maintains a fixed height regardless of content length.
 *
 * @param   {SalonCardBodyProps}  props        - The component props
 *
 * @param   {Salon}               props.salon  - REQUIRED: Salon object containing summary and description
 * @param   {UserInterfaceTheme}  [props.theme] - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                      The rendered salon card body component
 */
export const SalonCardBody = ({ salon, theme }: SalonCardBodyProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={theme ? `${styles.container} ${styles[theme]}` : styles.container}
      data-theme={theme}
    >
      <div className={styles.textContainer}>
        <p className={`${styles.text} ${isExpanded ? styles.fadeOut : styles.fadeIn}`}>
          {isExpanded ? salon.description : salon.summary}
        </p>
      </div>
      <button
        className={styles.toggleButton}
        onClick={handleToggle}
        aria-label={isExpanded ? 'Show less' : 'Show more'}
      >
        {isExpanded ? (
          <ChevronUp className={styles.icon} />
        ) : (
          <ChevronDown className={styles.icon} />
        )}
      </button>
    </div>
  );
};
