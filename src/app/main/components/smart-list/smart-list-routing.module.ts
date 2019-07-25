import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartListComponent } from './smart-list.component';


const routes: Routes = [
  { path: '', component: SmartListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartListRoutingModule { }
