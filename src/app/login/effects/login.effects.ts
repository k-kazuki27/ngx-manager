import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { Login, LoginActionTypes, LoginFailure, LoginSuccess } from '../actions/login.actions';
import { LoginForm } from '../models/login';
import { LoginService } from '../services/login.service';


@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.Login),
    map(action => action.payload),
    exhaustMap((loginForm: LoginForm) =>
      this.loginService.login(loginForm).pipe(
        map(loginUser => new LoginSuccess({ loginUser })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(LoginActionTypes.LoginRedirect, LoginActionTypes.Logout),
    tap(authed => {
      console.log('to login');
      this.router.navigate(['/login']);
    })
  );
}
