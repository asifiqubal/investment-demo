export const getCurrencySymbol = (region: string) => {
  switch (region) {
    case 'GB':
      return '£';
    case 'US':
    default:
      return '$';
  }
};
export const formattedDecimal = (value: number) => {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }
  return value > 0 ? '.' + value.toString() : '';
};
export const formatEuroCurrency = (amount: number, region: string) => {
  if (typeof amount !== 'number') {
    throw new Error('Amount must be a number');
  }

  const formattedAmount = amount.toFixed(2);

  const [wholePart, decimalPart] = formattedAmount.split('.');

  const wholePartWithSeparator = wholePart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );

  const formattedCurrency = [
    getCurrencySymbol(region),
    wholePartWithSeparator,
    formattedDecimal(parseInt(decimalPart, 10)),
  ].join('');

  return formattedCurrency;
};

export const formatCurrencyToShort = (value: number) => {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number');
  }
  if (value < 1e3) {
    return value;
  }
  const divider = value >= 1e9 ? 1e9 : value >= 1e6 ? 1e6 : 1e3;
  const symbol = value >= 1e9 ? 'B' : value >= 1e6 ? 'M' : 'K';
  const [wholePart, decimalPart] = (value / divider).toFixed(2).split('.');
  const formattedCurrency = [
    wholePart,
    formattedDecimal(parseInt(decimalPart, 10)),
    symbol,
  ].join('');

  return formattedCurrency;
};
