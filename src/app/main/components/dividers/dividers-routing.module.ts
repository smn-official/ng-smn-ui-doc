import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DividersComponent } from './dividers.component';

const routes: Routes = [
  {path: '', component: DividersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividersRoutingModule { }
