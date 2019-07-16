import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BottomSheetsRoutingModule } from './bottom-sheets-routing.module';
import { BottomSheetsComponent } from './bottom-sheets.component';


@NgModule({
  declarations: [BottomSheetsComponent],
  imports: [
    BottomSheetsRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BottomSheetsModule { }
