import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DividersRoutingModule } from './dividers-routing.module';

import { DividersComponent } from './dividers.component';

@NgModule({
  declarations: [DividersComponent],
  imports: [
    SharedModule,
    DividersRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DividersModule { }
