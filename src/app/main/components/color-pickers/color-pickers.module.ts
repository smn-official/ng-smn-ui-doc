import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ColorPickersRoutingModule } from './color-pickers-routing.module';
import { ColorPickersComponent } from './color-pickers.component';


@NgModule({
  declarations: [ColorPickersComponent],
  imports: [
    SharedModule,
    ColorPickersRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColorPickersModule { }
