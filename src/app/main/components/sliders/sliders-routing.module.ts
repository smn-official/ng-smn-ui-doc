import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidersComponent } from './sliders.component';

const routes: Routes = [
  { path: '', component: SlidersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidersRoutingModule { }
