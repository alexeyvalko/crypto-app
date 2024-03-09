import { FC } from 'react';

type PriceChangeProps = {
  percentage?: number;
};

export const PriceChange: FC<PriceChangeProps> = ({ percentage = 0 }) => {
  const isDown = percentage < 0;
  const color = isDown ? 'text-red-600' : 'text-lime-600';

  return <span className={color}>{`${percentage.toFixed(2)}%`}</span>;
};
