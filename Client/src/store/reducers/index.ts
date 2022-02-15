import { combineReducers } from "redux";
import { CoinsReducer } from "./CoinsReducer";


export const rootReducer = combineReducers({
  coins: CoinsReducer
})

export type RootState = ReturnType<typeof rootReducer>