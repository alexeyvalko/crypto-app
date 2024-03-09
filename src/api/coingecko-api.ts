import { apiCall } from '../utils/api-call';
import { createQueryString } from '../utils/crate-query-string';

import { COIN_GECKO_API_TOKEN } from '@/config';
import {
  CoinGeckoResponse,
  CoinListQueryType,
  CoinListResponse,
  CoinQueryType,
  SearchResponse,
  TrendingListResponse,
} from '@/types/coingecko';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const FETCH_OPTIONS = { method: 'GET', headers: { 'x-cg-demo-api-key': COIN_GECKO_API_TOKEN } };

export const getTrendingList = async () => {
  return await apiCall<TrendingListResponse>(`${BASE_URL}/search/trending`, FETCH_OPTIONS);
};
export const search = async (searchQuery: string) => {
  return await apiCall<SearchResponse>(`${BASE_URL}/search?query=${searchQuery}`, FETCH_OPTIONS);
};
export const getCoinList = async (queryObj: CoinListQueryType) => {
  const query = `?${createQueryString(queryObj)}`;
  return await apiCall<CoinListResponse>(`${BASE_URL}/coins/markets${query}`, FETCH_OPTIONS);
};
export const getCoinData = async (id: string, queryObj?: CoinQueryType) => {
  const query = queryObj ? `?${createQueryString(queryObj)}` : '';
  return await apiCall<CoinGeckoResponse>(`${BASE_URL}/coins/${id}${query}`, FETCH_OPTIONS);
};
