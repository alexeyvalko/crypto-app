import { useCallback, useMemo } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useFavoriteCoinList = (coinId?: string) => {
  const [coinList, setCoinList] = useLocalStorage<string[]>({
    key: 'favoriteCoinList',
    initialValue: [],
  });
  const isFavorite = useMemo(() => (coinId ? coinList.includes(coinId) : false), [coinId, coinList]);

  const setIsFavorite = useCallback(
    (isFavorite: boolean) => {
      if (!coinId) return;

      if (isFavorite) {
        setCoinList((prev) => [...prev, coinId]);
      } else {
        setCoinList((prev) => prev.filter((id) => id !== coinId));
      }
    },
    [coinId, setCoinList]
  );

  return {
    isFavorite,
    coinList,
    setIsFavorite,
  };
};
