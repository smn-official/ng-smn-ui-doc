import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';

export const BUTTONS: Routes = [
    {
        path: 'button',
        loadChildren: () => import('./button.module').then(m => m.ButtonModule)
    }
];

const routes: Routes = [
    {path: '', component: ButtonComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ButtonRoutingModule { }
