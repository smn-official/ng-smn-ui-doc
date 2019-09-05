import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './currency.component';


@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    SharedModule,
    CurrencyRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CurrencyModule { }
