import * as styles from './PageHeader.module.css';
import type { PageHeaderProps } from './PageHeaderProps';

/**
 * PageHeader component displays a page title with optional subtitle.
 *
 * The component renders a primary heading (H1) for the title and an optional
 * subtitle (H3 on desktop, standard text on mobile) below it. It supports
 * light and dark themes.
 *
 * @param   {PageHeaderProps}      props            - The component props
 * @param   {string}               props.title      - REQUIRED: The page title displayed as H1
 * @param   {string}               [props.subtitle] - OPTIONAL: The subtitle displayed below the title
 * @param   {UserInterfaceTheme}   [props.theme]    - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                           The rendered page header component
 */
export const PageHeader = ({ title, subtitle, theme }: PageHeaderProps) => {
  return (
    <header
      className={theme ? `${styles.header} ${styles[theme]}` : styles.header}
      data-theme={theme}
    >
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    </header>
  );
};
