import { apiCall } from '@/utils';

import { THE_NEWS_API_TOKEN } from '@/config';
import { NewsResponse } from '@/types/news';

export const NEWS_API_URL = 'https://api.thenewsapi.com/v1/news';
export const NEWS_SEARCH_PHRASE = 'cryptocurrency|bitcoin|ethereum|blockchain|crypto|ton|toncoin';
export const NEWS_SEARCH_DOMAINS = 'cryptodaily.co.uk,washingtonpost.com,cnn.com,thehackernews.com,businessinsider.com';

const FETCH_OPTIONS = { method: 'GET' };

export const getNews = async (searchPrase = NEWS_SEARCH_PHRASE) => {
  const params = {
    api_token: THE_NEWS_API_TOKEN,
    language: 'en',
    search: searchPrase,
    sort: 'published_at',
    domains: NEWS_SEARCH_DOMAINS,
  };
  const searchQuery = new URLSearchParams(params).toString();

  return await apiCall<NewsResponse>(`${NEWS_API_URL}/all?${searchQuery}`, FETCH_OPTIONS, true);
};
