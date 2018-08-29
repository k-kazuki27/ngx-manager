import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import * as LoginActions from './actions/login.actions';
import * as fromLogin from './reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  error$ = this.store.pipe(select(fromLogin.getLoginError));


  form: FormGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store<fromLogin.State>) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value);
    this.store.dispatch(new LoginActions.Login(this.form.value));
  }

}
