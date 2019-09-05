import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { InfiniteLoadRoutingModule } from './infinite-load-routing.module';
import { InfiniteLoadComponent } from './infinite-load.component';


@NgModule({
  declarations: [InfiniteLoadComponent],
  imports: [
    SharedModule,
    InfiniteLoadRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfiniteLoadModule { }
