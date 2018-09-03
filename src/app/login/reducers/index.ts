import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { LoginActions } from '../actions/login.actions';
import * as fromLogin from './login.reducer';


export interface AuthState {
    login: fromLogin.State;
}

export interface State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, LoginActions> = {
    login: fromLogin.reducer
};

export const selectAuthState = createFeatureSelector<fromLogin.State>('auth');

export const selectAuthLoginState = createSelector(
    selectAuthState,
    (state: fromLogin.State) => state
);

export const getUser = createSelector(selectAuthState, fromLogin.getLoginUser);

export const getLoggedIn = createSelector(
    selectAuthState,
    fromLogin.getLoggedIn
);
export const getLoginError = createSelector(
    selectAuthState,
    fromLogin.getError
);

