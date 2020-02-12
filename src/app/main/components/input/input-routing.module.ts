import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input.component';

export const INPUTS: Routes = [
    {
        path: 'inputs',
        loadChildren: () => import('./input.module').then(m => m.InputModule)
    }
];

const routes: Routes = [
    {path: '', component: InputComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputRoutingModule { }
