import { queryOptions } from '@tanstack/react-query';

import { getCoinData } from '@/api/coingecko-api';
import { REFRESH_INFO_INTERVAL } from '@/config';
import { CoinQueryType } from '@/types/coingecko';

export const coinQueryOptions = (coinId: string, queryObj?: CoinQueryType) =>
  queryOptions({
    queryKey: ['coins', { coinId }],
    queryFn: () => getCoinData(coinId, queryObj),
    placeholderData: (data) => data,
    refetchInterval: REFRESH_INFO_INTERVAL,
  });
