import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { TimePickersRoutingModule } from './time-pickers-routing.module';
import { TimePickersComponent } from './time-pickers.component';


@NgModule({
  declarations: [TimePickersComponent],
  imports: [
    SharedModule,
    TimePickersRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimePickersModule { }
