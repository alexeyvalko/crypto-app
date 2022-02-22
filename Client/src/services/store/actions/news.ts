import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../reducers/NewsReducer';
import { requestNews } from '../../requests/news';
import { NEWS_SEARCH_PHRASE } from '../../../common/config';

export const fetchNews = () => async (dispatch: Dispatch<NewsAction>) => {
  try {
    dispatch({ type: NewsActionTypes.FETCH_NEWS, payload: true });
    const response = await requestNews(NEWS_SEARCH_PHRASE);

    if (response.data.error) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: response.data.error.message,
      });
    } else {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_SUCCESS,
        payload: response.data,
      });
    }
  } catch {
    dispatch({
      type: NewsActionTypes.FETCH_NEWS_ERROR,
      payload: 'error while fetch news',
    });
  }
};
