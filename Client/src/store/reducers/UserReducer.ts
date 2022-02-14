export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface IUser {
  id: number
  name: string,
  username: string,
  email: string,
}

export interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
  payload: boolean;
}
export interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;

export interface UserState {
  users: IUser[] ,
  loading: boolean,
  error: null | string
}

const InitialState: UserState = {
  users: [] ,
  loading: false,
  error: null
};

export const UserReducer = (
  state = InitialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
      case UserActionTypes.FETCH_USERS_ERROR:
        return { ...state, error: action.payload  };
    default:
      return state;
  }
};
