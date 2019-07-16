import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DialogsRoutingModule } from './dialogs-routing.module';
import { DialogsComponent } from './dialogs.component';


@NgModule({
  declarations: [DialogsComponent],
  imports: [
    SharedModule,
    DialogsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DialogsModule { }
