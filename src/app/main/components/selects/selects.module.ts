import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SelectsRoutingModule } from './selects-routing.module';
import { SelectsComponent } from './selects.component';


@NgModule({
  declarations: [SelectsComponent],
  imports: [
    SharedModule,
    SelectsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectsModule { }
