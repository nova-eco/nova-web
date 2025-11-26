import { ArrowRight } from 'lucide-react';
import React from 'react';
import FormattedPrice from '@app/components/FormattedPrice';
import * as styles from './PaymentSalon.module.css';
import { PaymentSalonProps } from './PaymentSalonProps';

/**
 * PaymentSalon component displays the pay at salon option.
 *
 * @param   {PaymentSalonProps}     props                - The component props
 * @param   {number}                props.price          - The full price amount
 * @param   {string}                props.currencySymbol - The currency symbol
 * @param   {boolean}               props.isSelected     - Whether this option is selected
 * @param   {function}              props.onSelect       - Callback function when option is selected
 * @param   {UserInterfaceTheme}    [props.theme]        - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                                The rendered payment salon option component
 */
export const PaymentSalon: React.FC<PaymentSalonProps> = ({
  price,
  currencySymbol,
  isSelected,
  onSelect,
  theme,
}) => {
  return (
    <div
      className={`${styles.optionCard} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
      data-theme={theme}
    >
      <div className={styles.optionHeader}>
        <ArrowRight className={styles.optionIcon} />
        <span className={styles.optionName}>Pay at Salon</span>
        <span className={styles.optionPrice}>
          <FormattedPrice currencySymbol={currencySymbol} price={price} />
        </span>
      </div>
      <p className={styles.optionDescription}>
        Complete payment when you arrive at the salon
      </p>
    </div>
  );
};
