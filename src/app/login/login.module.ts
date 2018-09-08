import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';
import { ChangePasswordComponent } from './../modals/change-password/change-password.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  declarations: [LoginComponent, ChangePasswordComponent],
  entryComponents: [ChangePasswordComponent]
})
export class LoginModule { }
