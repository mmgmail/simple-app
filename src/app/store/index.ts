import { createContext } from 'react';

interface CtxInterface {
  dispatch: Function,
  state: object
}

export const initialState = {
  isAuth: false,
  user: null,
  token: null,
};

export const AuthContext = createContext({} as CtxInterface);

export const userReducer = (state: typeof initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(payload.user));
      localStorage.setItem('token', JSON.stringify(payload.token));
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        token: payload.token
      };
    default:
      return state;
  }
};