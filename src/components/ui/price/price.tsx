import { FC } from 'react';

import { getFixedPrice } from '@/utils/get-fixed-price';

type PriceProps = {
  price: number;
  currency?: string;
};

export const Price: FC<PriceProps> = ({ price, currency = '$' }) => {
  const fixedPriceObj = getFixedPrice(price);
  const isShouldTruncatePrice = fixedPriceObj.digitZeros >= 3;

  if (isShouldTruncatePrice) {
    const number = fixedPriceObj.price.slice(fixedPriceObj.digitZeros - fixedPriceObj.price.split('.')[1].length);

    return (
      <span title={fixedPriceObj.price}>
        {`${currency}0.0`}
        <sub>{fixedPriceObj.digitZeros}</sub>
        {number}
      </span>
    );
  }

  return <span>{`${currency}${fixedPriceObj.price}`}</span>;
};
