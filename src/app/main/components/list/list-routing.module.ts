import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

export const LISTS: Routes = [
    {
        path: 'lists',
        loadChildren: () => import('./list.module').then(m => m.ListModule)
    }
];

const routes: Routes = [
    {path: '', component: ListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
