import { NgModule } from '@angular/core';

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
  declarations: [LoginComponent]
})
export class LoginModule { }
