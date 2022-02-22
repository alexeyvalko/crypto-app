import axios, { AxiosResponse } from 'axios';
import { NEWS_API_KEY, NEWS_API_URL, NEWS_SEARCH_DOMAINS } from '../../common/config';
import { INewsResponse } from "../../types/news";



export const requestNews = async (searchPrase:string): Promise<AxiosResponse<INewsResponse>>=> {
  const response = await axios.get<INewsResponse>(`${NEWS_API_URL}/all`, {
    params: {
      api_token: NEWS_API_KEY,
      language: 'en',
      search: searchPrase,
      sort: "published_at",
      domains: NEWS_SEARCH_DOMAINS,
    },
  });

  return response;
}