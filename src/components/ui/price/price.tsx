import { FC } from 'react';

import { cn } from '@/utils';
import { getFixedPrice } from '@/utils/get-fixed-price';

type PriceProps = {
  price: number | string;
  currency?: string;
  className?: string;
};

export const Price: FC<PriceProps> = ({ price, className, currency = '$' }) => {
  const fixedPriceObj = getFixedPrice(Number(price) || 0);
  const isShouldTruncatePrice = fixedPriceObj.digitZeros >= 3;

  if (isShouldTruncatePrice) {
    const number = fixedPriceObj.price.slice(fixedPriceObj.digitZeros - fixedPriceObj.price.split('.')[1].length);

    return (
      <span title={fixedPriceObj.price} className={cn(className)}>
        {`${currency}0.0`}
        <sub>{fixedPriceObj.digitZeros}</sub>
        {number}
      </span>
    );
  }

  return <span className={cn(className)}>{`${currency}${fixedPriceObj.price}`}</span>;
};
