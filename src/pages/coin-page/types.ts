import { CoinInfoType } from './constants';

export type ListData = {
  label: string;
  value?: number[];
  links?: string[];
  type: CoinInfoType;
};
