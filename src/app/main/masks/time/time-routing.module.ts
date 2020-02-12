import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './time.component';

export const TIME: Routes = [
    {
        path: 'masks/time',
        loadChildren: () => import('./time.module').then(m => m.TimeModule)
    }
];

const routes: Routes = [
    {path: '', component: TimeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimeRoutingModule { }
