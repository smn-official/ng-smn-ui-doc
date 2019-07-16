import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardRoutingModule } from './card-routing.module';
import {CardComponent} from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    SharedModule,
    CardRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardModule { }
