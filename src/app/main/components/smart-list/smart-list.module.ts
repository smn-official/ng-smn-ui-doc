import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SmartListRoutingModule } from './smart-list-routing.module';
import { SmartListComponent } from './smart-list.component';


@NgModule({
  declarations: [SmartListComponent],
  imports: [
    SharedModule,
    SmartListRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartListModule { }
