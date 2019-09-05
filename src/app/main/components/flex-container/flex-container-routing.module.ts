import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexContainerComponent } from './flex-container.component';

const routes: Routes = [
  {path: '', component: FlexContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexContainerRoutingModule { }
