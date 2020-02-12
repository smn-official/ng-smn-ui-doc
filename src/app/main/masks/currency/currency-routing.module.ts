import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency.component';

export const CURRENCY: Routes = [
    {
        path: 'masks/currency',
        loadChildren: () => import('./currency.module').then(m => m.CurrencyModule)
    }
];

const routes: Routes = [
    {path: '', component: CurrencyComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurrencyRoutingModule { }
