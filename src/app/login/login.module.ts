import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule, SharedModule } from '../shared';
import { LoginEffects } from './effects/login.effects';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { reducers } from './reducers';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModule,
    MaterialModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
