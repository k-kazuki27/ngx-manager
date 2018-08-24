import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    ListRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }
