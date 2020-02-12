import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './credit-card.component';

export const CREDIT_CARD: Routes = [
    {
        path: 'masks/credit-card',
        loadChildren: () => import('./credit-card.module').then(m => m.CreditCardModule)
    }
];

const routes: Routes = [
    {path: '', component: CreditCardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditCardRoutingModule { }
