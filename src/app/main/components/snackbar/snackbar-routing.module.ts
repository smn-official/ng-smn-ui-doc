import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackbarComponent } from './snackbar.component';

export const SNACKBAR: Routes = [
    {
        path: 'snackbars',
        loadChildren: () => import('./snackbar.module').then(m => m.SnackbarModule)
    }
];

const routes: Routes = [
    {path: '', component: SnackbarComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SnackbarRoutingModule { }
