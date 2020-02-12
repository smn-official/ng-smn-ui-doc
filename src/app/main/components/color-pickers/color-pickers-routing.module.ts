import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickersComponent } from './color-pickers.component';

export const COLOR_PICKERS: Routes = [{
    path: 'color-pickers',
    loadChildren: () => import('./color-pickers.module').then(m => m.ColorPickersModule)
}];

const routes: Routes = [
    {path: '', component: ColorPickersComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColorPickersRoutingModule { }
