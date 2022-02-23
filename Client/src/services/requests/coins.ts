import axios, { AxiosResponse } from 'axios';
import { COIN_API_URL } from '../../common/config';
import { DaysType } from '../../components/Coin/chartButtons';
import { ICoin } from '../../types/coins';

export const requestCoins = async (
  ids = '',
  per_page = 100,
): Promise<AxiosResponse<ICoin[]>> => {
  const response = await axios.get<ICoin[]>(`${COIN_API_URL}/markets`, {
    params: {
      vs_currency: 'usd',
      ids,
      order: 'market_cap_desc',
      per_page,
      page: '1',
      price_change_percentage: '24h,7d',
      sparkline: 'true',
    },
  });

  return response;
};

export const requestChartData = async (
  coinId: string,
  days: DaysType,
): Promise<AxiosResponse<[number[]]>> => {
  const response = await axios.get<[number[]]>(
    `${COIN_API_URL}/${coinId}/ohlc`,
    {
      params: {
        vs_currency: 'usd',
        days,
      },
    },
  );

  return response;
};
