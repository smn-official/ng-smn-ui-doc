import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPickersComponent } from './color-pickers.component';

const routes: Routes = [
  {path: '', component: ColorPickersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorPickersRoutingModule { }
