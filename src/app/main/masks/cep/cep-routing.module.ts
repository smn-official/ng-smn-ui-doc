import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './cep.component';

export const CEP: Routes = [
    {
        path: 'masks/cep',
        loadChildren: () => import('./cep.module').then(m => m.CepModule)
    }
];

const routes: Routes = [
    {path: '', component: CepComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CepRoutingModule { }
