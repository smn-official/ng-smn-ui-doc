import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabComponent } from './fab.component';

export const FAB: Routes = [
    {
        path: 'fab',
        loadChildren: () => import('./fab.module').then(m => m.FabModule)
    }
];

const routes: Routes = [
    {path: '', component: FabComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FabRoutingModule { }
