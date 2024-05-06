import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui';
import { Section } from '../ui/section';

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
    <Section title="🔥 Trending coins" isLoading={isLoading}>
      <Carousel
        className="group px-2"
        opts={{
          slidesToScroll: 2,
          breakpoints: {
            '(max-width: 768px)': { dragThreshold: 220, slidesToScroll: 1 },
          },
        }}
      >
        <CarouselPrevious className="opacity-0 disabled:opacity-0 left-5 z-50 md:group-hover:flex md:group-hover:opacity-100 transition-opacity " />

        <CarouselContent>
          {isLoading &&
            skeletonCards?.map((key) => (
              <CarouselItem className="max-w-[380px] md:basis-1/2 lg:basis-1/4" key={key}>
                <SkeletonCard />
              </CarouselItem>
            ))}
          {!isLoading &&
            data?.coins.map(
              ({
                item: {
                  id,
                  name,
                  thumb,
                  data: { price, price_change_percentage_24h, sparkline },
                },
              }) => (
                <CarouselItem className="max-w-[380px] md:max-w-[340px] md:basis-1/2 lg:basis-1/4" key={name}>
                  <CoinCard
                    coinId={id}
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

        <CarouselNext className="opacity-0 disabled:opacity-0 right-5 z-50 md:group-hover:flex md:group-hover:opacity-100 transition-opacity" />
      </Carousel>
    </Section>
  );
};
