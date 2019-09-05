import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FabComponent} from './fab.component';

const routes: Routes = [
  {path: '', component: FabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabRoutingModule { }
