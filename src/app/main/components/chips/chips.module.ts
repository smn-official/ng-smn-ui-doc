import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';


@NgModule({
  declarations: [ChipsComponent],
  imports: [
    SharedModule,
    ChipsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChipsModule { }
