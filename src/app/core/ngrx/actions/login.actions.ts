import { Action } from '@ngrx/store';

import { LoginForm, LoginUser } from '../models/login';

export enum LoginActionTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginSuccess = '[Login] Login Success',
  LoginFailure = '[Login] Login Failure',
  LoginRedirect = '[Login] Login Redirect',
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
  constructor(public payload: LoginForm) { }
}

export class Logout implements Action {
  readonly type = LoginActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
  constructor(public payload: { loginUser: LoginUser }) { }
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
  constructor(public payload: any) { }
}

export class LoginRedirect implements Action {
  readonly type = LoginActionTypes.LoginRedirect;
}

export type LoginActions =
  | Login
  | Logout
  | LoginSuccess
  | LoginFailure
  | LoginRedirect;
