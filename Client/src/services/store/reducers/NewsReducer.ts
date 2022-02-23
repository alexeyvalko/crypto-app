import { INews, INewsResponse } from '../../../types/news';

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
}

export interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
  payload: boolean;
}

export interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: INewsResponse;
}

export interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction;

export interface INewsState {
  page: number;
  total: number;
  news: INews[];
  loadingNews: boolean;
  error: null | string;
}

export const InitialState: INewsState = {
  page: 1,
  total: 0,
  news: [],
  loadingNews: false,
  error: null,
};

export const NewsReducer = (
  state = InitialState,
  action: NewsAction,
): INewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loadingNews: true };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loadingNews: false,
        news: action.payload.data,
        page: action.payload.meta.page,
        total: action.payload.meta.found,
      };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
