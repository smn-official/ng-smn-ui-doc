import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs-page.component';

export const TABS_PAGE: Routes = [
    {
        path: 'tabs-page',
        loadChildren: () => import('./tabs-page.module').then(m => m.TabsPageModule)
    }
];

const routes: Routes = [
    {path: '', component: TabsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
