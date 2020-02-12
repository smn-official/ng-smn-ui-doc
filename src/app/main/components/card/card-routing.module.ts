import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card.component';

export const CARDS: Routes = [
    {
        path: 'card',
        loadChildren: () => import('./card.module').then(m => m.CardModule)
    }
];

const routes: Routes = [
    {path: '', component: CardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardRoutingModule { }
