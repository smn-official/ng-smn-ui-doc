import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ClockRoutingModule } from './clock-routing.module';
import { ClockComponent } from './clock.component';


@NgModule({
  declarations: [ClockComponent],
  imports: [
    SharedModule,
    ClockRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClockModule { }
