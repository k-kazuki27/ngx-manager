import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import {SharedModule} from '../../shared/shared.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    FormRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
