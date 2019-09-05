import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegerComponent } from './integer.component';

const routes: Routes = [
  { path: '', component: IntegerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegerRoutingModule { }
