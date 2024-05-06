import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';

import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui';
import { CoinImage } from '../ui/coin-image';
import { Price } from '../ui/price';
import { PriceChange } from '../ui/price-change';
import { Section } from '../ui/section';

import { CustomTableCell } from './custom-table-cell';

import { getCoinList } from '@/api/coingecko-api';

const PER_PAGE = 10;

export const CoinTable = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['topCoins'],
    queryFn: () =>
      getCoinList({ vs_currency: 'usd', per_page: PER_PAGE, page: 1, price_change_percentage: '1h,24h,7d' }),
  });

  const dataToRender = isLoading ? new Array(PER_PAGE).fill({}) : data;

  return (
    <Section title="💰 Top 10 coins" isLoading={isLoading}>
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
          {dataToRender?.map(
            (
              {
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
              },
              index
            ) => (
              <TableRow key={id ?? `${index}_skeleton_key`}>
                <CustomTableCell isLoading={isLoading}>
                  <Link to={`/coins/$coinId`} params={{ coinId: id }} className="font-medium">
                    <div className="flex gap-2 items-center">
                      <span>{market_cap_rank}.</span>
                      <CoinImage src={image} alt={name} className="w-5 h-5" />
                      <span>{name}</span>
                      <span className="uppercase text-gray-400">{symbol}</span>
                    </div>
                  </Link>
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
