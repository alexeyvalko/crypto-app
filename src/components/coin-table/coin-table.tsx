import { useQuery } from '@tanstack/react-query';

import { Section } from '../section';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui';
import { CoinImage } from '../ui/coin-image';
import { Price } from '../ui/price';
import { PriceChange } from '../ui/price-change';

import { CustomTableCell } from './custom-table-cell';

import { getCoinList } from '@/api/coingecko-api';

export const CoinTable = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['topCoins'],
    queryFn: () =>
      getCoinList({ vs_currency: 'usd', per_page: 10, page: 1, price_change_percentage: '1h,24h,7d', sparkline: true }),
  });

  return (
    <Section className="mt-8 md:px-6" titleClassName="ml-2 md:ml-6 mb-5" title="💰 Top 10 coins">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[280px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1h</TableHead>
            <TableHead>24h</TableHead>
            <TableHead>7d</TableHead>
            <TableHead>24h volume</TableHead>
            <TableHead>Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(
            ({
              id,
              name,
              image,
              symbol,
              market_cap_rank,
              current_price,
              total_volume,
              market_cap,
              price_change_percentage_1h_in_currency,
              price_change_percentage_24h_in_currency,
              price_change_percentage_7d_in_currency,
            }) => (
              <TableRow key={id}>
                <CustomTableCell className="font-medium" isLoading={isLoading}>
                  <div className="flex gap-2 items-center">
                    <span>{market_cap_rank}.</span>
                    <CoinImage src={image} alt={name} className="w-5 h-5" />
                    <span>{name}</span>
                    <span className="uppercase text-gray-400">{symbol}</span>
                  </div>
                </CustomTableCell>
                <CustomTableCell isLoading={isLoading}>
                  <Price price={current_price} />
                </CustomTableCell>
                <CustomTableCell isLoading={isLoading}>
                  <PriceChange percentage={price_change_percentage_1h_in_currency} />
                </CustomTableCell>
                <CustomTableCell isLoading={isLoading}>
                  <PriceChange percentage={price_change_percentage_24h_in_currency} />
                </CustomTableCell>
                <CustomTableCell isLoading={isLoading}>
                  <PriceChange percentage={price_change_percentage_7d_in_currency} />
                </CustomTableCell>
                <CustomTableCell isLoading={isLoading}>
                  <Price price={total_volume} />
                </CustomTableCell>
                <CustomTableCell isLoading={isLoading}>
                  <Price price={market_cap} />
                </CustomTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Section>
  );
};