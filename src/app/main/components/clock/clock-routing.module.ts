import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockComponent } from './clock.component';

const routes: Routes = [
  {path: '', component: ClockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockRoutingModule { }
