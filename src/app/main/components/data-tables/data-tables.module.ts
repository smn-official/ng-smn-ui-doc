import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { DataTablesComponent } from './data-tables.component';


@NgModule({
  declarations: [DataTablesComponent],
  imports: [
    SharedModule,
    DataTablesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataTablesModule { }
