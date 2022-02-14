import axios from 'axios';
import { Dispatch } from 'react';
import { IUser , UserAction, UserActionTypes } from "../reducers/UserReducer";


export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS, payload: true });
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'error while fetch users' });
    }
  };
