import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FloatRoutingModule } from './float-routing.module';
import { FloatComponent } from './float.component';


@NgModule({
  declarations: [FloatComponent],
  imports: [
    SharedModule,
    FloatRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FloatModule { }
