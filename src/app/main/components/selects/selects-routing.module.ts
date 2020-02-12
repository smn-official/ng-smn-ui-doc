import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectsComponent } from './selects.component';

export const SELECTS: Routes = [
    {
        path: 'selects',
        loadChildren: () => import('./selects.module').then(m => m.SelectsModule)
    }
];

const routes: Routes = [
    {path: '', component: SelectsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectsRoutingModule { }
