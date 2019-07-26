import {Routes} from '@angular/router';

export const CREDIT_CARD: Routes = [{
    path: 'masks/credit-card',
    loadChildren: 'src/app/main/masks/credit-card/credit-card.module#CreditCardModule'
}];
