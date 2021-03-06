import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { fromRoot } from '../..';
import * as fromLogin from './login.reducer';


export interface AuthState {
    login: fromLogin.State;
}

export interface State extends fromRoot.RootState {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
    login: fromLogin.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthLoginState = createSelector(
    selectAuthState,
    (state: AuthState) => state.login
);

export const getLoggedIn = createSelector(
    selectAuthLoginState,
    fromLogin.getLoggedIn
);

export const getLoginUser = createSelector(
    selectAuthLoginState,
    fromLogin.getLoginUser
);

export const getLoginUserName = createSelector(
    selectAuthLoginState,
    fromLogin.getLoginUserName
);

export const getLoginError = createSelector(
    selectAuthLoginState,
    fromLogin.getLoginError
);

export const getAuth = createSelector(
    selectAuthLoginState,
    fromLogin.getAuth
);

