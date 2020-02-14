import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ChosenRoutingModule } from './chosen-routing.module';
import { ChosenComponent } from './chosen.component';


@NgModule({
  declarations: [ChosenComponent],
  imports: [
    SharedModule,
    ChosenRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChosenModule { }
