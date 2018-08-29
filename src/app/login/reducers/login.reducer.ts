import { LoginActions, LoginActionTypes } from '../actions/login.actions';
import { LoginUser } from '../models/login';


export interface State {
  loginUser: LoginUser | null;
  error: string | null;
}

export const initialState: State = {
  loginUser: null,
  error: null
};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {
    case LoginActionTypes.LoginSuccess: {
      return {
        ...state,
        loginUser: action.payload.loginUser,
        error: null
      };
    }

    case LoginActionTypes.LoginFailure: {
      return {
        ...state,
        loginUser: null,
        error: action.payload
      };
    }

    case LoginActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
export const getLoginUser = (state: State) => state.loginUser;
export const getError = (state: State) => state.error;
