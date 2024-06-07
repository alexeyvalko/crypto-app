import { useSuspenseQuery } from '@tanstack/react-query';
import parse, { DOMNode } from 'html-react-parser';
import { Star } from 'lucide-react';

import { Chart } from '@/components/chart';
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { CoinImage } from '@/components/ui/coin-image';
import { Price } from '@/components/ui/price';
import { PriceChange } from '@/components/ui/price-change';
import { Section } from '@/components/ui/section';
import { useToast } from '@/components/ui/toast';
import { TooltipComponent } from '@/components/ui/tooltip';

import { cn } from '@/utils';
import { isDomElement } from '@/utils/is-dom-element';

import { coinQueryOptions } from './coin-query-options';
import { List } from './list';
import { getCoinHistoryInfo, getCoinLinks, getMainCoinInfo } from './utils';

import { useFavoriteCoinList } from '@/hooks/useFavoriteCoinList';
import { usePageTitle } from '@/hooks/usePageTitile';
import { Route } from '@/routes/coins.$coinId';

export const CoinPage = () => {
  const { coinId } = Route.useParams();
  const { toast } = useToast();
  const { data } = useSuspenseQuery(coinQueryOptions(coinId)) ?? {};
  const { isFavorite, setIsFavorite } = useFavoriteCoinList(coinId);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      toast({
        title: 'Added to favorites',
        description: `${data?.name ?? coinId} has been added to your favorites`,
      });
    }
  };

  usePageTitle(`${data.name ?? coinId}`);

  if (!data) {
    return null;
  }

  const mainCoinInfo = getMainCoinInfo(data);
  const historyCoinInfo = getCoinHistoryInfo(data);
  const linksCoinInfo = getCoinLinks(data);

  return (
    <Section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="col-span-full">
        <CardHeader className={cn('flex flex-row items-start justify-between gap-2 pb-2')}>
          <div className={cn('flex flex-row items-start gap-2 flex-wrap')}>
            <CoinImage src={data.image.large} alt={data.name} className="w-10 h-10 md:w-14 md:h-14" />
            <CardTitle className="text-lg md:text-3xl inline mt-2"> {data.name}</CardTitle>
            <span className="uppercase text-xs md:text-sm text-gray-400">{data.symbol}</span>
            {!!data.market_cap_rank && (
              <Badge variant="outline" className="text-xs md:text-sm ">
                {`#${data.market_cap_rank}`}
              </Badge>
            )}
          </div>
          <TooltipComponent content="Add to watchlist">
            <Button
              variant="ghost"
              size="icon"
              className="bg-card text-card-foreground shadow-sm"
              onClick={handleAddToFavorites}
            >
              <Star
                fill={isFavorite ? 'rgb(250 204 21)' : 'transparent'}
                color={isFavorite ? 'rgb(250 204 21)' : 'currentColor'}
              />
              <span className="sr-only">Add to watchlist</span>
            </Button>
          </TooltipComponent>
        </CardHeader>
        <CardContent>
          <Price price={data.market_data.current_price.usd} className="text-2xl md:text-4xl font-bold pr-2" />
          <PriceChange
            className="font-semibold text-xs md:text-base"
            priceChangeValue={data.market_data.price_change_24h_in_currency?.usd ?? ''}
            percentage={data.market_data.price_change_percentage_24h_in_currency?.usd ?? ''}
          />

          <Chart className="mt-4" />
        </CardContent>
      </Card>
      <List data={mainCoinInfo} type="value" className="col-span-full md:col-span-1" />
      <List data={historyCoinInfo} type="value" className="col-span-full md:col-span-1" />
      <List data={linksCoinInfo} type="links" className="col-span-full lg:col-span-1" />
      {data.description.en && (
        <Card className="col-span-full">
          <CardHeader className={cn('flex flex-row items-start gap-2 pb-2')}>
            <CardTitle className="text-3xl inline mt-0">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">
              {parse(data.description.en, {
                replace(domNode: DOMNode) {
                  if (isDomElement(domNode) && domNode.name === 'a') {
                    domNode.attribs = {
                      href: domNode.attribs.href,
                      className: 'text-blue-500',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    };
                  }

                  return domNode;
                },
              })}
            </p>
          </CardContent>
        </Card>
      )}
    </Section>
  );
};
