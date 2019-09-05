import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubheadersComponent } from './subheaders.component';

const routes: Routes = [
  { path: '', component: SubheadersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubheadersRoutingModule { }
