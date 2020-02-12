import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChipsComponent } from './chips.component';

export const CHIPS: Routes = [
    {
        path: 'chips',
        loadChildren: () => import('./chips.module').then(m => m.ChipsModule)
    }
];

const routes: Routes = [
    {path: '', component: ChipsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChipsRoutingModule { }
