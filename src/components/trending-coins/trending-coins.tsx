import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Section } from '../section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui';

import { CoinCard } from './coin-card';
import { SkeletonCard } from './skeleton-card';

import { getTrendingList } from '@/api/coingecko-api';

export const TrendingCoins = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['trendingList'],
    queryFn: getTrendingList,
  });

  const skeletonCards = useMemo(() => new Array(4).fill(0).map((_, index) => index), []);

  return (
    <Section className="mt-6" titleClassName="ml-2 md:ml-12 mb-5" title="🔥 Trending coins">
      <Carousel className="px-2 md:px-12">
        <CarouselPrevious className="hidden md:flex left-0" />

        <CarouselContent>
          {isLoading &&
            skeletonCards.map((key) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={key}>
                <SkeletonCard />
              </CarouselItem>
            ))}
          {!isLoading &&
            data?.coins.map(
              ({
                item: {
                  name,
                  thumb,
                  data: { price, price_change_percentage_24h, sparkline },
                },
              }) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={name}>
                  <CoinCard
                    name={name}
                    percentage={price_change_percentage_24h.usd}
                    price={price}
                    sparkline={sparkline}
                    thumb={thumb}
                  />
                </CarouselItem>
              )
            )}
        </CarouselContent>

        <CarouselNext className="hidden md:flex right-0" />
      </Carousel>
    </Section>
  );
};
