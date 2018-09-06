import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmplifyService } from 'aws-amplify-angular';

import { fromLogin, LoginActions } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    private store: Store<fromLogin.State>,
    private amplifyService: AmplifyService) {
    this.store.dispatch(new LoginActions.SessionCheck());

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log('authStateChange', authState);
      });
  }
}

