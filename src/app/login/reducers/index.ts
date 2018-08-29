import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { LoginActions } from '../actions/login.actions';
import * as fromLogin from './login.reducer';

export interface AuthState {
    login: fromLogin.State;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState, LoginActions> = {
    login: fromLogin.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthLoginState = createSelector(
    selectAuthState,
    (state: AuthState) => state.login
);
export const getUser = createSelector(selectAuthLoginState, fromLogin.getLoginUser);
export const getLoggedIn = createSelector(getUser, user => !!user);
export const getLoginError = createSelector(
    selectAuthLoginState,
    fromLogin.getError
);

