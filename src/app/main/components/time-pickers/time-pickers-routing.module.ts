import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimePickersComponent } from './time-pickers.component';

const routes: Routes = [
  { path: '', component: TimePickersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimePickersRoutingModule { }
