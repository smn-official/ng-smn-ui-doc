import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressComponent } from './progress.component';

export const PROGRESS: Routes = [
    {
        path: 'progress',
        loadChildren: () => import('./progress.module').then(m => m.ProgressModule)
    }
];

const routes: Routes = [
    {path: '', component: ProgressComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProgressRoutingModule { }
