import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { ToolbarsRoutingModule } from './toolbars-routing.module';
import { ToolbarsComponent } from './toolbars.component';


@NgModule({
  declarations: [ToolbarsComponent],
  imports: [
    SharedModule,
    ToolbarsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarsModule { }
