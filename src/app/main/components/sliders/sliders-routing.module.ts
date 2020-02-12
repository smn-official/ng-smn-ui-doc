import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidersComponent } from './sliders.component';

export const SLIDERS: Routes = [
    {
        path: 'sliders',
        loadChildren: () => import('./sliders.module').then(m => m.SlidersModule)
    }
];

const routes: Routes = [
    {path: '', component: SlidersComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SlidersRoutingModule { }
