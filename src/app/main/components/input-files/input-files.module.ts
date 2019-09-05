import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { InputFilesRoutingModule } from './input-files-routing.module';
import { InputFilesComponent } from './input-files.component';


@NgModule({
  declarations: [InputFilesComponent],
  imports: [
    SharedModule,
    InputFilesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputFilesModule { }
