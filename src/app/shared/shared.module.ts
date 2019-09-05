import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SMNUIModule} from 'ng-smn-ui';

import {CodeGitsComponent} from '../core/code-gits/code-gits.component';


@NgModule({
  declarations: [CodeGitsComponent],
  exports: [
    SMNUIModule,
    CommonModule,
    FormsModule,
    CodeGitsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SMNUIModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
