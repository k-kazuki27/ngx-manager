import { LoginActions, LoginActionTypes } from '../actions/login.actions';


export interface State {
  loggedIn: boolean;
  loginUser: any | null;
  error: string | null;
}

export const initialState: State = {
  loggedIn: false,
  loginUser: null,
  error: null
};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {
    case LoginActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        loginUser: action.payload.loginUser,
        error: null
      };
    }

    case LoginActionTypes.NewPasswordRequired: {
      return {
        ...state,
        loggedIn: false,
        loginUser: action.payload.loginUser,
        error: 'パスワードを変更後、再度ログインしてください。'
      };
    }

    case LoginActionTypes.LoginFailure: {
      return {
        ...state,
        loggedIn: false,
        loginUser: null,
        error: action.payload.error
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
export const getLoginUserName = (state: State) => state.loginUser ? state.loginUser.username : '';
export const getLoginError = (state: State) => state.error;
export const getAuth = (state: State) => state;
