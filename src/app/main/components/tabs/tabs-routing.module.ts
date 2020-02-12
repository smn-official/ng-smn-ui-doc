import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';

export const TABS: Routes = [
    {
        path: 'tabs',
        loadChildren: () => import('./tabs.module').then(m => m.TabsModule)
    }
];

const routes: Routes = [
  { path: '', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
