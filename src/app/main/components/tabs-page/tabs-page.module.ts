import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TabsRoutingModule } from './tabs-page-routing.module';
import { TabsComponent } from './tabs-page.component';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    SharedModule,
    TabsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsPageModule { }
