import axios, { AxiosResponse } from "axios";
import { ICoin } from "../store/reducers/CoinsReducer";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets'

export const requestCoins = async (): Promise<AxiosResponse<ICoin[]>> => {
  const response = await axios.get<ICoin[]>(
    BASE_URL,
    {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,litecoin,the-open-network,ethereum',
        order: 'market_cap_desc',
        per_page: '50',
        page: '1',
        price_change_percentage: '24h',
        sparkline: 'false',
      },
    },
  );

  return response
};