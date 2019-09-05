import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CpfRoutingModule } from './cpf-routing.module';
import { CpfComponent } from './cpf.component';


@NgModule({
  declarations: [CpfComponent],
  imports: [
    SharedModule,
    CpfRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CpfModule { }
