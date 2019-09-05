import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NavDrawerRoutingModule } from './nav-drawer-routing.module';

import { NavDrawerComponent } from './nav-drawer.component';

@NgModule({
  declarations: [NavDrawerComponent],
  imports: [
    SharedModule,
    NavDrawerRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavDrawerModule { }
