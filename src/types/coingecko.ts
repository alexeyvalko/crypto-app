export type Currencies =
  | 'aed'
  | 'ars'
  | 'aud'
  | 'bch'
  | 'bdt'
  | 'bhd'
  | 'bmd'
  | 'bnb'
  | 'brl'
  | 'btc'
  | 'cad'
  | 'chf'
  | 'clp'
  | 'cny'
  | 'czk'
  | 'dkk'
  | 'dot'
  | 'eos'
  | 'eth'
  | 'eur'
  | 'gbp'
  | 'gel'
  | 'hkd'
  | 'huf'
  | 'idr'
  | 'ils'
  | 'inr'
  | 'jpy'
  | 'krw'
  | 'kwd'
  | 'lkr'
  | 'ltc'
  | 'mmk'
  | 'mxn'
  | 'myr'
  | 'ngn'
  | 'nok'
  | 'nzd'
  | 'php'
  | 'pkr'
  | 'pln'
  | 'rub'
  | 'sar'
  | 'sek'
  | 'sgd'
  | 'thb'
  | 'try'
  | 'twd'
  | 'uah'
  | 'usd'
  | 'vef'
  | 'vnd'
  | 'xag'
  | 'xau'
  | 'xdr'
  | 'xlm'
  | 'xrp'
  | 'yfi'
  | 'zar'
  | 'bits'
  | 'link'
  | 'sats';

export type CategoryBase = {
  id: number;
  name: string;
};

export type BaseItem = {
  id: string;
  name: string;
  thumb: string;
  large: string;
};

export type NftBase = Omit<BaseItem, 'large'> & { symbol: string };

export type CoinBase = {
  symbol: string;
  market_cap_rank: number;
} & BaseItem;

export type ExchangeBase = {
  market_type: string;
} & BaseItem;

export type CoinSearch = CoinBase & { api_symbol: string };

export type TrendingCoin = {
  coin_id: number;
  small: string;
  slug: string;
  price_btc: number;
  score: number;
  data: {
    price: number;
    price_btc: string;
    price_change_percentage_24h: {
      [key in Currencies]: number;
    };
    market_cap: string;
    market_cap_btc: string;
    total_volume: string;
    total_volume_btc: string;
    sparkline: string;
    content: {
      title: string;
      description: string;
    };
  };
} & CoinBase;

export type Nft = {
  nft_contract_id: number;
  native_currency_symbol: string;
  floor_price_in_native_currency: number;
  floor_price_24h_percentage_change: number;
  data: {
    floor_price: string;
    floor_price_in_usd_24h_percentage_change: string;
    h24_volume: string;
    h24_average_sale_price: string;
    sparkline: string;
    content: null;
  };
} & NftBase;

export type Categories = {
  market_cap_1h_change: number;
  slug: string;
  coins_count: number;
  data: {
    market_cap: number;
    market_cap_btc: number;
    total_volume: number;
    total_volume_btc: number;
    market_cap_change_percentage_24h: {
      [key in Currencies]: number;
    };
    sparkline: string;
  };
} & CategoryBase;

export type CoinItem = {
  item: TrendingCoin;
};

export type TrendingListResponse = {
  coins: CoinItem[];
  nfts: Nft[];
  categories: Categories[];
};

export enum Order {
  CAP_DESC = 'market_cap_desc',
  CAP_ASC = 'market_cap_asc',
  VOLUME_ASC = 'volume_asc',
  VOLUME_DESC = 'volume_desc',
  ID_ASC = 'id_asc',
  ID_DESC = 'id_desc',
}

export enum TimeFrame {
  DAY = '24h',
  MONTH = '30d',
  HOUR = '1h',
  WEEK = '7d',
  YEAR = '1y',
}

export type CoinListQueryType = {
  vs_currency: Currencies;
  ids?: string;
  order?: Order;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: TimeFrame | string;
  locale?: string;
};

export type CoinQueryType = {
  localization?: boolean;
  tickers?: boolean;
  market_data?: boolean;
  community_data?: boolean;
  developer_data?: boolean;
  sparkline?: boolean;
};

export type SearchResponse = {
  coins: CoinSearch[];
  exchanges: ExchangeBase[];
  icos: [];
  categories: CategoryBase[];
  nfts: NftBase[];
};

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
  sparkline_in_7d?: {
    price: number[];
  };
  price_change_percentage_14d_in_currency?: number;
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_1y_in_currency?: number;
  price_change_percentage_200d_in_currency?: number;
  price_change_percentage_24h_in_currency?: number;
  price_change_percentage_30d_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
};

export type CoinListResponse = Array<Coin>;

export type Ticker = {
  base: string;
  target: string;
  market: {
    name: string;
    identifier: string;
    has_trading_incentive: boolean;
  };
  last: number;
  volume: number;
  converted_last: {
    btc: number;
    eth: number;
    usd: number;
  };
  converted_volume: {
    btc: number;
    eth: number;
    usd: number;
  };
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url: string;
  coin_id: string;
  target_coin_id: string;
};

export type CoinGeckoResponse = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: object;
  detail_platforms: {
    [key: string]: {
      decimal_place: string | null;
      contract_address: string;
    };
  };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  localization: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: string | null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: {
    market_cap_rank: number;
    current_price: {
      [key: string]: number;
    };
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: number | null;
    ath: {
      [key: string]: number;
    };
    ath_change_percentage: {
      [key: string]: number;
    };
    ath_date: {
      [key: string]: string;
    };
    atl: {
      [key: string]: number;
    };
    atl_change_percentage: {
      [key: string]: number;
    };
    atl_date: {
      [key: string]: string;
    };
    market_cap: {
      [key: string]: number;
    };
    fully_diluted_valuation: {
      [key: string]: number;
    };
    market_cap_fdv_ratio: number;
    total_volume: {
      [key: string]: number;
    };
    high_24h: {
      [key: string]: number;
    };
    low_24h: {
      [key: string]: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_1h_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_24h_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_7d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_14d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_30d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_60d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_200d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_1y_in_currency: {
      [key: string]: number;
    };
    market_cap_change_24h_in_currency: {
      [key: string]: number;
    };
    market_cap_change_percentage_24h_in_currency: {
      [key: string]: number;
    };
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
  };
  community_data: {
    facebook_likes: number | null;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: number;
    telegram_channel_user_count: number | null;
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: {
      additions: number;
      deletions: number;
    };
    commit_count_4_weeks: number;
    last_4_weeks_commit_activity_series: number[];
  };
  status_updates: string[];
  last_updated: string;
  tickers: Ticker[];
};

export type GetCoinOHLCType = {
  id: string;
  vs_currency: Currencies;
  days: number;
  precision?: 'full' | number;
};

export type GetOHLCResponse = Array<[number, number, number, number, number]>;
