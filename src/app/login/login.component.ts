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


  form: FormGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store<fromLogin.State>,
    public dialog: MatDialog) { }

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
    this.store.dispatch(new LoginActions.Login(this.form.value));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '250px',
      data: { name: 'aaaa', animal: 'aaaa' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
