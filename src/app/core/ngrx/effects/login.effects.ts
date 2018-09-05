import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AmplifyService } from 'aws-amplify-angular';
import { exhaustMap, map, tap } from 'rxjs/operators';

import { Login, LoginActionTypes, LoginFailure, LoginSuccess, NewPasswordRequired } from '../actions/login.actions';
import { LoginForm } from '../models/login';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private amplifyService: AmplifyService,
    private router: Router
  ) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.Login),
    map(action => action.payload),
    exhaustMap((loginForm: LoginForm) =>
      this.amplifyService.auth().signIn(loginForm.mail, loginForm.password)
        .then(loginUser => {
          console.log('loginUser', loginUser);
          if (loginUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
            return new NewPasswordRequired({ loginUser });
          } else {
            return new LoginSuccess({ loginUser });
          }
        })
        .catch(error => { console.log('error', error); return new LoginFailure(error); })
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginSuccess),
    tap(() => { console.log('loginSuccess'); this.router.navigate(['/']); })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginRedirect, LoginActionTypes.Logout),
    tap(authed => {
      console.log('to login');
      this.router.navigate(['/login']);
    })
  );

  @Effect({ dispatch: false })
  newPasswordRequired$ = this.actions$.pipe(
    ofType(LoginActionTypes.NewPasswordRequired),
    tap((user) => {
      console.log('NewPasswordRequired');
      this.amplifyService.auth().completeNewPassword(user, 'Kawabata2/', null)
        .then((res2) => {
          console.log('completeNewPassword', res2);
        });
      this.router.navigate(['/change-password']);
    })
  );
}
