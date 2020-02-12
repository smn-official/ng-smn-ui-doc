import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock.component';

export const CLOCK: Routes = [
    {
        path: 'clock',
        loadChildren: () => import('./clock.module').then(m => m.ClockModule)
    }
];

const routes: Routes = [
    {path: '', component: ClockComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClockRoutingModule { }
