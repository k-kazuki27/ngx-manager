import { LoginActions, LoginActionTypes } from '../actions/login.actions';
import { LoginUser } from '../models/login';


export interface State {
  loggedIn: boolean;
  loginUser: LoginUser | null;
  error: string | null;
}

export const initialState: State = {
  loggedIn: false,
  loginUser: { name: '' },
  error: null
};

export function reducer(state = initialState, action: LoginActions): State {
  console.log('★★★★★★★★★★★★★★★★★★★★');
  console.log(action.type);
  switch (action.type) {
    case LoginActionTypes.LoginSuccess: {
      console.log('LoginSuccess', action.payload);
      return {
        ...state,
        loggedIn: true,
        loginUser: action.payload.loginUser,
        error: null
      };
    }

    case LoginActionTypes.LoginFailure: {
      return {
        ...state,
        loggedIn: false,
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

export const getLoggedIn = (state: State) => state.loggedIn;
export const getLoginUser = (state: State) => state.loginUser;
export const getError = (state: State) => state.error;
