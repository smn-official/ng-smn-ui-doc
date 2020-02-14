import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChosenComponent } from './chosen.component';

export const CHOSEN: Routes = [
    {
        path: 'chosen',
        loadChildren: () => import('./chosen.module').then(m => m.ChosenModule)
    }
];

const routes: Routes = [
    {path: '', component: ChosenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChosenRoutingModule { }
