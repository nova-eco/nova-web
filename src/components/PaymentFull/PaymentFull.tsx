import { DollarSign } from 'lucide-react';
import React from 'react';
import FormattedPrice from '@app/components/FormattedPrice';
import * as styles from './PaymentFull.module.css';
import { PaymentFullProps } from './PaymentFullProps';

/**
 * PaymentFull component displays the full payment option.
 *
 * @param   {PaymentFullProps}      props                - The component props
 * @param   {number}                props.price          - The full price amount
 * @param   {string}                props.currencySymbol - The currency symbol
 * @param   {boolean}               props.isSelected     - Whether this option is selected
 * @param   {function}              props.onSelect       - Callback function when option is selected
 * @param   {UserInterfaceTheme}    [props.theme]        - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                                The rendered payment full option component
 */
export const PaymentFull: React.FC<PaymentFullProps> = ({
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
        <DollarSign className={styles.optionIcon} />
        <span className={styles.optionName}>Pay Full Amount</span>
        <span className={styles.optionPrice}>
          <FormattedPrice currencySymbol={currencySymbol} price={price} />
        </span>
      </div>
      <p className={styles.optionDescription}>
        Complete payment now for your appointment
      </p>
    </div>
  );
};
