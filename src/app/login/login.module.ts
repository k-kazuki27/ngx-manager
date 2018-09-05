import { NgModule } from '@angular/core';

import { ChangePasswordComponent } from '../modals/change-password/change-password.component';
import { MaterialModule, SharedModule } from '../shared';
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
