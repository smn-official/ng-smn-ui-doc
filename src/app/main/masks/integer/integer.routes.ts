import {Routes} from '@angular/router';

export const INTEGER: Routes = [{
    path: 'masks/integer',
    loadChildren: 'src/app/main/masks/integer/integer.module#IntegerModule'
}];
