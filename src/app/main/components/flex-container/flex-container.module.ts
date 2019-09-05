import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FlexContainerRoutingModule } from './flex-container-routing.module';
import { FlexContainerComponent } from './flex-container.component';


@NgModule({
  declarations: [FlexContainerComponent],
  imports: [
    SharedModule,
    FlexContainerRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlexContainerModule { }
