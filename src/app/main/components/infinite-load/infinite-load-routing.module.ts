import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteLoadComponent } from './infinite-load.component';

export const INFINITE_LOAD: Routes = [
    {
        path: 'infinite-load',
        loadChildren: () => import('./infinite-load.module').then(m => m.InfiniteLoadModule)
    }
];

const routes: Routes = [
    {path: '', component: InfiniteLoadComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfiniteLoadRoutingModule { }
