export interface INews {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: 'en' | 'ru';
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: null | number;
}

export interface INewsResponse {
  meta: {
    found: number;
    returned: number;
    limit: number;
    page: number;
  };
  error?: {
    code: string,
    message: string,
  },
  data: INews[];
}


