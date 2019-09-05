import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SubheadersRoutingModule } from './subheaders-routing.module';
import { SubheadersComponent } from './subheaders.component';


@NgModule({
  declarations: [SubheadersComponent],
  imports: [
    SharedModule,
    SubheadersRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubheadersModule { }
