import axios, { AxiosResponse } from "axios";
import { ICoin } from "../store/reducers/CoinsReducer";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets'

export const requestCoins = async (ids ='', per_page = 100): Promise<AxiosResponse<ICoin[]>> => {
  const response = await axios.get<ICoin[]>(
    BASE_URL,
    {
      params: {
        vs_currency: 'usd',
        ids,
        order: 'market_cap_desc',
        per_page,
        page: '1',
        price_change_percentage: '24h,7d',
        sparkline: 'false',
      },
    },
  );

  return response
};