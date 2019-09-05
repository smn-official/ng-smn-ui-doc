import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavDrawerComponent } from './nav-drawer.component';

const routes: Routes = [
  {path: '', component: NavDrawerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavDrawerRoutingModule { }
