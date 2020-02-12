import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './date.component';

export const DATE: Routes = [
    {
        path: 'masks/date',
        loadChildren: () => import('./date.module').then(m => m.DateModule)
    }
];

const routes: Routes = [
    {path: '', component: DateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DateRoutingModule { }
