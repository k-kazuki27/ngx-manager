import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({
    password: new FormControl(''),
    comfirmPassword: new FormControl('')
  });

  error: string;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private amplifyService: AmplifyService,
    @Inject(MAT_DIALOG_DATA) private user: any
  ) { }

  ngOnInit() { }

  onRegistClick(data: any): void {
    if (data.password !== data.comfirmPassword) {
      this.error = 'パスワードとパスワード（確認）が一致してません。';
      return;
    }

    this.amplifyService.auth().completeNewPassword(this.user, data.password, null)
      .then((res) => {
        this.dialogRef.close();
      })
      .catch((error) => {
        if (error.message !== undefined) {
          this.error = error.message;
        } else {
          this.error = error;
        }
      });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
