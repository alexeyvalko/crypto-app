import { CoinTable } from '@/components/coin-table';
import { News } from '@/components/news';
import { TrendingCoins } from '@/components/trending-coins';

export const MainPage = () => {
  return (
    <>
      <TrendingCoins />
      <News />
      <CoinTable />
    </>
  );
};
