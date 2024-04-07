import { useSuspenseQuery } from '@tanstack/react-query';
import parse, { DOMNode } from 'html-react-parser';

import { Chart } from '@/components/chart';
import { Section } from '@/components/section';
import { Badge, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { CoinImage } from '@/components/ui/coin-image';
import { Price } from '@/components/ui/price';
import { PriceChange } from '@/components/ui/price-change';

import { cn } from '@/utils';
import { isDomElement } from '@/utils/is-dom-element';

import { coinQueryOptions } from './coin-query-options';
import { CoinInfoType } from './constat';
import { ListItem } from './list-item';

import { Route } from '@/routes/coins.$coinId';

export const CoinPage = () => {
  const { coinId } = Route.useParams();
  const { data } = useSuspenseQuery(coinQueryOptions(coinId)) ?? {};

  if (!data) {
    return null;
  }
  const mainCoinInfo = [
    {
      label: 'Market Cap',
      value: [data.market_data.market_cap.usd ?? ''],
      type: CoinInfoType.PRICE,
    },
    {
      label: '24 Hour Trading Vol',
      value: [data.market_data.total_volume?.usd ?? ''],
      type: CoinInfoType.PRICE,
    },
    {
      label: 'Circulating Supply',
      value: [data.market_data.circulating_supply ?? ''],
      type: CoinInfoType.NUMBER,
    },
    {
      label: 'Total Supply',
      value: [data.market_data.total_supply ?? ''],
      type: CoinInfoType.NUMBER,
    },
    {
      label: 'Max Supply',
      value: [data.market_data.max_supply ?? ''],
      type: CoinInfoType.NUMBER,
    },
  ];

  const historyCoinInfo = [
    {
      label: '24h Range',
      value: [data.market_data.low_24h?.usd ?? '', data.market_data.high_24h?.usd ?? ''],
      type: CoinInfoType.PRICE,
    },
    {
      label: 'All-Time High',
      value: [data.market_data.ath?.usd ?? ''],
      type: CoinInfoType.PRICE,
    },
    {
      label: 'All-Time Low',
      value: [data.market_data.atl?.usd ?? ''],
      type: CoinInfoType.PRICE,
    },
  ];

  const linksCoinInfo = [
    {
      label: 'Website',
      links: data.links.homepage,
      type: CoinInfoType.LINKS,
    },
    {
      label: 'Source Code',
      links: data.links.repos_url?.github,
      type: CoinInfoType.LINKS,
    },
    {
      label: 'Reddit',
      links: [data.links.subreddit_url],
      type: CoinInfoType.LINKS,
    },
    {
      label: 'Whitepaper',
      links: [data.links.whitepaper],
      type: CoinInfoType.LINKS,
    },
    {
      label: 'Telegram',
      links: [data.links.telegram_channel_identifier && `https://t.me/${data.links.telegram_channel_identifier}`],
      type: CoinInfoType.LINKS,
    },
  ];

  return (
    <Section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="col-span-full">
        <CardHeader className={cn('flex flex-row items-start gap-2 pb-2')}>
          <CoinImage src={data.image.large} alt={data.name} className="w-14 h-14" />
          <CardTitle className="text-3xl inline mt-0"> {data.name}</CardTitle>
          <span className="uppercase text-gray-400">{data.symbol}</span>
          {!!data.market_cap_rank && (
            <Badge variant="secondary" className="text-sm">
              {`#${data.market_cap_rank}`}
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          <Price price={data.market_data.current_price.usd} className="text-4xl font-bold pr-2" />
          <PriceChange
            className="font-semibold"
            priceChangeValue={data.market_data.price_change_24h_in_currency?.usd ?? ''}
            percentage={data.market_data.price_change_percentage_24h_in_currency?.usd ?? ''}
          />

          <Chart className="mt-4" />
        </CardContent>
      </Card>

      <Card className="col-span-full md:col-span-1">
        <CardContent>
          <div className="grid grid-cols-3 justify-between gap-2 mt-8 width-full">
            {mainCoinInfo.map(
              (props) => props.value?.some((value) => value) && <ListItem key={props.label} {...props} />
            )}
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-full md:col-span-1">
        <CardContent>
          <div className="grid grid-cols-3 justify-between gap-2 mt-8 width-full">
            {historyCoinInfo.map(
              (props) => props.value?.some((value) => value) && <ListItem key={props.label} {...props} />
            )}
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-full lg:col-span-1">
        <CardContent>
          <div className="grid grid-cols-3 justify-between gap-2 mt-8 width-full">
            {linksCoinInfo.map(
              (props) => props?.links?.some((value) => value) && <ListItem key={props.label} {...props} />
            )}
          </div>
        </CardContent>
      </Card>

      {data.description.en && (
        <Card className="col-span-full">
          <CardHeader className={cn('flex flex-row items-start gap-2 pb-2')}>
            <CardTitle className="text-3xl inline mt-0">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
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
