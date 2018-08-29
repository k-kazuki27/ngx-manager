import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { LoginForm, LoginUser } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(loginForm: LoginForm): Observable<LoginUser> {
    console.log('loginForm', loginForm);
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (loginForm.mail !== 'test') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
