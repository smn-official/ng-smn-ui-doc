import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';


@NgModule({
  declarations: [TimeComponent],
  imports: [
    SharedModule,
    TimeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimeModule { }
