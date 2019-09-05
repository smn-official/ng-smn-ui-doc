import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { InputRoutingModule } from './input-routing.module';
import {InputComponent} from './input.component';


@NgModule({
  declarations: [InputComponent],
  imports: [
    SharedModule,
    InputRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
