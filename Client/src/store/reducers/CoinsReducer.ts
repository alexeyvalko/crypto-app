export enum CoinsActionTypes {
  FETCH_COINS = 'FETCH_COINS',
  FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS',
  FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
}

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

export interface FetchCoinAction {
  type: CoinsActionTypes.FETCH_COINS;
  payload: boolean;
}
export interface FetchCoinSuccessAction {
  type: CoinsActionTypes.FETCH_COINS_SUCCESS;
  payload: ICoin[];
}

export interface FetchCoinErrorAction {
  type: CoinsActionTypes.FETCH_COINS_ERROR;
  payload: string;
}

export type CoinsAction =
  | FetchCoinAction
  | FetchCoinSuccessAction
  | FetchCoinErrorAction;

export interface CoinsState {
  coinList: ICoin[];
  loading: boolean;
  error: null | string;
}

const InitialState: CoinsState = {
  coinList: [],
  loading: false,
  error: null,
};

export const CoinsReducer = (
  state = InitialState,
  action: CoinsAction,
): CoinsState => {
  switch (action.type) {
    case CoinsActionTypes.FETCH_COINS:
      return { ...state, loading: true };
    case CoinsActionTypes.FETCH_COINS_SUCCESS:
      return { ...state, loading: false, coinList: action.payload };
    case CoinsActionTypes.FETCH_COINS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
