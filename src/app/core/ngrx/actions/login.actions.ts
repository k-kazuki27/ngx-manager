import { Action } from '@ngrx/store';

import { LoginForm } from '../models/login';

export enum LoginActionTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginSuccess = '[Login] Login Success',
  LoginFailure = '[Login] Login Failure',
  LoginRedirect = '[Login] Login Redirect',
  NewPasswordRequired = '[Login] New Password Required',
  SessionCheck = '[Login] Session Check'
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
  constructor(public payload: { 'loginUser': any }) { }
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
  constructor(public payload: { 'error': any }) { }
}

export class LoginRedirect implements Action {
  readonly type = LoginActionTypes.LoginRedirect;
}

export class NewPasswordRequired implements Action {
  readonly type = LoginActionTypes.LoginRedirect;
  constructor(public payload: any) { }
}

export class SessionCheck implements Action {
  readonly type = LoginActionTypes.SessionCheck;
}

export type LoginActions =
  | Login
  | Logout
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | NewPasswordRequired
  | SessionCheck;
