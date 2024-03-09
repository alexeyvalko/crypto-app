import { CoinTable } from '@/components/coin-table';
import { TrendingCoins } from '@/components/trending-coins';

export const MainPage = () => {
  return (
    <>
      <TrendingCoins />
      <CoinTable />
    </>
  );
};
