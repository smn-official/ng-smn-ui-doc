import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpfComponent } from './cpf.component';

export const CPF: Routes = [
    {
        path: 'masks/cpf',
        loadChildren: () => import('./cpf.module').then(m => m.CpfModule)
    }
];

const routes: Routes = [
    {path: '', component: CpfComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CpfRoutingModule { }
