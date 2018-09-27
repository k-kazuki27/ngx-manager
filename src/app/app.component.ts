import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmplifyService } from 'aws-amplify-angular';

import { AuthService, fromLogin, LoginActions } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<fromLogin.State>,
    private amplifyService: AmplifyService,
    private authService: AuthService) {

    this.store.dispatch(new LoginActions.SessionCheck());

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log('authStateChange', authState);
      });
  }

  async ngOnInit() {
    const session = await this.amplifyService.auth().currentSession();
    this.authService.setIdToken(session.getIdToken().getJwtToken());
  }
}

