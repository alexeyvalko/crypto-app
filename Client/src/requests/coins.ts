import axios, { AxiosResponse } from 'axios';
import { ICoin } from '../types/coins';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

export const requestCoins = async (
  ids = '',
  per_page = 100,
): Promise<AxiosResponse<ICoin[]>> => {
  const response = await axios.get<ICoin[]>(`${BASE_URL}/markets`, {
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


export const requestChartData = async (coinId: string, days: number): Promise<AxiosResponse<[number[]]>> => {
  const response = await axios.get<[number[]]>(`${BASE_URL}/${coinId}/ohlc`, {
    params: {
      vs_currency: 'usd',
      days,
    },
  });

  return response
}