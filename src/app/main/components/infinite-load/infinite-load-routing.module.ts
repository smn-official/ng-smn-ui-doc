import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteLoadComponent } from './infinite-load.component';

const routes: Routes = [
  {path: '', component: InfiniteLoadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteLoadRoutingModule { }
