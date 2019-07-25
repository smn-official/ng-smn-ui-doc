import {Routes} from '@angular/router';

export const TIME_PICKERS: Routes = [{
    path: 'time-pickers',
    loadChildren: 'src/app/main/components/time-pickers/time-pickers.module#TimePickersModule'
}];
