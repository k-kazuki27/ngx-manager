import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    FormRoutingModule,
    MaterialModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
