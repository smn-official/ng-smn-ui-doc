import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexContainerComponent } from './flex-container.component';

export const FLEX_CONTAINER: Routes = [
    {
        path: 'flex-container',
        loadChildren: () => import('./flex-container.module').then(m => m.FlexContainerModule)
    }
];

const routes: Routes = [
    {path: '', component: FlexContainerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlexContainerRoutingModule { }
