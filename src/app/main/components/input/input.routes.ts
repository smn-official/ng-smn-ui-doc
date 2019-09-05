import {Routes} from '@angular/router';

export const INPUTS: Routes = [{
    path: 'inputs',
    loadChildren: 'src/app/main/components/input/input.module#InputModule'
}];
