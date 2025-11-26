import { ArrowLeft } from 'lucide-react';
import React from 'react';
import * as styles from './BackButton.module.css';
import { BackButtonProps } from './BackButtonProps';

/**
 * BackButton component provides navigation to go back to the previous step.
 *
 * @param   {BackButtonProps}       props         - The component props
 * @param   {function}              props.onBack  - Callback function when button is clicked
 * @param   {UserInterfaceTheme}    [props.theme] - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                         The rendered back button component
 */
export const BackButton: React.FC<BackButtonProps> = ({ onBack, theme }) => {
  return (
    <button className={styles.button} onClick={onBack} data-theme={theme}>
      <ArrowLeft size={20} />
      Back
    </button>
  );
};
