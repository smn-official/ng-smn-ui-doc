import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProgressRoutingModule } from './progress-routing.module';

import { ProgressComponent } from './progress.component';

@NgModule({
  declarations: [ProgressComponent],
  imports: [
    SharedModule,
    ProgressRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressModule { }
