import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
