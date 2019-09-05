import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatComponent } from './float.component';

const routes: Routes = [
  { path: '', component: FloatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatRoutingModule { }
