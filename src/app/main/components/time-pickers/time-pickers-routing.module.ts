import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimePickersComponent } from './time-pickers.component';

export const TIME_PICKERS: Routes = [
    {
        path: 'time-pickers',
        loadChildren: () => import('./time-pickers.module').then(m => m.TimePickersModule)
    }
];

const routes: Routes = [
    {path: '', component: TimePickersComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimePickersRoutingModule { }
