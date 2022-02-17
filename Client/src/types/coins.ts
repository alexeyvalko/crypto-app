
export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  market_cap: number,
  market_cap_rank: number,
  fully_diluted_valuation: number
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  market_cap_change_24h: number,
  market_cap_change_percentage_24h: number,
  total_supply: number,
  circulating_supply: number,
  max_supply: number,
  sparkline_in_7d: {
    price: number[]
  }
}


interface ICurrencies {
  usd: number,
  eur: number,
  run: number
}

export interface ICoinInfo {
  id: string,
  symbol: string,
  name: string
  hashing_algorithm: string,
  description: {
    en: string
  },
  links: {
    homepage: string[],
    blockchain_site: string[]
    official_forum_url: string[]
    chat_url: string[]
    announcement_url: string[]
    twitter_screen_name: string,
    facebook_username: string,
    telegram_channel_identifier: string,
    subreddit_url: string,
    repos_url: {
      github: string[],
      bitbucket: string[]
    }
  }
  image: {
    thumb: string,
    small: string,
    large: string
  },
  country_origin: string,
  genesis_date: string,
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number,
  market_cap_rank: number,
  coingecko_rank: number,
  coingecko_score: number,
  developer_score: number,
  community_score: number,
  liquidity_score: number,
  public_interest_score: number,
  market_data: {
    current_price: ICurrencies,
    market_cap: ICurrencies,
    market_cap_rank: number,
    total_volume: ICurrencies,
    high_24h: ICurrencies,
    low_24h : ICurrencies,
    price_change_24h: number,
    price_change_percentage_24h: number,
    price_change_percentage_7d: number,
    price_change_percentage_14d: number,
    price_change_percentage_30d: number,
    price_change_percentage_60d: number,
    price_change_percentage_200d: number,
    price_change_percentage_1y: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    total_supply: number,
    max_supply: number,
    circulating_supply: number,
  },
  community_data: {
    facebook_likes: number,
    twitter_followers: number,
    reddit_average_posts_48h: number,
    reddit_average_comments_48h: number,
    reddit_subscribers: number,
    reddit_accounts_active_48h: number,
    telegram_channel_user_count: number
  },
  public_interest_stats: {
    alexa_rank: number,
    bing_matches: number
  },
}
