import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogsComponent } from './dialogs.component';

export const DIALOGS: Routes = [
    {
        path: 'dialogs',
        loadChildren: () => import('./dialogs.module').then(m => m.DialogsModule)
    }
];

const routes: Routes = [
    {path: '', component: DialogsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DialogsRoutingModule { }
