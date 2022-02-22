import { combineReducers } from 'redux';
import { CoinsReducer } from './CoinsReducer';
import { NewsReducer } from './NewsReducer';

export const rootReducer = combineReducers({
  coins: CoinsReducer,
  news: NewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
