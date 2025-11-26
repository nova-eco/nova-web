/**
 * Format a price with the appropriate currency symbol
 */
export const formatPrice = (price: number, currencySymbol: string): string => {
  return `${currencySymbol}${price.toFixed(2)}`;
};
