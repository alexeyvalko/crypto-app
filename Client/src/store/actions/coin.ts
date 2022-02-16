import { Dispatch } from 'react';
import { requestCoins } from '../../requests/requests';
import { CoinsAction, CoinsActionTypes } from '../reducers/CoinsReducer';

export const fetchCoins = () => async (dispatch: Dispatch<CoinsAction>) => {
  try {
    dispatch({ type: CoinsActionTypes.FETCH_COINS, payload: true });
    const response = await requestCoins();
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
