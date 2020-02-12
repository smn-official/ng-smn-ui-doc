import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnpjComponent } from './cnpj.component';

export const CNPJ: Routes = [
    {
        path: 'masks/cnpj',
        loadChildren: () => import('./cnpj.module').then(m => m.CnpjModule)
    }
];

const routes: Routes = [
    {path: '', component: CnpjComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CnpjRoutingModule { }
