import { CoinInfoType } from './constants';

import { ListData } from './types';

import { CoinGeckoResponse } from '@/types/coingecko';

export const getCoinLinks = (data: CoinGeckoResponse): ListData[] => [
  {
    label: 'Website',
    links: data.links.homepage,
    type: CoinInfoType.LINKS,
  },
  {
    label: 'Source Code',
    links: data.links.repos_url?.github,
    type: CoinInfoType.LINKS,
  },
  {
    label: 'Reddit',
    links: [data.links.subreddit_url],
    type: CoinInfoType.LINKS,
  },
  {
    label: 'Whitepaper',
    links: [data.links.whitepaper],
    type: CoinInfoType.LINKS,
  },
  {
    label: 'Telegram',
    links: [data.links.telegram_channel_identifier && `https://t.me/${data.links.telegram_channel_identifier}`],
    type: CoinInfoType.LINKS,
  },
];

export const getCoinHistoryInfo = (data: CoinGeckoResponse): ListData[] => [
  {
    label: '24h Range',
    value: [data.market_data.low_24h?.usd ?? '', data.market_data.high_24h?.usd ?? ''],
    type: CoinInfoType.PRICE,
  },
  {
    label: 'All-Time High',
    value: [data.market_data.ath?.usd ?? ''],
    type: CoinInfoType.PRICE,
  },
  {
    label: 'All-Time Low',
    value: [data.market_data.atl?.usd ?? ''],
    type: CoinInfoType.PRICE,
  },
];

export const getMainCoinInfo = (data: CoinGeckoResponse): ListData[] => [
  {
    label: 'Market Cap',
    value: [data.market_data.market_cap.usd ?? ''],
    type: CoinInfoType.PRICE,
  },
  {
    label: '24 Hour Trading Vol',
    value: [data.market_data.total_volume?.usd ?? ''],
    type: CoinInfoType.PRICE,
  },
  {
    label: 'Circulating Supply',
    value: [data.market_data.circulating_supply ?? ''],
    type: CoinInfoType.NUMBER,
  },
  {
    label: 'Total Supply',
    value: [data.market_data.total_supply ?? ''],
    type: CoinInfoType.NUMBER,
  },
  {
    label: 'Max Supply',
    value: [data.market_data.max_supply ?? ''],
    type: CoinInfoType.NUMBER,
  },
];
