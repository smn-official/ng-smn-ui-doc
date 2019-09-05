import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionControlsComponent } from './selection-controls.component';


const routes: Routes = [
  { path: '', component: SelectionControlsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionControlsRoutingModule { }
