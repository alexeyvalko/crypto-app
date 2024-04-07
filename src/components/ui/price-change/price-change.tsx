import { FC } from 'react';

import { cn } from '@/utils';

import { Price } from '../price/price';

type PriceChangeProps = {
  percentage?: number;
  priceChangeValue?: number;
  className?: string;
};

export const PriceChange: FC<PriceChangeProps> = ({ priceChangeValue, className, percentage = 0 }) => {
  const isDown = percentage < 0;
  const color = isDown ? 'text-red-500' : 'text-lime-500';

  if (priceChangeValue) {
    return (
      <span className={cn(color, className)}>
        <Price price={priceChangeValue} currency="" />
        {!!percentage && ` (${percentage.toFixed(2)}%)`}
      </span>
    );
  }

  return !!percentage && <span className={cn(color, className)}>{`${percentage.toFixed(2)}%`}</span>;
};
