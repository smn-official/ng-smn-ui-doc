import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SMNUIModule } from 'ng-smn-ui';

import { CodeGitsComponent } from '../core/code-gits/code-gits.component';
import { TranslateService } from './translate/translate.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PrismModule } from '@ngx-prism/core';


@NgModule({
  declarations: [CodeGitsComponent],
  exports: [
    SMNUIModule,
    CommonModule,
    FormsModule,
    CodeGitsComponent,
    PrismModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    SMNUIModule,
    HttpClientModule,
    PrismModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TranslateService, HttpClient]
})
export class SharedModule { }
