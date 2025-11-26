import React from 'react';
import { FormattedPriceProps } from './FormattedPriceProps';

/**
 * The FormattedPrice component formats a price with a currencySymbol.
 *
 * @param   {FormattedPriceProps}   props                - The component props
 * @param   {number}                props.price          - The full price amount
 * @param   {string}                props.currencySymbol - The currency symbol
 */
export const FormattedPrice: React.FC<FormattedPriceProps> = (props) => {
  const { currencySymbol, price } = props;

  return `${currencySymbol}${price.toFixed(2)}`;
};
