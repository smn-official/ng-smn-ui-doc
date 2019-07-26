import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CepRoutingModule } from './cep-routing.module';
import { CepComponent } from './cep.component';


@NgModule({
  declarations: [CepComponent],
  imports: [
    SharedModule,
    CepRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CepModule { }
