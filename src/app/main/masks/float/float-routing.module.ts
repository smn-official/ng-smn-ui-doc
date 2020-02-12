import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloatComponent } from './float.component';

export const FLOAT: Routes = [
    {
        path: 'masks/float',
        loadChildren: () => import('./float.module').then(m => m.FloatModule)
    }
];

const routes: Routes = [
    {path: '', component: FloatComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FloatRoutingModule { }
