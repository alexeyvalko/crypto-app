import { ICoin } from '../../../types/coins';

export enum CoinsActionTypes {
  FETCH_COINS_HIGHLIGHT = 'FETCH_COINS_HIGHLIGHT',
  FETCH_COINS_COINLIST = 'FETCH_COINS_COINLIST',
  FETCH_COINS_HIGHLIGHT_SUCCESS = 'FETCH_COINS_HIGHLIGHT_SUCCESS',
  FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
  FETCH_COINLIST_SUCCESS = 'FETCH_COINLIST_SUCCESS',
  FETCH_CHART_INFO_SUCCESS = 'FETCH_CHART_INFO_SUCCESS',
  FETCH_CHART_INFO = 'FETCH_CHART_INFO',
  FETCH_COIN = 'FETCH_COIN',
  FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS',
}

export interface FetchCoin {
  type: CoinsActionTypes.FETCH_COIN;
  payload: boolean;
}
export interface FetchCoinSuccess {
  type: CoinsActionTypes.FETCH_COIN_SUCCESS;
  payload: ICoin;
}
export interface FetchChartInfoAction {
  type: CoinsActionTypes.FETCH_CHART_INFO;
  payload: boolean;
}
export interface FetchChartInfoSuccessAction {
  type: CoinsActionTypes.FETCH_CHART_INFO_SUCCESS;
  payload: [number[]];
}

export interface FetchCoinListAction {
  type: CoinsActionTypes.FETCH_COINS_COINLIST;
  payload: boolean;
}

export interface FetchHighlightCoinAction {
  type: CoinsActionTypes.FETCH_COINS_HIGHLIGHT;
  payload: boolean;
}
export interface FetchHighlightSuccessAction {
  type: CoinsActionTypes.FETCH_COINS_HIGHLIGHT_SUCCESS;
  payload: ICoin[];
}

export interface FetchCoinListSuccessAction {
  type: CoinsActionTypes.FETCH_COINLIST_SUCCESS;
  payload: ICoin[];
}

export interface FetchCoinErrorAction {
  type: CoinsActionTypes.FETCH_COINS_ERROR;
  payload: string;
}

export type CoinsAction =
  | FetchHighlightCoinAction
  | FetchHighlightSuccessAction
  | FetchCoinErrorAction
  | FetchCoinListSuccessAction
  | FetchCoinListAction
  | FetchChartInfoAction
  | FetchChartInfoSuccessAction
  | FetchCoinSuccess
  | FetchCoin;

export interface CoinsState {
  highlightCoins: ICoin[];
  coinList: ICoin[];
  coin: ICoin | null;
  loadingCoin: boolean;
  loadingHighlight: boolean;
  loadingCoinList: boolean;
  loadingChart: boolean;
  error: null | string;
  chart: [number[]];
}

const InitialState: CoinsState = {
  highlightCoins: [],
  coinList: [],
  coin: null,
  loadingCoin: false,
  loadingHighlight: false,
  loadingCoinList: false,
  loadingChart: false,
  error: null,
  chart: [[]],
};

export const CoinsReducer = (
  state = InitialState,
  action: CoinsAction,
): CoinsState => {
  switch (action.type) {
    case CoinsActionTypes.FETCH_COIN:
      return { ...state, loadingCoin: true };
    case CoinsActionTypes.FETCH_COIN_SUCCESS:
      return { ...state, loadingCoin: false, coin: action.payload };
    case CoinsActionTypes.FETCH_COINS_HIGHLIGHT:
      return { ...state, loadingHighlight: true };
    case CoinsActionTypes.FETCH_COINS_COINLIST:
      return { ...state, loadingCoinList: true };
    case CoinsActionTypes.FETCH_COINS_HIGHLIGHT_SUCCESS:
      return {
        ...state,
        loadingHighlight: false,
        highlightCoins: action.payload,
      };
    case CoinsActionTypes.FETCH_COINLIST_SUCCESS:
      return { ...state, loadingCoinList: false, coinList: action.payload };
    case CoinsActionTypes.FETCH_COINS_ERROR:
      return { ...state, error: action.payload };
    case CoinsActionTypes.FETCH_CHART_INFO:
      return { ...state, loadingChart: true };
    case CoinsActionTypes.FETCH_CHART_INFO_SUCCESS:
      return { ...state, loadingChart: false, chart: action.payload };
    default:
      return state;
  }
};
