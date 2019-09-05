import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { IntegerRoutingModule } from './integer-routing.module';
import { IntegerComponent } from './integer.component';


@NgModule({
  declarations: [IntegerComponent],
  imports: [
    SharedModule,
    IntegerRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntegerModule { }
