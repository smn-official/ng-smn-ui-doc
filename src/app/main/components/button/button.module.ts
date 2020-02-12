import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    SharedModule,
    ButtonRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonModule { }
