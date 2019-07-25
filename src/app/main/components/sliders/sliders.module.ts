import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SlidersComponent } from './sliders.component';


@NgModule({
  declarations: [SlidersComponent],
  imports: [
    SharedModule,
    SlidersRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidersModule { }
