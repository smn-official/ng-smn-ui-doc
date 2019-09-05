import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CnpjRoutingModule } from './cnpj-routing.module';
import { CnpjComponent } from './cnpj.component';


@NgModule({
  declarations: [CnpjComponent],
  imports: [
    SharedModule,
    CnpjRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CnpjModule { }
