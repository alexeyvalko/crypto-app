import { FC } from 'react';
import { Link } from '@tanstack/react-router';

import { cn } from '@/utils';

import { Sparkline } from '../sparkline';
import { Card, CardContent, CardHeader, CardTitle } from '../ui';
import { CoinImage } from '../ui/coin-image';
import { Price } from '../ui/price';
import { PriceChange } from '../ui/price-change';

type CardProps = {
  coinId: string;
  name: string;
  sparkline: string;
  thumb: string;
  price: number;
  percentage: number;
};

export const CoinCard: FC<CardProps> = ({ name, price, sparkline, thumb, percentage, coinId }) => {
  return (
    <Card>
      <Link to={`/coins/$coinId`} params={{ coinId }}>
        <CardHeader className={cn('flex flex-row items-start gap-2 pb-2')}>
          <CoinImage src={thumb} alt={name} className="w-10 h-10" width={40} height={40} />
          <CardTitle className="text-lg inline mt-0">{name}</CardTitle>
        </CardHeader>
        <CardContent className={cn('flex justify-between gap-6')}>
          <div className={cn('flex flex-col')}>
            <Price price={price} />
            <PriceChange percentage={percentage} />
          </div>
          <Sparkline alt={name} src={sparkline} />
        </CardContent>
      </Link>
    </Card>
  );
};
