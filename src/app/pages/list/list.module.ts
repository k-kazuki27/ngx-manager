import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../../shared';
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
