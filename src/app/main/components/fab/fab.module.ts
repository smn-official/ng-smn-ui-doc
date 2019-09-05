import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FabRoutingModule } from './fab-routing.module';
import {FabComponent} from './fab.component';


@NgModule({
  declarations: [FabComponent],
  imports: [
    SharedModule,
    FabRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FabModule { }
