import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from './core/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngx-manager';
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    // this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }
}

