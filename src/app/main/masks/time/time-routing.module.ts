import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeComponent } from './time.component';

const routes: Routes = [
  { path: '', component: TimeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }
