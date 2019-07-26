import {Routes} from '@angular/router';

export const FLOAT: Routes = [{
    path: 'masks/float',
    loadChildren: 'src/app/main/masks/float/float.module#FloatModule'
}];
