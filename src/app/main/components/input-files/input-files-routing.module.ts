import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputFilesComponent } from './input-files.component';

const routes: Routes = [
  {path: '', component: InputFilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputFilesRoutingModule { }
