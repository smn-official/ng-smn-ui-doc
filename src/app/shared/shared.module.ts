import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SMNUIModule} from 'ng-smn-ui';



@NgModule({
  declarations: [],
  exports: [
    SMNUIModule,
    CommonModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    SMNUIModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
