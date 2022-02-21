import { Dispatch } from 'react';
import { DaysType } from '../../../components/Coin/chartButtons';
import { requestChartData, requestCoins } from '../../requests/coins';
import { CoinsAction, CoinsActionTypes } from '../reducers/CoinsReducer';

const HIGHLIGHT_COINS = 'bitcoin,litecoin,the-open-network,ethereum';

export const fetchHighlightCoins =
  () => async (dispatch: Dispatch<CoinsAction>) => {
    try {
      dispatch({ type: CoinsActionTypes.FETCH_COINS_HIGHLIGHT, payload: true });
      const response = await requestCoins(HIGHLIGHT_COINS);
      dispatch({
        type: CoinsActionTypes.FETCH_COINS_HIGHLIGHT_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: CoinsActionTypes.FETCH_COINS_ERROR,
        payload: 'error while fetch highlight coins data',
      });
    }
  };

export const fetchCoinList = () => async (dispatch: Dispatch<CoinsAction>) => {
  try {
    dispatch({ type: CoinsActionTypes.FETCH_COINS_COINLIST, payload: true });
    const response = await requestCoins();
    dispatch({
      type: CoinsActionTypes.FETCH_COINLIST_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({
      type: CoinsActionTypes.FETCH_COINS_ERROR,
      payload: 'error while fetch coinlist data',
    });
  }
};

export const fetchChartInfo = (coinId: string, days: DaysType) => async (dispatch: Dispatch<CoinsAction>) => {
  try {
    dispatch({ type: CoinsActionTypes.FETCH_CHART_INFO, payload: true });
    const response = await requestChartData(coinId, days);
    dispatch({
      type: CoinsActionTypes.FETCH_CHART_INFO_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({
      type: CoinsActionTypes.FETCH_COINS_ERROR,
      payload: 'error while fetch chart data',
    });
  }
};
