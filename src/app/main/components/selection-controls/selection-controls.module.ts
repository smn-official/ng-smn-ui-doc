import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SelectionControlsRoutingModule } from './selection-controls-routing.module';
import { SelectionControlsComponent } from './selection-controls.component';


@NgModule({
  declarations: [SelectionControlsComponent],
  imports: [
    SharedModule,
    SelectionControlsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectionControlsModule { }
