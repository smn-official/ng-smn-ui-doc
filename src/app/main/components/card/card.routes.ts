import {Routes} from '@angular/router';

export const CARDS: Routes = [{
    path: 'card',
    loadChildren: 'src/app/main/components/card/card.module#CardModule'
}];
