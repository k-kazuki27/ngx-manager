import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AmplifyService } from 'aws-amplify-angular';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import {
  Login,
  LoginActionTypes,
  LoginFailure,
  LoginRedirect,
  LoginSuccess,
  NewPasswordRequired,
} from '../actions/login.actions';
import { LoginForm } from '../models/login';
import { AuthService } from './../../services/auth.service';



@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private amplifyService: AmplifyService,
    private router: Router,
    private authService: AuthService
  ) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.Login),
    map(action => action.payload),
    exhaustMap((loginForm: LoginForm) => {
      return of(new LoginSuccess({ 'loginUser': {} }));
      // this.amplifyService.auth().signIn(loginForm.id, loginForm.password)
      //   .then(loginUser => {
      //     if (loginUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
      //       return new NewPasswordRequired({ 'loginUser': loginUser });
      //     } else {
      //       this.authService.setIdToken(loginUser.signInUserSession.idToken.jwtToken);
      //       return new LoginSuccess({ 'loginUser': loginUser });
      //     }
      //   })
      //   .catch(error => {
      //     let msg: string;
      //     if (error.message !== undefined) {
      //       msg = error.message;
      //     } else {
      //       msg = error;
      //     }
      //     return new LoginFailure({ 'error': msg });
      //   });
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.Logout),
    tap(() =>
      this.amplifyService.auth().signOut()
        .then(loginUser => {
          this.router.navigate(['/login']);
        })
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginSuccess),
    tap(() => { this.router.navigate(['/']); })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginRedirect, LoginActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );

  @Effect()
  sessionCheck$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.SessionCheck),
    exhaustMap(() => {
      return this.amplifyService.authState().pipe(
        map(loginUser => {
          if (loginUser.state === 'signedIn') {
            return new LoginSuccess({ 'loginUser': loginUser.user });
          } else {
            return new LoginRedirect();
          }
        }),
        catchError(error => of(new LoginFailure({ 'error': error })))
      );
    })
  );
}
