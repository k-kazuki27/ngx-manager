import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../../shared';
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
