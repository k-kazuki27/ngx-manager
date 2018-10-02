import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';

import { fromLogin, LoginActions } from '../core';
import { ChangePasswordComponent } from '../modals/change-password/change-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  error$ = this.store.pipe(select(fromLogin.getLoginError));
  auth$ = this.store.pipe(select(fromLogin.getAuth));

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store<fromLogin.State>,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.auth$.subscribe(auth => {
      if (auth.error === 'パスワードを変更後、再度ログインしてください。') {
        const dialogRef = this.dialog.open(ChangePasswordComponent, {
          data: auth.loginUser
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
        });
      }
    });
  }

  submit() {
    this.store.dispatch(new LoginActions.Login(this.form.value));
  }
}
