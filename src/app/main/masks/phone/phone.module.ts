import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';


@NgModule({
  declarations: [PhoneComponent],
  imports: [
    SharedModule,
    PhoneRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhoneModule { }
