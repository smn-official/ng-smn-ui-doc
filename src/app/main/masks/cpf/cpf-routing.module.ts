import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpfComponent } from './cpf.component';

const routes: Routes = [
  { path: '', component: CpfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpfRoutingModule { }
