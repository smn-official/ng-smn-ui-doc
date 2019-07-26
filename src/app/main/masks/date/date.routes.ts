import {Routes} from '@angular/router';

export const DATE: Routes = [{
    path: 'masks/date',
    loadChildren: 'src/app/main/masks/date/date.module#DateModule'
}];
