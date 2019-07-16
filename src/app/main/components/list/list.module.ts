import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListRoutingModule } from './list-routing.module';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    SharedModule,
    ListRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListModule { }
