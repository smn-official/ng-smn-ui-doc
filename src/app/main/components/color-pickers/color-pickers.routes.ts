import {Routes} from '@angular/router';

export const COLOR_PICKERS: Routes = [{
    path: 'color-pickers',
    loadChildren: 'src/app/main/components/color-pickers/color-pickers.module#ColorPickersModule'
}];
