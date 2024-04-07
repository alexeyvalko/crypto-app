const MAX_DIGITS = 4;

export const getFixedPrice = (price: number) => {
  const stringPrice = price.toLocaleString('en-US', { useGrouping: true, maximumSignificantDigits: 21 });
  const digits = stringPrice.split('.')[1];
  const isManyDigits = digits?.length >= MAX_DIGITS;
  8974;
  const digitZeros = digits ? digits.split('0').findIndex((number) => !!number) : 0;
  const fixedPrice = isManyDigits ? price.toFixed(digitZeros + MAX_DIGITS) : price.toLocaleString();
  const priceWithoutLastZeros = isManyDigits ? fixedPrice.replace(/0+$/, '').replace(/\.$/, '') : fixedPrice;
  const decimals = priceWithoutLastZeros.split('.')[1]?.length ?? 0;
  const minMove = decimals > 2 ? Number(`0.${'0'.repeat(decimals - 1)}1`) : 0.001;

  return {
    price: priceWithoutLastZeros,
    minMove,
    decimals,
    digitZeros,
  };
};
