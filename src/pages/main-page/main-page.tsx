import { CoinTable } from '@/components/coin-table';
import { News } from '@/components/news';
import { TrendingCoins } from '@/components/trending-coins';

import { useFavoriteCoinList } from '@/hooks/useFavoriteCoinList';

export const MainPage = () => {
  const { coinList } = useFavoriteCoinList();
  return (
    <>
      <TrendingCoins />
      <News />
      {!!coinList.length && <CoinTable tableTitle="⭐ My favorite coins" coinIds={coinList} queryKey="favorites" />}
      <CoinTable tableTitle="💰 Top 10 coins" queryKey="topCoins" />
    </>
  );
};
