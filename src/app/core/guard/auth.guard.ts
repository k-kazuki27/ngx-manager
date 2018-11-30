import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { CoreModule, fromLogin, LoginActions } from '../../core';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromLogin.State>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(fromLogin.getLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new LoginActions.LoginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
