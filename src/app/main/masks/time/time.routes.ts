import {Routes} from '@angular/router';

export const TIME: Routes = [{
    path: 'masks/time',
    loadChildren: 'src/app/main/masks/time/time.module#TimeModule'
}];
