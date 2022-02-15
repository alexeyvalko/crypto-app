import axios from 'axios';
import { Dispatch } from 'react';
import { ICoin, CoinsAction, CoinsActionTypes } from '../reducers/CoinsReducer';

export const fetchCoins = () => async (dispatch: Dispatch<CoinsAction>) => {
  try {
    dispatch({ type: CoinsActionTypes.FETCH_COINS, payload: true });
    const response = await axios.get<ICoin[]>(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,litecoin,the-open-network,ethereum',
          order: 'market_cap_desc',
          per_page: '50',
          page: '1',
          price_change_percentage: '24h',
          sparkline: 'false',
        },
      },
    );
    dispatch({
      type: CoinsActionTypes.FETCH_COINS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({
      type: CoinsActionTypes.FETCH_COINS_ERROR,
      payload: 'error while fetch coin data',
    });
  }
};
