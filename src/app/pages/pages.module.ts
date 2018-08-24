import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from './../shared';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
