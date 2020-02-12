import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFilesComponent } from './input-files.component';

export const FILES: Routes = [
    {
        path: 'files',
        loadChildren: () => import('./input-files.module').then(m => m.InputFilesModule)
    }
];

const routes: Routes = [
    {path: '', component: InputFilesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputFilesRoutingModule { }
