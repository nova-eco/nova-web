export interface ServicePrice {
  id: string;
  currencyId: string;
  serviceId: string;
  servicePriceTypeId: string;
  majorUnitPriceValue: number;
  minorUnitPriceValue: number;
}
