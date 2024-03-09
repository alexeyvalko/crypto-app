import { FC } from 'react';

import { cn } from '@/utils';

import { Sparkline } from '../sparkline';
import { Card, CardContent, CardHeader, CardTitle } from '../ui';
import { CoinImage } from '../ui/coin-image';
import { Price } from '../ui/price';
import { PriceChange } from '../ui/price-change';

type CardProps = {
  name: string;
  sparkline: string;
  thumb: string;
  price: number;
  percentage: number;
};

export const CoinCard: FC<CardProps> = ({ name, price, sparkline, thumb, percentage }) => {
  return (
    <Card>
      <CardHeader className={cn('flex flex-row items-start gap-2 pb-2')}>
        <CoinImage src={thumb} alt={name} className="w-10 h-10" width={40} height={40} />
        <CardTitle className="text-lg inline mt-0">{name}</CardTitle>
      </CardHeader>
      <CardContent className={cn('flex justify-between gap-6')}>
        <div className={cn('flex flex-col')}>
          <Price price={price} />
          <PriceChange percentage={percentage} />
        </div>
        <Sparkline alt={name} src={sparkline} width={135} />
      </CardContent>
    </Card>
  );
};
