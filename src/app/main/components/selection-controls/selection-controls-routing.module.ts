import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionControlsComponent } from './selection-controls.component';

export const SELECTION_CONTROLS: Routes = [
    {
        path: 'selection-controls',
        loadChildren: () => import('./selection-controls.module').then(m => m.SelectionControlsModule)
    }
];

const routes: Routes = [
    {path: '', component: SelectionControlsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectionControlsRoutingModule { }
