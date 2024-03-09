const MAX_DIGITS = 4;

export const getFixedPrice = (price: number) => {
  const stringPrice = price.toLocaleString('fullwide', { useGrouping: true, maximumSignificantDigits: 21 });
  const digits = stringPrice.split('.')[1];
  const isManyDigits = digits?.length >= MAX_DIGITS;
  const digitZeros = digits ? digits.split('0').findIndex((number) => !!number) : 0;
  const fixedPrice = isManyDigits ? price.toFixed(digitZeros + MAX_DIGITS) : price.toLocaleString();
  const priceWithoutLastZeros = isManyDigits ? fixedPrice.replace(/0+$/, '').replace(/\.$/, '') : fixedPrice;

  return {
    price: priceWithoutLastZeros,
    digitZeros,
  };
};
