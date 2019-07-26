import {Routes} from '@angular/router';

export const CURRENCY: Routes = [{
    path: 'masks/currency',
    loadChildren: 'src/app/main/masks/currency/currency.module#CurrencyModule'
}];
