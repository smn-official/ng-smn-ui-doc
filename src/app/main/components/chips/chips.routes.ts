import {Routes} from '@angular/router';

export const CHIPS: Routes = [{
    path: 'chips',
    loadChildren: 'src/app/main/components/chips/chips.module#ChipsModule'
}];
