import { CreditCard } from 'lucide-react';
import React from 'react';
import FormattedPrice from '@app/components/FormattedPrice';
import * as styles from './PaymentDeposit.module.css';
import { PaymentDepositProps } from './PaymentDepositProps';

/**
 * PaymentDeposit component displays the deposit payment option.
 *
 * @param   {PaymentDepositProps}   props                  - The component props
 * @param   {number}                props.depositAmount    - The deposit amount to pay now
 * @param   {number}                props.remainingAmount  - The remaining amount to pay at salon
 * @param   {string}                props.currencySymbol   - The currency symbol
 * @param   {boolean}               props.isSelected       - Whether this option is selected
 * @param   {function}              props.onSelect         - Callback function when option is selected
 * @param   {UserInterfaceTheme}    [props.theme]          - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                                  The rendered payment deposit option component
 */
export const PaymentDeposit: React.FC<PaymentDepositProps> = ({
  depositAmount,
  remainingAmount,
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
        <CreditCard className={styles.optionIcon} />
        <span className={styles.optionName}>Pay Deposit</span>
        <span className={styles.optionPrice}>
          <FormattedPrice currencySymbol={currencySymbol} price={depositAmount} />
        </span>
      </div>
      <p className={styles.optionDescription}>
        Pay a deposit now, remaining{' '}
        <FormattedPrice currencySymbol={currencySymbol} price={remainingAmount} /> at
        salon
      </p>
    </div>
  );
};
