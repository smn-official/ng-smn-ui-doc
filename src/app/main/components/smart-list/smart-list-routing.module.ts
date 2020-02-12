import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartListComponent } from './smart-list.component';

export const SMART_LIST: Routes = [
    {
        path: 'smart-list',
        loadChildren: () => import('./smart-list.module').then(m => m.SmartListModule)
    }
];

const routes: Routes = [
    {path: '', component: SmartListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmartListRoutingModule { }
