import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SnackbarRoutingModule } from './snackbar-routing.module';
import { SnackbarComponent } from './snackbar.component';


@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    SharedModule,
    SnackbarRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnackbarModule { }
