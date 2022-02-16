
export enum CoinsActionTypes {
  FETCH_COINS_HIGHLIGHT = 'FETCH_COINS_HIGHLIGHT',
  FETCH_COINS_COINLIST = 'FETCH_COINS_COINLIST',
  FETCH_COINS_HIGHLIGHT_SUCCESS = 'FETCH_COINS_HIGHLIGHT_SUCCESS',
  FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
  FETCH_COINLIST_SUCCESS = 'FETCH_COINLIST_SUCCESS'
}

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  market_cap: string,
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  sparkline_in_7d: {
    price: number[]
  }
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
  | FetchCoinListAction;

export interface CoinsState {
  highlightCoins: ICoin[],
  coinList: ICoin[];
  loadingHighlight: boolean;
  loadingCoinList: boolean,
  error: null | string;
}

const InitialState: CoinsState = {
  highlightCoins:[],
  coinList: [],
  loadingHighlight: false,
  loadingCoinList: false,
  error: null,
};

export const CoinsReducer = (
  state = InitialState,
  action: CoinsAction,
): CoinsState => {
  switch (action.type) {
    case CoinsActionTypes.FETCH_COINS_HIGHLIGHT:
      return { ...state, loadingHighlight: true };
      case CoinsActionTypes.FETCH_COINS_COINLIST:
        return { ...state, loadingCoinList: true };
    case CoinsActionTypes.FETCH_COINS_HIGHLIGHT_SUCCESS:
      return { ...state, loadingHighlight: false, highlightCoins: action.payload };
    case CoinsActionTypes.FETCH_COINLIST_SUCCESS:
        return { ...state, loadingCoinList: false, coinList: action.payload };
    case CoinsActionTypes.FETCH_COINS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
