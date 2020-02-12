import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegerComponent } from './integer.component';

export const INTEGER: Routes = [
    {
        path: 'masks/integer',
        loadChildren: () => import('./integer.module').then(m => m.IntegerModule)

    }
];

const routes: Routes = [
    {path: '', component: IntegerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntegerRoutingModule { }
