import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarsComponent } from './toolbars.component';

const routes: Routes = [
  { path: '', component: ToolbarsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarsRoutingModule { }
